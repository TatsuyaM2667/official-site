import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: "ゲーム開発・AI・情報セキュリティ・組み込みで実績作りとスキルアップを目指すサークルの公式サイトです。",
};

// 描画前にテーマを適用してちらつきを防ぐ
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <TopNav />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border dark:border-border-dark bg-wash dark:bg-wash-dark">
          <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col sm:flex-row gap-4 justify-between text-sm text-secondary dark:text-secondary-dark">
            <p>© {site.name}</p>
            <a
              href={site.github}
              className="hover:text-link dark:hover:text-link-dark"
            >
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
