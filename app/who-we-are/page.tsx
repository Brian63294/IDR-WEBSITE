import Link from "next/link";
import Image from "next/image";

export default function WhoWeAre() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Mobile */}
            <section className="border-b border-zinc-800 bg-black md:hidden">
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
                            className="rounded-none border border-white bg-zinc-900 px-3 py-2 font-semibold text-white hover:bg-zinc-800"
                        >
                            Log In
                        </Link>
                    </nav>
                </div>
            </section>

            {/* Desktop */}
            <section className="hidden h-[13.333vh] border-b border-zinc-800 bg-black md:block">
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
                            className="rounded-none border border-white bg-zinc-900 px-3 py-2 font-semibold text-white hover:bg-zinc-800"
                        >
                            Log In
                        </Link>
                    </nav>
                </div>
            </section>

            {/* Main black section */}
            <section className="bg-black px-4 py-12 md:px-8 md:py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-8 text-center text-3xl font-light tracking-tight md:text-5xl">
                        Who We Are
                    </h2>

                    <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-white md:text-2xl">
                        IDR Resolutions is a company created by mathematicians, machine
                        learning specialists, computer scientists, and highly technical
                        people. We are an AI-first company that uses this technology to
                        return independence back to surgeons.
                    </p>

                    {/* Photos */}
                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="overflow-hidden border border-zinc-800 bg-zinc-950">
                            <Image
                                src="/who-we-are-1.jpg"
                                alt="IDR Resolutions team"
                                width={1200}
                                height={900}
                                className="h-[320px] w-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden border border-zinc-800 bg-zinc-950">
                            <Image
                                src="/who-we-are-2.jpg"
                                alt="Technology and analytics"
                                width={1200}
                                height={900}
                                className="h-[320px] w-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden border border-zinc-800 bg-zinc-950">
                            <Image
                                src="/who-we-are-3.jpg"
                                alt="Surgeon-focused workflow"
                                width={1200}
                                height={900}
                                className="h-[320px] w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}