import { posts } from "@/content/site";

export const metadata = { title: "ブログ" };

export default function Page() {
  return (
    <main className="px-5 py-16 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold">ブログ</h1>
      <p className="mt-4 text-xl text-secondary dark:text-secondary-dark">
        サークルの活動報告やお知らせ。
      </p>
      <div className="mt-12 space-y-6">
        {posts.map((p) => (
          <article
            key={p.title}
            className="p-6 rounded-2xl ring-1 ring-border dark:ring-border-dark"
          >
            <time className="text-sm text-secondary dark:text-secondary-dark">
              {p.date}
            </time>
            <h2 className="mt-1 text-2xl font-bold">{p.title}</h2>
            <p className="mt-2 text-lg text-secondary dark:text-secondary-dark">
              {p.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
