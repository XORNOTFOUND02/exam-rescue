"use client";

import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className={`relative ${className}`}>
      {!isPlaying ? (
        <div 
          className="relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnailUrl}
            alt={title || 'Video thumbnail'}
            className="w-full aspect-video object-cover rounded-xl"
            onError={(e) => {
              // Fallback to standard thumbnail if maxres fails
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </div>

          {/* Title bar */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
              <p className="text-white text-sm font-medium line-clamp-2">{title}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>
          
          {/* YouTube iframe */}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title || 'YouTube video'}
            className="w-full aspect-video rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
