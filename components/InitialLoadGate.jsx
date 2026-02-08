"use client";

import { useEffect, useState } from "react";
import PortfolioPreloader from "@/components/PortfolioPreloader";

const MIN_PRELOADER_MS = 500;
const PRELOADER_FADE_MS = 420;

export default function InitialLoadGate({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [renderPreloader, setRenderPreloader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPreloader(false);
    }, MIN_PRELOADER_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPreloader) return;

    const timer = window.setTimeout(() => {
      setRenderPreloader(false);
    }, PRELOADER_FADE_MS);

    return () => window.clearTimeout(timer);
  }, [showPreloader]);

  useEffect(() => {
    const htmlPrevOverflow = document.documentElement.style.overflow;
    const bodyPrevOverflow = document.body.style.overflow;

    if (showPreloader) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = htmlPrevOverflow;
      document.body.style.overflow = bodyPrevOverflow;
    }

    return () => {
      document.documentElement.style.overflow = htmlPrevOverflow;
      document.body.style.overflow = bodyPrevOverflow;
    };
  }, [showPreloader]);

  return (
    <>
      <div
        className={`transition-opacity duration-500 ${showPreloader ? "opacity-0 pointer-events-none select-none" : "opacity-100"}`}
        aria-hidden={showPreloader}
      >
        {children}
      </div>

      {renderPreloader && (
        <PortfolioPreloader
          className={`transition-opacity duration-[420ms] ${showPreloader ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />
      )}
    </>
  );
}
