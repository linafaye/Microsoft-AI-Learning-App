
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Confetti = () => {
  const [pieces, setPieces] = useState<Array<{
    id: number;
    x: number;
    delay: number;
    animation: string;
    color: string;
  }>>([]);
  
  useEffect(() => {
    const colors = ['#8B5CF6', '#0EA5E9', '#10B981', '#F59E0B', '#EF4444'];
    const animations = ['confetti-slow', 'confetti-medium', 'confetti-fast'];
    
    const newPieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random position
      delay: Math.random() * 3, // random delay
      animation: animations[Math.floor(Math.random() * animations.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    setPieces(newPieces);
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={cn(
            "absolute w-2 h-2 opacity-70",
            `animate-${piece.animation}`
          )}
          style={{
            left: `${piece.x}%`,
            top: '-20px',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationIterationCount: 1,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
