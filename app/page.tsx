export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.14),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-600" />
              <span className="text-sm uppercase tracking-[0.28em] text-white/70">
                IDR Resolutions
              </span>
            </div>
            <a
              href="mailto:YOUR_EMAIL_HERE"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-red-600 hover:text-white"
            >
              Contact
            </a>
          </header>

          <div className="flex flex-1 items-center py-16 sm:py-20 lg:py-24">
            <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-red-200">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  AI-powered reimbursement optimization
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  Precision infrastructure for independent dispute resolution.
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                  IDR Resolutions helps private surgical practices optimize reimbursement outcomes
                  through structured analytics, operational rigor, and machine learning-informed
                  decision support.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:bmccance2345@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-red-500"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#overview"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/88 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                  >
                    Learn More
                  </a>
                </div>

                <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">Focus</p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Private surgical practices and high-value out-of-network claims.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">Approach</p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Quantitative valuation, workflow automation, and repeatable submission logic.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">Positioning</p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Minimal, technical, and execution-focused — built for serious operators.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pl-6">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                        System Snapshot
                      </p>
                      <p className="mt-2 text-sm text-white/72">Research-grade operating surface</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                    </div>
                  </div>

                  <div className="space-y-4 py-5">
                    <div className="rounded-2xl border border-white/8 bg-black/70 p-4">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                        <span>Claim valuation</span>
                        <span className="text-red-400">Active</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div className="h-2 w-[78%] rounded-full bg-red-600" />
                      </div>
                      <p className="mt-3 text-sm text-white/68">
                        Benchmark-driven pricing logic with consistent decision thresholds.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-black/70 p-4">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                        <span>Workflow automation</span>
                        <span className="text-white/65">Monitoring</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div className="h-2 w-[64%] rounded-full bg-white" />
                      </div>
                      <p className="mt-3 text-sm text-white/68">
                        Submission support, process standardization, and operational visibility.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-black/70 p-4">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                        <span>Outcome optimization</span>
                        <span className="text-white/65">Model-informed</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div className="h-2 w-[84%] rounded-full bg-red-500" />
                      </div>
                      <p className="mt-3 text-sm text-white/68">
                        Structured recommendations designed to improve reimbursement performance.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/40">Signal</p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">High</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/40">Noise</p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Low</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-3 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">01</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              Built for clarity.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              A restrained visual system that feels institutional, technical, and credible.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">02</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              Designed for authority.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Strong typography, hard contrast, and minimal decoration keep the message sharp.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">03</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              Focused on action.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Red is used only where it matters most: calls to action, state, and emphasis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.14),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-600" />
              <span className="text-sm uppercase tracking-[0.28em] text-white/70">
                IDR Resolutions
              </span>
            </div>
            <a
              href="mailto:bmccance2345@gmail.com"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-red-600 hover:text-white"
            >
              Contact
            </a>
          </header>

          <div className="flex flex-1 items-center py-16 sm:py-20 lg:py-24">
            <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-red-200">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  AI-powered reimbursement optimization
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  Precision infrastructure for independent dispute resolution.
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                  IDR Resolutions helps private surgical practices optimize reimbursement outcomes
                  through structured analytics, operational rigor, and machine learning-informed
                  decision support.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:YOUR_EMAIL_HERE"
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-red-500"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#overview"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/88 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                  >
                    Learn More
                  </a>
                </div>

                <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">Focus</p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Private surgical practices and high-value out-of-network claims.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">Approach</p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Quantitative valuation, workflow automation, and repeatable submission logic.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">Positioning</p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Minimal, technical, and execution-focused — built for serious operators.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pl-6">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                        System Snapshot
                      </p>
                      <p className="mt-2 text-sm text-white/72">Research-grade operating surface</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                    </div>
                  </div>

                  <div className="space-y-4 py-5">
                    <div className="rounded-2xl border border-white/8 bg-black/70 p-4">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                        <span>Claim valuation</span>
                        <span className="text-red-400">Active</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div className="h-2 w-[78%] rounded-full bg-red-600" />
                      </div>
                      <p className="mt-3 text-sm text-white/68">
                        Benchmark-driven pricing logic with consistent decision thresholds.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-black/70 p-4">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                        <span>Workflow automation</span>
                        <span className="text-white/65">Monitoring</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div className="h-2 w-[64%] rounded-full bg-white" />
                      </div>
                      <p className="mt-3 text-sm text-white/68">
                        Submission support, process standardization, and operational visibility.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-black/70 p-4">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                        <span>Outcome optimization</span>
                        <span className="text-white/65">Model-informed</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div className="h-2 w-[84%] rounded-full bg-red-500" />
                      </div>
                      <p className="mt-3 text-sm text-white/68">
                        Structured recommendations designed to improve reimbursement performance.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/40">Signal</p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">High</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/40">Noise</p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Low</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-3 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">01</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              Built for clarity.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              A restrained visual system that feels institutional, technical, and credible.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">02</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              Designed for authority.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Strong typography, hard contrast, and minimal decoration keep the message sharp.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">03</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              Focused on action.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Red is used only where it matters most: calls to action, state, and emphasis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}