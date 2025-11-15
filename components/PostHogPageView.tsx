'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';

export function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + '?' + searchParams.toString();
      }
      
      const eventData = { $current_url: url };
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 PostHog Event [DEV]: $pageview', eventData);
      }
      posthog.capture('$pageview', eventData);
    }
  }, [pathname, searchParams]);

  return null;
}
