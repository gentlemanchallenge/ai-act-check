import Link from "next/link";
import { getAllContent } from "@/lib/mdx";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/layout/CTABanner";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Act Blog — Aktuelle Artikel zum EU AI Act",
  description: "Blog-Artikel zum EU AI Act: KMU-Pflichten, Fristen, ChatGPT im Unternehmen und mehr.",
};

export default function BlogPage({ params }: { params: { locale: string } }) {
  const posts = getAllContent("blog", params.locale);

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 mb-10">
            Aktuelle Artikel und Analysen zum EU AI Act für Unternehmen.
          </p>

          <div className="space-y-4">
            {posts.map((post) => (
              <Link key={post.slug} href={`/de/blog/${post.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer mb-4">
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                    <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{post.description}</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                      Weiterlesen <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
