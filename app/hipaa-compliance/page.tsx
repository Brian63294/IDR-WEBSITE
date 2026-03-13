import Link from "next/link";

export default function HipaaCompliancePage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="bg-red-900 px-6 py-6 md:px-12">
                <div className="mx-auto max-w-6xl">
                    <Link href="/" className="text-4xl font-light tracking-tight hover:opacity-80 md:text-5xl">
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
                    <h1 className="text-4xl font-light tracking-tight text-white md:text-6xl">
                        HIPAA Compliance & Security
                    </h1>

                    <div className="mt-10 space-y-8 text-base leading-relaxed text-zinc-200 md:text-xl">
                        <p>
                            OON Systems is built for healthcare workflows that require strong
                            privacy, controlled access, and secure handling of sensitive
                            information. Our platform is designed with modern security
                            architecture intended to reduce risk, protect data, and support
                            HIPAA-compliant operations.
                        </p>

                        <div>
                            <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
                                Advanced Cybersecurity
                            </h2>
                            <p>
                                We employ multiple layers of cybersecurity to help prevent
                                unauthorized access, leakage, or misuse of data. These measures
                                include strong access controls, encrypted data transmission,
                                secure infrastructure configurations, environment separation,
                                credential protection, logging, and continuous monitoring of
                                critical systems.
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
                                Secure Data Handling
                            </h2>
                            <p>
                                We are committed to minimizing exposure of sensitive information
                                by restricting access to only the systems and personnel that need
                                it. Our approach emphasizes least-privilege access, secure
                                storage practices, internal controls, and disciplined operational
                                processes designed to keep healthcare-related data protected at
                                every stage.
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
                                HIPAA-Oriented Safeguards
                            </h2>
                            <p>
                                Our platform is designed around the administrative, technical,
                                and operational safeguards expected in healthcare environments.
                                That includes controlled access, auditability, data protection
                                practices, and security-conscious system design intended to help
                                support HIPAA-compliant workflows for providers handling
                                protected health information.
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
                                Ongoing Security Mindset
                            </h2>
                            <p>
                                Security is not treated as a one-time checklist. We take an
                                ongoing approach focused on system hardening, process
                                improvement, risk reduction, and responsible handling of
                                sensitive operational data so that providers can use OON Systems
                                with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}