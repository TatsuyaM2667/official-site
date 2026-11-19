export const metadata = { title: "ゲーム開発" };

export default function Page() {
  return (
    <>
      <h1>ゲーム開発</h1>
      <p className="intro">
        企画からリリースまで、チームで1本のゲームを完成させます。
      </p>
      <h2>使っているツール</h2>
      <ul>
        <li>
          ゲームエンジン：<code>Unity</code> / <code>Godot</code>
        </li>
        <li>
          Webゲーム：<code>TypeScript</code> + Canvas / WebGL
        </li>
        <li>
          バージョン管理：<code>Git</code> / GitHub
        </li>
      </ul>
      <h2>役割</h2>
      <p>
        プログラム、グラフィック、サウンド、企画など、得意なことから参加できます。未経験の分野に挑戦するのも歓迎です。
      </p>
      <h2>ゲームジャム</h2>
      <p>
        短期間でテーマに沿ったゲームを作るイベントに定期的に参加しています。初心者が最初の1本を完成させるのにも最適です。
      </p>
    </>
  );
}
