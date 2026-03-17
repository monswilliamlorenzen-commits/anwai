"use client";

import { useRef, useState, useEffect } from "react";

const CROSSFADE_START = 0.8;

export function SeamlessVideoBg() {
  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<1 | 2>(1);

  useEffect(() => {
    const v1 = video1.current;
    const v2 = video2.current;
    if (!v1 || !v2) return;

    v1.play();

    const handleTimeUpdate = (e: Event) => {
      const current = e.target as HTMLVideoElement;
      const next = current === v1 ? v2 : v1;
      if (!current.duration || !next) return;

      const timeLeft = current.duration - current.currentTime;
      if (timeLeft <= CROSSFADE_START && next.paused) {
        next.currentTime = 0;
        next.play();
        setActive((prev) => (prev === 1 ? 2 : 1));
      }
    };

    v1.addEventListener("timeupdate", handleTimeUpdate);
    v2.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      v1.removeEventListener("timeupdate", handleTimeUpdate);
      v2.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 opacity-60">
      <video
        ref={video1}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: active === 1 ? 1 : 0 }}
      >
        <source src="/stars-bg.mp4" type="video/mp4" />
      </video>
      <video
        ref={video2}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: active === 2 ? 1 : 0 }}
      >
        <source src="/stars-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
