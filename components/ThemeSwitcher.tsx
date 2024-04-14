'use client'

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme:string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className='flex gap-4'>
      <Button size='sm' variant='flat' onClick={() => handleThemeChange('light')}>
        Light
      </Button>
      <Button size='sm' variant='flat' onClick={() => handleThemeChange('dark')}>
        Dark
      </Button>
      <Button size='sm' variant='flat' onClick={() => handleThemeChange('cupcake')}>
        Modern
      </Button>
    </div>
  );
}

