'use client';

import { useState, useEffect } from 'react';

const words = [
  'Your Fitness',
  'Your Community',
  'Your Transformation',
];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block text-blue-glow transition-all duration-500 ${
        fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      {words[index]}
    </span>
  );
}