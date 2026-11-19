import Link from "next/link";
import { cacheLife } from "next/cache";
import { officers, type Member } from "@/content/site";

export const metadata = { title: "メンバー紹介" };

type Profile = {
  login: string;
  name: string;
  bio: string | null;
  avatar: string;
  links: { label: string; href: string }[];
};

const LABELS: Record<string, string> = { twitter: "X", linkedin: "LinkedIn", instagram: "Instagram", youtube: "YouTube", bluesky: "Bluesky", facebook: "Facebook", mastodon: "Mastodon" };

// "user" と "https://github.com/user" のどちらでも受け付ける
const toLogin = (github: string) => github.trim().replace(/^https?:\/\/github\.com\//, "").split(/[/?#]/)[0];

async function getProfile(login: string): Promise<Profile> {
  "use cache";
  cacheLife("days");
  const headers: HeadersInit = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
  const fallback: Profile = { login, name: login, bio: null, avatar: `https://github.com/${login}.png?size=320`, links: [] };
  try {
    const [user, socials] = await Promise.all(
      [`users/${login}`, `users/${login}/social_accounts`].map(async (path) => {
        const res = await fetch(`https://api.github.com/${path}`, { headers });
        if (!res.ok) throw new Error(`GitHub API ${res.status}: ${path}`);
        return res.json();
      }),
    );
    const links: Profile["links"] = (socials as { provider: string; url: string }[]).map((s) => ({
      label: LABELS[s.provider] ?? new URL(s.url).hostname.replace(/^www\./, ""),
      href: s.url,
    }));
    if (user.blog) links.unshift({ label: "Web", href: /^https?:\/\//.test(user.blog) ? user.blog : `https://${user.blog}` });
    return { login, name: user.name || login, bio: user.bio, avatar: `${user.avatar_url}${user.avatar_url.includes("?") ? "&" : "?"}s=320`, links };
  } catch (e) {
    // レート制限などで取れなくてもビルドは止めず、アイコンとユーザー名だけ出す
    console.warn(`[team] GitHubプロフィールを取得できませんでした (${login}):`, e);
    return fallback;
  }
}

async function TeamMember({ m }: { m: Member }) {
  const login = toLogin(m.github);
  if (!login) {
    return (
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 my-10">
        <div aria-hidden="true" className="w-40 h-40 shrink-0 rounded-full bg-card dark:bg-card-dark grid place-items-center text-5xl text-secondary dark:text-secondary-dark">?</div>
        <div className="flex-1">
          <h3 className="mt-0! mb-0! text-3xl!">未定</h3>
          <p className="my-1! font-medium text-base!">{m.role}</p>
        </div>
      </div>
    );
  }

  const p = await getProfile(login);
  const links = [{ label: "GitHub", href: `https://github.com/${p.login}` }, ...p.links];

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 my-10">
      {/* eslint-disable-next-line @next/next/no-img-element -- 外部のGitHubアイコンなので最適化は不要 */}
      <img src={p.avatar} alt="" className="w-40 h-40 shrink-0 rounded-full object-cover bg-card dark:bg-card-dark" />
      <div className="flex-1">
        <h3 className="mt-0! mb-0! text-3xl!">{p.name}</h3>
        <p className="my-1! font-medium text-base!">{m.role}</p>
        {p.bio && <p className="mt-3! mb-3! whitespace-pre-line">{p.bio}</p>}
        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-base!">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <h1>メンバー紹介</h1>
      <p className="intro">
        Ai×Game開発部は、以下の役員を中心に運営されています。
        運営体制について詳しくは<Link href="/community/rules#organization">会則</Link>をご覧ください。
      </p>
      {officers.map((m, i) => <TeamMember key={i} m={m} />)}
    </>
  );
}
