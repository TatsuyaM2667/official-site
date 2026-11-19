import Link from "next/link";
import { site } from "@/content/site";

export const metadata = { title: "サークルについて" };

export default function Page() {
  return (
    <>
      <h1>サークルについて</h1>
      <p className="intro">
        {site.name}は、ゲーム開発・情報セキュリティ・AI・組み込み技術などに興味があるメンバーが集まり、大会出場や論文執筆などの「実績作り」と「スキルアップ」を目指すサークルです。
      </p>
      <h2>目的</h2>
      <p>
        「遊べるもの」を実際に完成させることを大切にしています。アイデアを形にし、人に遊んでもらい、フィードバックを受けて改善する。その繰り返しで技術とチーム開発の力を身につけます。
      </p>
      <h2>活動の柱</h2>
      <ul>
        <li>
          <Link href="/learn/games">ゲーム開発</Link> —
          チームでゲームを企画・制作・公開する
        </li>
        <li>
          <Link href="/learn/ai">AI開発</Link> — 機械学習やLLMをゲームに組み込む
        </li>
      </ul>
      <h2>普段の活動</h2>
      <ul>
        <li>大会（ゲームジャム・CTF・コンテストなど）への出場</li>
        <li>勉強会・イベント</li>
        <li>論文執筆・発表</li>
        <li>総会（1学期に2回）</li>
      </ul>
    </>
  );
}
