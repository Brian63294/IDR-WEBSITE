import Link from "next/link";

export default function WhatSetsUsApartPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Mobile */}
            <section className="border-b border-black bg-red-900 md:hidden">
                <div className="px-4 py-4">
                    <Link href="/" className="inline-block hover:opacity-80">
                        <h1 className="text-3xl font-light tracking-tight">
                            IDR Resolutions
                        </h1>
                    </Link>

                    <nav className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                        <Link href="/who-we-are" className="hover:opacity-80">
                            Who We Are
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
            <section className="hidden h-[13.333vh] border-b-2 border-none bg-red-900 md:block">
                <div className="flex items-start justify-between px-4 pt-4">
                    <Link href="/" className="inline-block hover:opacity-80">
                        <h1 className="text-5xl font-light tracking-tight">
                            IDR Resolutions
                        </h1>
                    </Link>

                    <nav className="flex items-center gap-8 text-2xl">
                        <Link href="/who-we-are" className="hover:opacity-80">
                            Who We Are
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
                    <h2 className="mb-8 text-center text-3xl font-light tracking-tight md:text-5xl">
                        What Sets Us Apart
                    </h2>

                    <p className="text-center text-lg leading-relaxed text-white md:text-2xl">
                        IDR Resolutions is an AI-first company. We build our core models,
                        automation systems, and decision logic in house rather than
                        outsourcing them. Our platform is designed around private
                        claim-level data and a quantitatively driven approach to execution,
                        which allows us to operate with greater precision, adaptability, and
                        consistency throughout the IDR process.
                    </p>

                    <p className="mt-8 text-center text-lg leading-relaxed text-white md:text-2xl">
                        We are building full end-to-end automation for IDR execution, from
                        intake and data handling to pricing strategy and case progression.
                        By combining software, automation, statistics, and machine learning
                        in one system, we aim to give surgeons a more accurate and more
                        scalable approach than traditional firms in the field.
                    </p>
                </div>
            </section>

            {/* Red section under black */}
            <section className="min-h-[35vh] bg-red-900"></section>
        </main>
    );
}