import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, posts } from "@/content/site";

function Section({
  title,
  children,
  wash,
}: {
  title: string;
  children: React.ReactNode;
  wash?: boolean;
}) {
  return (
    <section
      className={`px-5 py-20 lg:py-28 ${wash ? "bg-card dark:bg-card-dark/40" : ""}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center leading-tight mb-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

const Code = ({ children }: { children: string }) => (
  <pre className="rounded-2xl bg-wash-dark text-[#f6f7f9] text-sm leading-6 p-6 overflow-x-auto shadow-lg font-mono">
    <code>{children}</code>
  </pre>
);

export default function Home() {
  return (
    <>
      <section className="px-5 pt-20 pb-24 lg:pt-32 text-center">
        <Logo className="w-32 h-32 lg:w-44 lg:h-44 mx-auto text-link dark:text-link-dark" />
        <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
          {site.name}
        </h1>
        <p className="mt-4 text-2xl lg:text-4xl text-secondary dark:text-secondary-dark leading-snug">
          AIとゲームを、
          <br className="sm:hidden" />
          自分たちの手でつくる。
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link
            href="/learn"
            className="px-6 py-3 rounded-full bg-link dark:bg-link-dark text-white dark:text-wash-dark font-bold text-lg hover:opacity-90"
          >
            活動を知る
          </Link>
          <Link
            href="/learn/join"
            className="px-6 py-3 rounded-full bg-card dark:bg-card-dark font-bold text-lg ring-1 ring-border dark:ring-border-dark hover:bg-border dark:hover:bg-secondary"
          >
            入部する
          </Link>
        </div>
      </section>

      <Section title="遊べるものをつくる" wash>
        <p className="max-w-2xl mx-auto text-center text-xl text-secondary dark:text-secondary-dark mb-12">
          企画からプログラム、グラフィック、サウンドまで。チームで1本のゲームを完成させ、公開するところまでやりきります。
        </p>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Code>{`class Player {
  update(dt: number) {
    if (input.jump && this.onGround) {
      this.vy = -JUMP_POWER;
    }
    this.vy += GRAVITY * dt;
    this.y  += this.vy * dt;
  }
}`}</Code>
          <ul className="space-y-4 text-lg">
            {[
              "Unity / Godot / Webでのゲーム制作",
              "学内・オンラインのゲームジャムに参加",
              "作品はGitHubやitch.ioで公開",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="mt-1 w-6 h-6 shrink-0 rounded-full bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark grid place-items-center text-sm font-bold">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="ゲームにAIを組み込む">
        <p className="max-w-2xl mx-auto text-center text-xl text-secondary dark:text-secondary-dark mb-12">
          賢い敵、会話できるNPC、自動生成されるステージ。機械学習や大規模言語モデルを使って、新しい遊びを探ります。
        </p>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <ul className="space-y-4 text-lg order-2 lg:order-1">
            {[
              "強化学習でゲームを攻略するエージェント",
              "LLMを使った対話NPC",
              "プロシージャル生成と画像生成AI",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="mt-1 w-6 h-6 shrink-0 rounded-full bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark grid place-items-center text-sm font-bold">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="order-1 lg:order-2">
            <Code>{`for episode in range(1000):
    state = env.reset()
    done = False
    while not done:
        action = agent.act(state)
        state, reward, done = env.step(action)
        agent.learn(reward)`}</Code>
          </div>
        </div>
      </Section>

      <Section title="最新のお知らせ" wash>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="/blog"
              className="block w-full md:w-80 p-6 rounded-2xl bg-wash dark:bg-wash-dark shadow-sm hover:shadow-md ring-1 ring-border dark:ring-border-dark"
            >
              <time className="text-sm text-secondary dark:text-secondary-dark">
                {p.date}
              </time>
              <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-secondary dark:text-secondary-dark">
                {p.summary}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="px-5 py-24 text-center">
        <Logo className="w-20 h-20 mx-auto text-link dark:text-link-dark" />
        <h2 className="mt-6 text-4xl lg:text-5xl font-bold">一緒につくろう</h2>
        <p className="mt-4 text-xl text-secondary dark:text-secondary-dark">
          経験は問いません。つくりたい気持ちがあれば大歓迎です。
        </p>
        <Link
          href="/learn/join"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-link dark:bg-link-dark text-white dark:text-wash-dark font-bold text-lg hover:opacity-90"
        >
          入部について
        </Link>
      </section>
    </>
  );
}
