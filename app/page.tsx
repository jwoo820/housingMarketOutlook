import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { readReadmeMarkdown } from "@/lib/readme";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function HomePage() {
  const markdown = await readReadmeMarkdown();

  return (
    <main className="page">
      <article className="content markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
          {markdown}
        </ReactMarkdown>
      </article>
    </main>
  );
}
