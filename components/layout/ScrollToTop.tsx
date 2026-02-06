"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop Component
 * 
 * Scrolls the window to top on route changes.
 * This fixes the issue where navigating between pages
 * doesn't reset scroll position to the top.
 * 
 * Note: We use instant scroll (not smooth) to ensure
 * immediate scroll-to-top behavior on navigation.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
