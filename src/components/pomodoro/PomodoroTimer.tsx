"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, RotateCcw, SkipForward, Coffee, BookOpen, Timer, Volume2, VolumeX } from "lucide-react";

type TimerMode = "focus" | "shortBreak" | "longBreak";

interface PomodoroSettings {
  focus: number;      // minutes
  shortBreak: number; // minutes
  longBreak: number;  // minutes
  sessionsBeforeLong: number;
}

const DEFAULT_SETTINGS: PomodoroSettings = {
  focus: 25,
  shortBreak: 5,
  longBreak: 15,
  sessionsBeforeLong: 4,
};

const MODE_CONFIG = {
  focus: { label: "Focus Time", color: "from-purple-600 to-blue-600", ring: "stroke-purple-500", icon: BookOpen },
  shortBreak: { label: "Short Break", color: "from-emerald-600 to-teal-600", ring: "stroke-emerald-500", icon: Coffee },
  longBreak: { label: "Long Break", color: "from-orange-600 to-amber-600", ring: "stroke-orange-500", icon: Coffee },
};

export default function PomodoroTimer() {
  const [settings, setSettings] = useState<PomodoroSettings>(DEFAULT_SETTINGS);
  const [mode, setMode] = useState<TimerMode>("focus");
  const [timeLeft, setTimeLeft] = useState(settings.focus * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [totalFocusTime, setTotalFocusTime] = useState(0); // in seconds
  const [soundEnabled, setSoundEnabled] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalTime = mode === "focus" ? settings.focus * 60 
    : mode === "shortBreak" ? settings.shortBreak * 60 
    : settings.longBreak * 60;

  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Play completion sound
  const playSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbsGczIj2NysijaTkmTaLC0bpqMxxLhL3Mv3Y3HlKPxce7djsjWJvJy715PCJam8nMv3o+IFqbycy/ej4gWpvJzL96PyBam8nMv3o+IFqbycy/ej8gWpvJzL96PyBam8nMv3o+IFqbycy/ej8gWpvJzL96PyBam8nMv3o+IFqbycy/ej8gWpvJzL96PyA=");
      audio.play().catch(() => {});
    } catch {}
  }, [soundEnabled]);

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            playSound();
            
            // Handle mode transition
            if (mode === "focus") {
              setCompletedSessions(s => s + 1);
              setTotalFocusTime(t => t + settings.focus * 60);
              
              if ((completedSessions + 1) % settings.sessionsBeforeLong === 0) {
                setMode("longBreak");
                return settings.longBreak * 60;
              } else {
                setMode("shortBreak");
                return settings.shortBreak * 60;
              }
            } else {
              setMode("focus");
              return settings.focus * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, timeLeft, mode, completedSessions, settings, playSound]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(mode === "focus" ? settings.focus * 60 : mode === "shortBreak" ? settings.shortBreak * 60 : settings.longBreak * 60);
  };
  const handleSkip = () => {
    setIsRunning(false);
    if (mode === "focus") {
      setCompletedSessions(s => s + 1);
      if ((completedSessions + 1) % settings.sessionsBeforeLong === 0) {
        setMode("longBreak");
        setTimeLeft(settings.longBreak * 60);
      } else {
        setMode("shortBreak");
        setTimeLeft(settings.shortBreak * 60);
      }
    } else {
      setMode("focus");
      setTimeLeft(settings.focus * 60);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const formatTotalTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  const ModeIcon = MODE_CONFIG[mode].icon;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-lg w-full space-y-8">
        {/* Mode Selector */}
        <div className="flex gap-2 justify-center">
          {(["focus", "shortBreak", "longBreak"] as const).map(m => (
            <button key={m} onClick={() => { if (!isRunning) { setMode(m); setTimeLeft(m === "focus" ? settings.focus * 60 : m === "shortBreak" ? settings.shortBreak * 60 : settings.longBreak * 60); } }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${mode === m ? `bg-gradient-to-r ${MODE_CONFIG[m].color} text-white shadow-lg` : "bg-white/5 text-white/50 hover:bg-white/10"}`}>
              {MODE_CONFIG[m].label}
            </button>
          ))}
        </div>

        {/* Timer Circle */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 256 256">
              <circle cx="128" cy="128" r="120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              <circle cx="128" cy="128" r="120" fill="none" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
                className={`${MODE_CONFIG[mode].ring} transition-all duration-1000`} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <ModeIcon className="w-6 h-6 text-white/40 mb-2" />
              <span className="text-5xl font-mono font-bold text-white">{formatTime(timeLeft)}</span>
              <span className="text-sm text-white/40 mt-1">{MODE_CONFIG[mode].label}</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button onClick={handleReset} className="p-3 rounded-xl bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all">
            <RotateCcw className="w-5 h-5" />
          </button>
          <button onClick={isRunning ? handlePause : handleStart}
            className={`p-4 rounded-2xl bg-gradient-to-r ${MODE_CONFIG[mode].color} text-white shadow-lg hover:shadow-xl transition-all hover:scale-105`}>
            {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button onClick={handleSkip} className="p-3 rounded-xl bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Sound Toggle */}
        <div className="flex justify-center">
          <button onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all">
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold text-white">{completedSessions}</div>
            <div className="text-xs text-white/40">Sessions Done</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold text-white">{formatTotalTime(totalFocusTime)}</div>
            <div className="text-xs text-white/40">Total Focus</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold text-white">{completedSessions * 10}</div>
            <div className="text-xs text-white/40">XP Earned</div>
          </div>
        </div>

        {/* Session Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: settings.sessionsBeforeLong }).map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all ${i < (completedSessions % settings.sessionsBeforeLong) ? "bg-purple-500 shadow-lg shadow-purple-500/50" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
