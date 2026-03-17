import { notFound } from "next/navigation";
import { getContentBySlug, getAllContent } from "@/lib/mdx";
import { MdxContent } from "@/components/content/MdxContent";
import { CTABanner } from "@/components/layout/CTABanner";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string; locale: string };
}

export async function generateStaticParams() {
  const posts = getAllContent("blog", "de");
  return posts.map((post) => ({ slug: post.slug, locale: "de" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { meta } = getContentBySlug("blog", params.locale, params.slug);
    return {
      title: `${meta.title} — AI Act Check Blog`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "article",
        publishedTime: meta.date,
      },
    };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: Props) {
  let content;
  try {
    content = getContentBySlug("blog", params.locale, params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <article className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/de/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>{content.meta.title}</span>
        </nav>

        <p className="text-sm text-gray-400 mb-2">{content.meta.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{content.meta.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{content.meta.description}</p>

        <MdxContent source={content.content} />
      </article>
      <CTABanner />
    </>
  );
}
