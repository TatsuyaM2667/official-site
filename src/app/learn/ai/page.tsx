export const metadata = { title: "AI開発" };

export default function Page() {
  return (
    <>
      <h1>AI開発</h1>
      <p className="intro">AIを使って、これまでにない遊びをつくります。</p>
      <h2>取り組んでいるテーマ</h2>
      <h3>ゲームを遊ぶAI</h3>
      <p>
        強化学習を使って、ゲームを攻略するエージェントを育てます。作ったゲームをそのまま学習環境にできるのがこのサークルの強みです。
      </p>
      <h3>会話するNPC</h3>
      <p>
        大規模言語モデル（LLM）を使い、プレイヤーと自由に会話できるキャラクターを作ります。
      </p>
      <h3>コンテンツ生成</h3>
      <p>
        ステージの自動生成や、画像生成AIを使ったアセット制作を試しています。
      </p>
      <h2>使っているツール</h2>
      <ul>
        <li>
          <code>Python</code> / <code>PyTorch</code>
        </li>
        <li>各種LLM API</li>
      </ul>
    </>
  );
}
