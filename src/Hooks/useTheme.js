import { useEffect, useState } from "react";


export const useTheme = ()=>{
    const [theme, setTheme] = useState(()=>{
        return (localStorage.getItem('theme') ) || 'system';
    })

    useEffect(()=>{
        const root = window.document.documentElement;

         // Determine the active theme
        const activeTheme = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;

        root.classList.remove('light', 'dark');
        root.classList.add(activeTheme);

        // Store the user's theme preference
        localStorage.setItem('theme', theme);
    },[theme]);

    return {theme, setTheme};
}