import Link from "next/link";

export const metadata = { title: "コミュニティ" };

export default function Page() {
  return (
    <>
      <h1>コミュニティ</h1>
      <p className="intro">
        メンバー同士で教え合い、つくったものを見せ合う場所です。
      </p>
      <h2>メンバー</h2>
      <p>
        サークルを支えるメンバーは{" "}
        <Link href="/community/team">メンバー紹介</Link> をご覧ください。
      </p>
      <h2>行動指針</h2>
      <ul>
        <li>つくったものは未完成でも見せる</li>
        <li>質問を歓迎し、知っていることは共有する</li>
        <li>他の人の作品とアイデアを尊重する</li>
      </ul>
    </>
  );
}
