"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { site, topNav, learnSidebar, communitySidebar } from "@/content/site";

function toggleTheme() {
  const dark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
}

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-wash/90 dark:bg-wash-dark/90 backdrop-blur border-b border-border dark:border-border-dark">
      <nav className="flex items-center gap-4 h-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <button
          className="lg:hidden p-2 -ml-2 rounded-full hover:bg-card dark:hover:bg-card-dark"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-2 font-bold text-lg whitespace-nowrap hover:text-link dark:hover:text-link-dark"
        >
          <Logo className="w-8 h-8 text-link dark:text-link-dark" />
          {site.name}
        </Link>
        <div className="hidden lg:flex flex-1 justify-center">
          <span className="flex items-center gap-2 w-full max-w-md h-10 px-4 rounded-full bg-card dark:bg-card-dark text-secondary dark:text-secondary-dark text-sm">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            {site.tagline}
          </span>
        </div>
        <div className="flex-1 lg:flex-none" />
        <ul className="hidden lg:flex items-center gap-1">
          {topNav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full font-medium ${active ? "bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark" : "hover:bg-card dark:hover:bg-card-dark"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggleTheme}
          aria-label="テーマ切り替え"
          className="p-2 rounded-full hover:bg-card dark:hover:bg-card-dark"
        >
          <svg
            className="w-6 h-6 dark:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
          <svg
            className="w-6 h-6 hidden dark:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </button>
        <a
          href={site.github}
          aria-label="GitHub"
          className="p-2 rounded-full hover:bg-card dark:hover:bg-card-dark"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
          </svg>
        </a>
      </nav>
      {open && (
        <div className="lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border dark:border-border-dark px-4 py-4">
          {[...learnSidebar, ...communitySidebar].map((s) => (
            <div key={s.title} className="mb-4">
              <p className="px-3 mb-1 text-sm font-bold text-secondary dark:text-secondary-dark">
                {s.title}
              </p>
              {s.items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={close}
                  className="block px-3 py-2 rounded-lg hover:bg-card dark:hover:bg-card-dark"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/blog"
            onClick={close}
            className="block px-3 py-2 rounded-lg font-bold hover:bg-card dark:hover:bg-card-dark"
          >
            ブログ
          </Link>
        </div>
      )}
    </header>
  );
}
