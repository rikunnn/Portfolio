'use client';

import { setLanguage } from '@/app/actions';
import { Button } from '@once-ui-system/core';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'ja';
}

export function LanguageSwitcher({ currentLanguage }: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [language, setCurrentLanguage] = useState<'en' | 'ja'>(currentLanguage);

  const handleLanguageChange = async (newLanguage: 'en' | 'ja') => {
    if (newLanguage === language) return;

    setCurrentLanguage(newLanguage);

    try {
      const result = await setLanguage(newLanguage);
      if (result.success) {
        startTransition(() => {
          router.refresh();
        });
      }
    } catch (error) {
      console.error('Failed to change language:', error);
      // Revert on error
      setCurrentLanguage(currentLanguage);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: 1000,
      display: 'flex',
      gap: '0.5rem',
    }}>
      <Button
        onClick={() => handleLanguageChange('en')}
        variant={language === 'en' ? 'primary' : 'secondary'}
        size="s"
        disabled={isPending}
      >
        EN
      </Button>
      <Button
        onClick={() => handleLanguageChange('ja')}
        variant={language === 'ja' ? 'primary' : 'secondary'}
        size="s"
        disabled={isPending}
      >
        日本語
      </Button>
    </div>
  );
}
