import Link from "next/link";

export const metadata = { title: "入部するには" };

export default function Page() {
  return (
    <>
      <h1>入部するには</h1>
      <p className="intro">サークルの目的に共感してくれる方を歓迎します。興味のある分野への参加や掛け持ちは自由です。</p>
      <h2>入会の流れ</h2>
      <ol className="list-decimal pl-6 my-4 space-y-1">
        <li><Link href="/community/team">代表または分野リーダー</Link>に「志望理由」と「これまでの活動・実績」を伝えてください。</li>
        <li>入会後の最初の<strong>1週間</strong>はお試し期間です。</li>
      </ol>
      <h2>入会後の活動</h2>
      <p><strong>1ヶ月に1回</strong>、大会・勉強会・イベントなどに参加して活動報告書を提出してください。結果は問いません。</p>
      <p>詳しくは<Link href="/community/rules">会則</Link>をご覧ください。</p>
    </>
  );
}
