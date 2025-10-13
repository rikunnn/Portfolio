'use server';

import { cookies } from 'next/headers';

export async function setLanguage(language: 'en' | 'ja') {
  const cookieStore = await cookies();
  cookieStore.set('language', language, {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: '/',
    sameSite: 'lax',
  });

  return { success: true };
}
