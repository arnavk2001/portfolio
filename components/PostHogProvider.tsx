'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDev = process.env.NODE_ENV === 'development';
      const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

      if (!posthogKey) {
        console.warn('⚠️ PostHog key not found. Set NEXT_PUBLIC_POSTHOG_KEY in .env.local');
        return;
      }

      posthog.init(posthogKey, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll capture manually
        capture_pageleave: true,
        
        // Disable in development to avoid polluting production data
        loaded: (posthog) => {
          if (isDev) {
            posthog.opt_out_capturing(); // Don't send data to PostHog
            console.log('🔍 PostHog initialized in DEV mode');
            console.log('📊 Events will be logged to console only (not sent to dashboard)');
          } else {
            console.log('✅ PostHog initialized in PRODUCTION mode');
          }
        },
        
        // Autocapture configuration
        autocapture: {
          dom_event_allowlist: ['click'], // Only capture clicks
          url_allowlist: isDev ? [] : ['arnavvkulkarni.com'],
          element_allowlist: ['button', 'a'],
          css_selector_allowlist: [
            '[data-ph-capture]', // Custom data attribute for tracking
          ],
        },
      });

      // Override posthog.capture in development to log to console
      if (isDev) {
        const originalCapture = posthog.capture.bind(posthog);
        posthog.capture = (eventName: string, properties?: Record<string, unknown>) => {
          console.log('📊 PostHog Event [DEV]:', eventName, properties);
          return originalCapture(eventName, properties);
        };
      }

      // Scroll depth tracking
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

        if (scrollPercentage > maxScrollDepth) {
          maxScrollDepth = scrollPercentage;
          
          // Track at 25%, 50%, 75%, 100% milestones
          if ([25, 50, 75, 100].includes(scrollPercentage)) {
            const eventData = {
              depth_percentage: scrollPercentage,
              page_path: window.location.pathname,
            };
            console.log('📊 PostHog Event [DEV]: scroll_depth', eventData);
            posthog.capture('scroll_depth', eventData);
          }
        }
      };

      // Throttled scroll handler
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(trackScrollDepth, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
