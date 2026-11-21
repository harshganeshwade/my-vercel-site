import React, { useEffect } from 'react';

/**
 * Webflow / Linear Style Cursor-Tracking Spotlight Borders
 * 
 * Tracks the mouse position over cards and dynamically sets --mouse-x and --mouse-y
 * CSS custom properties on each hovered card so the 1px neon border glows directly
 * under the user's cursor.
 */
const SpotlightTracker = () => {
  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handlePointerMove = (e) => {
      const card = e.target.closest(
        '.cyber-card, .glass-card, .stat-card, .timeline-item, .cert-ledger-row, .skill-card, .project-card, .book-card-3d'
      );

      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return null;
};

export default SpotlightTracker;
