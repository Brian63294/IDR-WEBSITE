import Link from "next/link";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="bg-red-900 px-6 py-6 md:px-12">
                <div className="mx-auto max-w-6xl">
                    <Link
                        href="/"
                        className="text-4xl font-light tracking-tight hover:opacity-80 md:text-5xl"
                    >
                        OON Systems
                    </Link>
                </div>
            </section>

            <section className="bg-white px-6 py-4 md:px-12 md:py-5">
                <div className="mx-auto max-w-6xl">
                    <Link
                        href="/"
                        className="text-sm font-medium text-black hover:opacity-70 md:text-base"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </section>

            <section className="px-6 py-12 md:px-12 md:py-20">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl font-light tracking-tight md:text-6xl">
                        Careers
                    </h1>

                    <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-200 md:text-xl">
                        <p>
                            OON Systems is building advanced software for out-of-network
                            surgical practices, combining mathematics, machine learning, and
                            automation to transform the IDR process.
                        </p>

                        <p>
                            We are always interested in meeting exceptional people across
                            engineering, machine learning, operations, and healthcare systems.
                        </p>

                        <p>
                            To express interest, contact us with your background, experience,
                            and area of interest.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}