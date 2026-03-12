export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-red-900 border-b border-black">
        {/* Mobile */}
        <div className="block md:hidden px-4 py-4">
          <h1 className="text-3xl font-light tracking-tight">
            IDR Resolutions
          </h1>
          <nav className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <a href="#" className="hover:opacity-80">
              About
            </a>
            <a href="#" className="hover:opacity-80">
              Careers
            </a>
            <a href="#" className="hover:opacity-80">
              Contact
            </a>
            <a
              href="#"
              className="rounded-none bg-zinc-900 px-3 py-2 font-semibold text-white hover:bg-zinc-800"
            >
              Log In
            </a>
          </nav>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <section className="h-[13.333vh] bg-red-900 border-b-2 border-none">
            <div className="flex items-start justify-between px-4 pt-4">
              <h1 className="text-5xl font-light tracking-tight">
                IDR Resolutions
              </h1>

              <nav className="flex items-center gap-8 text-2xl">
                <a href="#" className="hover:opacity-80">
                  About
                </a>
                <a href="#" className="hover:opacity-80">
                  Careers
                </a>
                <a href="#" className="hover:opacity-80">
                  Contact
                </a>
                <a
                  href="#"
                  className="rounded-none bg-zinc-900 px-3 py-2 font-semibold text-white hover:bg-zinc-800"
                >
                  Log In
                </a>
              </nav>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}