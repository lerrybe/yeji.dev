import { useState, useEffect } from 'react';

export default function useTheme(): [boolean, () => void] {
  const DARK = 'dark';
  const LIGHT = 'light';

  const localStorageChecker = (): boolean => {
    if (typeof window === 'undefined') return false;
    if (!localStorage?.getItem('theme')) return false;
    return localStorage.getItem('theme') === DARK;
  };

  const [isDark, setIsDark] = useState(localStorageChecker());

  const toggleTheme = () => {
    setIsDark(state => {
      const update = !state;
      if (update) {
        localStorage.setItem('theme', DARK);
      } else {
        localStorage.setItem('theme', LIGHT);
      }
      return update;
    });
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === DARK) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.remove(DARK);
    }
  }, [isDark]);

  return [isDark, toggleTheme];
}
