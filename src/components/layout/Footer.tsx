import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/de" className="flex items-center gap-2 font-bold text-lg text-primary mb-3">
              <Shield className="h-5 w-5" />
              AI Act Check
            </Link>
            <p className="text-sm text-gray-500">
              Kostenloser Pflichten-Check für den EU AI Act. Orientierungstool, keine Rechtsberatung.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/de/check" className="hover:text-primary">Pflichten-Check</Link></li>
              <li><Link href="/de/wissen" className="hover:text-primary">Wissen</Link></li>
              <li><Link href="/de/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/de/wissen/eu-ai-act-guide" className="hover:text-primary">EU AI Act Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/de/impressum" className="hover:text-primary">Impressum</Link></li>
              <li><Link href="/de/datenschutz" className="hover:text-primary">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AI Act Check. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
