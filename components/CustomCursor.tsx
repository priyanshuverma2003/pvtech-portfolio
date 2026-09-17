'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('a, button, [data-cursor]');
      if (clickable) {
        setIsHovered(true);
        const customLabel = clickable.getAttribute('data-cursor');
        setCursorText(customLabel || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth trailing animation
    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: isHovered ? '#00f0ff' : '#ffffff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
        }}
      />
      {/* Outer Magnetic Ring / Morphing Badge */}
      <div
        style={{
          position: 'fixed',
          top: trailingPos.y,
          left: trailingPos.x,
          width: isHovered ? (cursorText ? '80px' : '45px') : '28px',
          height: isHovered ? (cursorText ? '32px' : '45px') : '28px',
          border: isHovered ? '1.5px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.4)',
          backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.12)' : 'transparent',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          borderRadius: cursorText ? '20px' : '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background-color 0.2s ease, border-radius 0.2s ease',
          boxShadow: isHovered ? '0 0 20px rgba(0, 240, 255, 0.3)' : 'none',
        }}
      >
        {cursorText && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#00f0ff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
