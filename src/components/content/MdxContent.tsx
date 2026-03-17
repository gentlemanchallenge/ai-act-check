import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const components = {
  a: (props: any) => (
    <a {...props} className="text-primary hover:underline" />
  ),
  CTACheck: () => (
    <div className="not-prose my-8 p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
      <p className="font-semibold text-lg mb-2">Nutzen Sie KI in Ihrem Unternehmen?</p>
      <p className="text-gray-600 text-sm mb-4">
        Prüfen Sie jetzt kostenlos, welche Pflichten der AI Act für Sie bereithält.
      </p>
      <Button asChild>
        <Link href="/de/check">
          Kostenloser Pflichten-Check <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  ),
};

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
