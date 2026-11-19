import { DocsLayout } from "@/components/DocsLayout";
import { learnSidebar } from "@/content/site";

export default function Layout({ children }: LayoutProps<"/learn">) {
  return <DocsLayout sidebar={learnSidebar}>{children}</DocsLayout>;
}
