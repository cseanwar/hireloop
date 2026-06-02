import Link from "next/link";
import { LogoFacebook, LogoLinkedin, LogoGithub } from "@gravity-ui/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* TOP SECTION */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="logo image"
              width={150}
              height={50}
              className="object-contain"
            />

            {/* Description */}
            <p className="max-w-xs text-base leading-8 text-[#FFFFFF50]">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-6">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition hover:bg-[#5C53FE]/80"
              >
                <LogoFacebook className="h-6 w-6" />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition hover:bg-[#5C53FE]/80"
              >
                <LogoGithub className="h-6 w-6" />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition hover:bg-[#5C53FE]/80"
              >
                <LogoLinkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex gap-18 justify-center">
            {/* PRODUCT */}
            <div>
              <h3 className="mb-6 text-lg font-medium text-[#5C53FE]">
                Product
              </h3>

              <ul className="space-y-4 text-base text-[#D0D5DD70]">
                <li>
                  <Link href="/jobs" className="transition hover:text-white">
                    Job discovery
                  </Link>
                </li>

                <li>
                  <Link
                    href="/worker-ai"
                    className="transition hover:text-white"
                  >
                    Worker AI
                  </Link>
                </li>

                <li>
                  <Link
                    href="/companies"
                    className="transition hover:text-white"
                  >
                    Companies
                  </Link>
                </li>

                <li>
                  <Link href="/salary" className="transition hover:text-white">
                    Salary data
                  </Link>
                </li>
              </ul>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="mb-6 text-lg font-medium text-[#5C53FE]">
                Navigations
              </h3>

              <ul className="space-y-4 text-base text-[#D0D5DD70]">
                <li>
                  <Link
                    href="/help-center"
                    className="transition hover:text-white"
                  >
                    Help center
                  </Link>
                </li>

                <li>
                  <Link
                    href="/career-library"
                    className="transition hover:text-white"
                  >
                    Career library
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="mb-6 text-lg font-medium text-[#5C53FE]">
                Resources
              </h3>

              <ul className="space-y-4 text-base text-[#D0D5DD70]">
                <li>
                  <Link
                    href="/brand-guideline"
                    className="transition hover:text-white"
                  >
                    Brand Guideline
                  </Link>
                </li>

                <li>
                  <Link
                    href="/newsroom"
                    className="transition hover:text-white"
                  >
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-5 text-sm text-gray-500 md:flex-row">
          <p>Copyright 2024 — Hire Loop</p>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Policy
            </Link>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
