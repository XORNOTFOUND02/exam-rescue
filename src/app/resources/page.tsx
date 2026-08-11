"use client";

import Link from "next/link";
import { ArrowLeft, Play, BookOpen, ExternalLink, Info } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getChapters } from "@/lib/syllabus";
import { resources } from "@/lib/resources";
import { useState, useMemo } from "react";

export default function ResourcesPage() {
  const { onboarding } = useStore();
  const [filter, setFilter] = useState<"all" | "video" | "revision" | "practice">("all");
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const chapters = onboarding.selectedSubject ? getChapters(onboarding.selectedSubject, onboarding.selectedClass ?? undefined) : [];
  const selectedChapters = chapters.filter(ch => onboarding.selectedChapters.includes(ch.id));

  const filteredResources = useMemo(() => {
    let res = resources.filter(r => r.subjectId === onboarding.selectedSubject);

    if (selectedChapter) {
      res = res.filter(r => r.chapterId === selectedChapter);
    }

    if (filter !== "all") {
      if (filter === "video") res = res.filter(r => r.resourceType === "concept" || r.resourceType === "one_shot");
      else if (filter === "revision") res = res.filter(r => r.resourceType === "revision");
      else if (filter === "practice") res = res.filter(r => r.resourceType === "practice" || r.resourceType === "numerical");
    }

    return res.sort((a, b) => b.priority - a.priority);
  }, [onboarding.selectedSubject, selectedChapter, filter]);

  if (!onboarding.selectedSubject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-8">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">No subject selected</h2>
          <p className="text-gray-500 text-sm mb-6">Complete onboarding to see resources.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white font-bold text-sm">Get Started</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href="/dashboard" className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><ArrowLeft className="w-5 h-5" /></Link>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Learning Resources</h1>
            <p className="text-xs text-gray-500">Recommended videos and study materials</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {(["all", "video", "revision", "practice"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === f ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {f === "all" ? "All Resources" : f === "video" ? "🎥 Concept Videos" : f === "revision" ? "🔄 Revision" : "✏️ Practice"}
            </button>
          ))}
        </div>

        {/* Chapter filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          <button onClick={() => setSelectedChapter(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${!selectedChapter ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-600"}`}>
            All Chapters
          </button>
          {selectedChapters.map(ch => (
            <button key={ch.id} onClick={() => setSelectedChapter(ch.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${selectedChapter === ch.id ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-600"}`}>
              Ch {ch.chapterNumber}
            </button>
          ))}
        </div>

        {/* Resources */}
        <div className="space-y-3">
          {filteredResources.map(res => {
            const chapter = chapters.find(c => c.id === res.chapterId);
            const typeIcon = res.resourceType === "concept" || res.resourceType === "one_shot" ? "🎥" :
              res.resourceType === "revision" ? "🔄" :
              res.resourceType === "numerical" ? "🔢" : "✏️";

            return (
              <a key={res.id} href={res.url} target="_blank" rel="noopener noreferrer"
                className="card card-interactive block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <Play className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs">{typeIcon}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">{res.resourceType.replace("_", " ")}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{res.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{res.provider}</span>
                      <span>·</span>
                      <span>{res.duration}</span>
                      {chapter && <><span>·</span><span>Ch {chapter.chapterNumber}</span></>}
                    </div>
                    {res.reason && (
                      <p className="text-xs text-gray-500 mt-1.5 flex items-start gap-1">
                        <Info className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{res.reason}</span>
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <div className="text-xs font-bold text-gray-400">Priority {res.priority}/10</div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">No resources found</h3>
            <p className="text-sm text-gray-500">Try adjusting your filters or check back later.</p>
          </div>
        )}

        <div className="text-center text-xs text-gray-400 mt-8">
          Resources are curated from legitimate educational creators. Always link to original sources.
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="bottom-nav">
        <Link href="/dashboard" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Home
        </Link>
        <Link href="/plan" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          Plan
        </Link>
        <Link href="/practice" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
          Practice
        </Link>
        <Link href="/progress" className="bottom-nav-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Progress
        </Link>
        <Link href="/resources" className="bottom-nav-item active">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Profile
        </Link>
      </div>
    </div>
  );
}
