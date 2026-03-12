export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Coming Soon
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          IDR Resolutions
        </h1>
        <p className="mt-6 text-lg text-zinc-300 sm:text-xl">
          AI-powered reimbursement optimization for private surgical practices.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="mailto:youremail@example.com"
            className="rounded-full bg-white px-6 py-3 text-black font-medium"
          >
            Book a Demo
          </a>
          <button className="rounded-full border border-white/20 px-6 py-3 font-medium text-white">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}