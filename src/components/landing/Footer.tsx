"use client";

import SynapseXLogo from './SynapseXLogo';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4';

function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[400px]">
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <video src={VIDEO_URL} className="w-full h-full object-cover" autoPlay muted loop playsInline />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between p-10 sm:p-16">
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <SynapseXLogo size={18} className="text-white/70" />
              <span className="text-white/70 text-[15px] font-medium tracking-tight">Exam Rescue</span>
            </div>
            <p className="text-white/40 text-[14px] sm:text-[15px] leading-relaxed max-w-sm">
              Stop panicking before exams. Start strategizing. Built for CBSE students who want to make every study session count.
            </p>
          </div>
          <p className="text-white/25 text-[12px] mt-12">&copy; 2026 Exam Rescue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
