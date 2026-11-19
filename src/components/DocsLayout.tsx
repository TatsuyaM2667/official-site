"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarSection } from "@/content/site";

export function DocsLayout({
  sidebar,
  children,
}: {
  sidebar: SidebarSection[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const flat = sidebar.flatMap((s) => s.items);
  const idx = flat.findIndex((i) => i.href === pathname);
  const prev = flat[idx - 1];
  const next = idx >= 0 ? flat[idx + 1] : undefined;

  return (
    <div className="flex max-w-[1600px] mx-auto">
      <aside className="hidden lg:block w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border dark:border-border-dark px-4 py-8">
        {sidebar.map((s) => (
          <div key={s.title} className="mb-6">
            <p className="px-4 mb-2 text-sm font-bold uppercase tracking-wide text-secondary dark:text-secondary-dark">
              {s.title}
            </p>
            <ul>
              {s.items.map((i) => {
                const active = i.href === pathname;
                return (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      aria-current={active ? "page" : undefined}
                      className={`block px-4 py-2 rounded-r-lg border-l-4 ${active ? "border-link dark:border-link-dark bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark font-bold" : "border-transparent hover:bg-card dark:hover:bg-card-dark"}`}
                    >
                      {i.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
      <main className="flex-1 min-w-0 px-5 sm:px-12 py-12">
        <article className="doc max-w-3xl mx-auto">{children}</article>
        {(prev || next) && (
          <nav className="max-w-3xl mx-auto mt-16 grid sm:grid-cols-2 gap-4">
            {prev ? <PagerLink item={prev} label="前へ" /> : <span />}
            {next && <PagerLink item={next} label="次へ" right />}
          </nav>
        )}
      </main>
    </div>
  );
}

function PagerLink({
  item,
  label,
  right,
}: {
  item: { href: string; label: string };
  label: string;
  right?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`block p-4 rounded-xl border-2 border-border dark:border-border-dark hover:border-link dark:hover:border-link-dark ${right ? "text-right" : ""}`}
    >
      <span className="block text-sm text-secondary dark:text-secondary-dark">
        {label}
      </span>
      <span className="font-bold text-lg text-link dark:text-link-dark">
        {item.label}
      </span>
    </Link>
  );
}
