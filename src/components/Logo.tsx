// オリジナルのロゴ（ゲームパッド + ニューラルノード）
export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    >
      <path d="M18 20h28a12 12 0 0 1 12 12v4a10 10 0 0 1-18 6l-2-2H26l-2 2a10 10 0 0 1-18-6v-4a12 12 0 0 1 12-12z" />
      <path d="M18 28v8M14 32h8" />
      <circle cx="44" cy="29" r="2" fill="currentColor" />
      <circle cx="50" cy="35" r="2" fill="currentColor" />
      <path d="M32 20V10M32 10l-8-4M32 10l8-4" strokeWidth="3" />
    </svg>
  );
}
