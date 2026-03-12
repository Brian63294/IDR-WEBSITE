import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Mobile */}
      <section className="bg-red-900 border-b border-black md:hidden">
        <div className="px-4 py-4">
          <Link href="/" className="inline-block hover:opacity-80">
            <h1 className="text-3xl font-light tracking-tight">
              IDR Resolutions
            </h1>
          </Link>

          <nav className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <Link href="#" className="hover:opacity-80">
              About
            </Link>
            <Link href="/what-sets-us-apart" className="hover:opacity-80">
              What Sets Us Apart
            </Link>
            <Link href="#" className="hover:opacity-80">
              Careers
            </Link>
            <Link href="#" className="hover:opacity-80">
              Contact
            </Link>
            <Link
              href="#"
              className="rounded-none bg-zinc-900 px-3 py-2 font-semibold text-white hover:bg-zinc-800"
            >
              Log In
            </Link>
          </nav>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden h-[13.333vh] bg-red-900 border-b-2 border-none md:block">
        <div className="flex items-start justify-between px-4 pt-4">
          <Link href="/" className="inline-block hover:opacity-80">
            <h1 className="text-5xl font-light tracking-tight">
              IDR Resolutions
            </h1>
          </Link>

          <nav className="flex items-center gap-8 text-2xl">
            <Link href="#" className="hover:opacity-80">
              About
            </Link>
            <Link href="/what-sets-us-apart" className="hover:opacity-80">
              What Sets Us Apart
            </Link>
            <Link href="#" className="hover:opacity-80">
              Careers
            </Link>
            <Link href="#" className="hover:opacity-80">
              Contact
            </Link>
            <Link
              href="#"
              className="rounded-none bg-zinc-900 px-3 py-2 font-semibold text-white hover:bg-zinc-800"
            >
              Log In
            </Link>
          </nav>
        </div>
      </section>

      {/* Black section */}
      <section className="bg-black px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-lg leading-relaxed text-white md:text-2xl">
            IDR Resolutions is an IDR automation and reimbursement optimization
            company for surgeons. We built a platform that uses mathematical,
            statistical, and machine learning methods to automate the entire IDR
            process from end to end.
          </p>
        </div>
      </section>

      {/* Red section under black */}
      <section className="min-h-[35vh] bg-red-900"></section>
    </main>
  );
}