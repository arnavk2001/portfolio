'use client';

import { useEffect, useState } from 'react';

export function DevModeIndicator() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show in development - check after mount to avoid hydration mismatch
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev && !show) {
      // Use setTimeout to avoid synchronous setState in effect
      const timer = setTimeout(() => setShow(true), 0);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 glass-strong rounded-lg px-3 py-2 shadow-lg border border-ocean-blue/30">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <span className="text-xs font-mono text-text-secondary">
          PostHog: Dev Mode
        </span>
      </div>
      <p className="text-[10px] text-text-muted mt-1">
        Events logged to console only
      </p>
    </div>
  );
}
