// サイト全体のコンテンツ。メンバーやお知らせはここを編集する。

export const site = {
  name: "Ai×Game開発部",
  tagline: "つくって、競って、実績にする",
  github: "https://github.com/SAK-Game-Development-Department",
};

export const topNav = [
  { href: "/learn", label: "活動について" },
  { href: "/community", label: "コミュニティ" },
  { href: "/blog", label: "ブログ" },
];

export type SidebarSection = {
  title: string;
  items: { href: string; label: string }[];
};

export const learnSidebar: SidebarSection[] = [
  {
    title: "はじめに",
    items: [
      { href: "/learn", label: "サークルについて" },
      { href: "/learn/join", label: "入部するには" },
    ],
  },
  {
    title: "活動",
    items: [
      { href: "/learn/games", label: "ゲーム開発" },
      { href: "/learn/ai", label: "AI開発" },
    ],
  },
];

export const communitySidebar: SidebarSection[] = [
  {
    title: "コミュニティ",
    items: [
      { href: "/community", label: "概要" },
      { href: "/community/team", label: "メンバー紹介" },
      { href: "/community/rules", label: "会則" },
    ],
  },
];

export type Member = {
  role: string;
  github: string; // GitHubのユーザー名またはプロフィールURL。名前・アイコン・自己紹介・SNSはGitHubから自動取得
};

// 会則6条の役職。github が空の枠は「未定」と表示される
// 会則5条「名簿の非公開」に注意：掲載は本人の同意を得た人だけにする
export const officers: Member[] = [
  { role: "代表", github: "" },
  { role: "副代表", github: "" },
  { role: "開発責任者", github: "" },
];

export type Post = { date: string; title: string; summary: string };

export const posts: Post[] = [
  {
    date: "2026-11-01",
    title: "公式サイトを公開しました",
    summary: "サークルの活動や作品を紹介する公式サイトを公開しました。",
  },
];
