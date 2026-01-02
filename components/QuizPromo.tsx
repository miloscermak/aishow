import React, { useState, useEffect } from 'react';
import { X, Brain } from 'lucide-react';

const EXPIRY_DATE = new Date('2026-01-11T23:59:59');

export const QuizPromo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if promotion has expired
    if (new Date() > EXPIRY_DATE) {
      setIsExpired(true);
      return;
    }

    // Check if URL contains #kviz - auto-open quiz
    if (window.location.hash === '#kviz') {
      setIsOpen(true);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#kviz') {
        setIsOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Don't render anything if expired
  if (isExpired) return null;

  return (
    <>
      {/* Floating Button */}
      {isVisible && !isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {/* Close/Hide button */}
          <button
            onClick={() => setIsVisible(false)}
            className="bg-white text-pop-black p-1 border-2 border-pop-black shadow-hard-sm hover:scale-110 hover:bg-gray-100 transition-all"
            title="Skrýt"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Main CTA button */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-pop-yellow text-pop-black font-comic text-2xl md:text-3xl px-8 py-5 border-4 border-pop-black shadow-hard hover:scale-105 hover:-rotate-2 transition-all duration-300 flex items-center gap-3 group"
            style={{
              animation: 'pulse-pop 2s ease-in-out infinite',
            }}
          >
            <Brain className="w-10 h-10 group-hover:rotate-12 transition-transform" />
            <span>Chceš si udělat AI kvíz?</span>
          </button>
        </div>
      )}

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => {
            setIsOpen(false);
            // Clear hash from URL
            if (window.location.hash === '#kviz') {
              history.replaceState(null, '', window.location.pathname);
            }
          }}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-3xl h-[90vh] bg-white border-4 border-pop-black shadow-hard"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                if (window.location.hash === '#kviz') {
                  history.replaceState(null, '', window.location.pathname);
                }
              }}
              className="absolute -top-4 -right-4 z-10 bg-pop-red text-white p-2 border-4 border-pop-black shadow-hard-sm hover:scale-110 hover:rotate-12 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Quiz iframe */}
            <iframe
              src="/kviz.html"
              className="w-full h-full border-0"
              title="AI Kvíz 2025"
            />
          </div>
        </div>
      )}

      {/* Custom animation styles */}
      <style>{`
        @keyframes pulse-pop {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            box-shadow: 6px 6px 0px 0px #111111;
          }
          50% {
            transform: scale(1.05) rotate(-2deg);
            box-shadow: 8px 8px 0px 0px #111111;
          }
        }
      `}</style>
    </>
  );
};
