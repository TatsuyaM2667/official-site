import { DocsLayout } from "@/components/DocsLayout";
import { communitySidebar } from "@/content/site";

export default function Layout({ children }: LayoutProps<"/community">) {
  return <DocsLayout sidebar={communitySidebar}>{children}</DocsLayout>;
}
