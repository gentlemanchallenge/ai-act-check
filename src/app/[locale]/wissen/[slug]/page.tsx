import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/mdx";
import { MdxContent } from "@/components/content/MdxContent";
import { CTABanner } from "@/components/layout/CTABanner";
import Link from "next/link";
import type { Metadata } from "next";

const validSlugs = ["eu-ai-act-guide", "risikoklassen", "verbotene-ki-praktiken", "fristen"];

interface Props {
  params: { slug: string; locale: string };
}

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug, locale: "de" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!validSlugs.includes(params.slug)) return {};
  try {
    const { meta } = getContentBySlug("wissen", params.locale, params.slug);
    return {
      title: `${meta.title} — AI Act Check`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "article",
      },
    };
  } catch {
    return {};
  }
}

export default function WissenDetailPage({ params }: Props) {
  if (!validSlugs.includes(params.slug)) notFound();

  let content;
  try {
    content = getContentBySlug("wissen", params.locale, params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <article className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/de/wissen" className="hover:text-primary">Wissen</Link>
          <span className="mx-2">/</span>
          <span>{content.meta.title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{content.meta.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{content.meta.description}</p>

        <MdxContent source={content.content} />
      </article>
      <CTABanner />
    </>
  );
}
