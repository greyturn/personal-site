'use client';

import { useEffect, useState } from 'react';

function useSafeLocalStorage(key: string, initialValue: string) {
    const [valueProxy, setValueProxy] = useState(() => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = (value: string) => {
        try {
            window.localStorage.setItem(key, value);
            setValueProxy(value);
        } catch {
            setValueProxy(value);
        }
    };

    return [valueProxy, setValue];
}

function usePrefersDarkMode() {
    const [value, setValue] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setValue(mediaQuery.matches);

        const handler = () => setValue(mediaQuery.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return value;
}

export function useDarkMode() {
    const [isEnabled, setIsEnabled] = useSafeLocalStorage('darkMode', 'dark');
    const prefersDarkMode = usePrefersDarkMode();

    const enabled = setIsEnabled === undefined ? prefersDarkMode : isEnabled;

    useEffect(() => {
        if (window === undefined) {
            return;
        }
        const root = window.document.documentElement;

        if (enabled) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [enabled]);

    return { enabled, setIsEnabled };
}
