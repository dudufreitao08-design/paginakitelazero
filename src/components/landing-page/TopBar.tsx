
"use client";

import React, { useState, useEffect } from 'react';

export function TopBar() {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setFormattedDate(`${day}/${month}/${year}`);
  }, []);

  return (
    <div className="w-full bg-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-bold tracking-wide uppercase">
      🔥OFERTA EXCLUSIVA APENAS HOJE - {formattedDate || '...'}
    </div>
  );
}
