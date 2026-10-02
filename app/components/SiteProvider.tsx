"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Language = "bn" | "en";
type Theme = "light" | "dark";

type SiteContextValue = {
  language: Language;
  en: boolean;
  theme: Theme;
  t: (bn: string, english: string) => string;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

function read(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable */
  }
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("bn");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLanguage = read("cpu_lang");
    if (savedLanguage === "en" || savedLanguage === "bn") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
  }, [language, theme]);

  const en = language === "en";
  const t = useCallback((bn: string, english: string) => (en ? english : bn), [en]);

  const toggleLanguage = () => {
    const next = en ? "bn" : "en";
    setLanguage(next);
    write("cpu_lang", next);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    write("cpu_theme", next);
  };

  return <SiteContext.Provider value={{ language, en, theme, t, toggleLanguage, toggleTheme }}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used inside SiteProvider");
  return context;
}
