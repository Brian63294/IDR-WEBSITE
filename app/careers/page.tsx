"use client";

import Link from "next/link";
import { useState } from "react";

const roles = [
    {
        id: "ml-engineer",
        title: "Machine Learning Engineer",
        content: `About the Team

OpenAI is at the forefront of artificial intelligence, driving innovation and shaping the future with cutting-edge research. Our mission is to ensure that AI's benefits reach everyone. We are looking for visionary Research Engineers to join our Applied Voice Team, where you'll conduct groundbreaking research on speech models and transform it into real-world applications that can change industries, enhance human creativity, and solve complex problems.

About the Role

As a Research Engineer in OpenAI's Applied Voice Team, you will have the opportunity to work with some of the brightest minds in AI. You'll design and build state-of-the-art speech models (speech-to-speech, transcribing, text to speech, etc.) and help turn research breakthroughs into tangible OpenAI speech products. If you're excited about making AI technology accessible and impactful, this role is your chance to make a significant mark.

In this role, you will:

Innovate and Build: Design and build advanced machine learning models that solve real-world problems. Bring research from concept to implementation, creating AI-driven applications with direct impact.
Collaborate with the Best: Work closely with software engineers, product managers, and forward deployed engineers to understand complex business challenges and deliver AI-powered solutions.
Optimize and Scale: Implement scalable data pipelines, optimize models for performance and accuracy, and ensure they are production-ready.
Learn and Lead: Stay ahead of the curve by engaging with the latest developments in machine learning and AI.
Make a Difference: Monitor and maintain deployed models to ensure they continue delivering value.

You might thrive in this role if you:

Master's/PhD degree in Computer Science, Machine Learning, or a related field
2+ years of professional engineering experience in relevant roles
Demonstrated experience in deep learning and transformer models
Proficiency in frameworks like PyTorch or TensorFlow
Strong foundation in data structures, algorithms, and software engineering principles
Familiarity with methods of training and fine-tuning large models
Excellent problem-solving and analytical skills
Ability to work collaboratively with cross-functional teams
Ability to move fast in an environment where priorities may shift

Compensation

$295K – $445K + Offers Equity`,
    },
    {
        id: "software-engineer",
        title: "Software Engineer",
        content: `You will take on the following responsibilities:

Develop robust software in either Java, Go, or Python to enhance system capabilities, improve performance, and reduce operational complexity
Lead architectural decisions and technical strategy for migrating legacy infrastructure to modern, cloud-native platforms while maintaining high security and reliability standards
Mentor junior engineers and influence technical direction through code reviews and design discussions
Drive team-wide and cross-team projects to improve system observability, monitoring, and documentation
Research industry standards, contribute to open source projects, and evaluate emerging security technologies for potential adoption
Become a technical domain authority on running our authentication, authorization, and identity management systems

You should possess the following qualifications:

BS in Computer Science, Software Engineering, or another technical discipline
Experience in software engineering roles building and maintaining distributed systems at scale
Proficiency in programming languages such as Java, Python, or Go
A deep understanding of system design principles, including distributed systems architecture and database management
Experience with authentication and authorization protocols, configuration management tools, CI/CD and security standards
Consistent track record of leading technical initiatives and making architectural decisions
Strong communication skills with ability to work effectively across teams and with collaborators

Preferred Qualifications:

Experience with containerization technologies (Docker) and orchestration platforms (Kubernetes)
Knowledge of entitlement systems and audit processes within financial- or technology organizations
Familiarity with identity systems and technologies
Proficiency in SQL and large-scale data management
Experience with cloud infrastructure (GCP, AWS, or Azure) and hybrid cloud architectures
Expertise in zero trust security models and implementation
Contributions to open source projects or published technical content

You will enjoy the following benefits:

Core Benefits: Fully paid medical and dental insurance premiums for employees and dependents, competitive 401k match, employer-paid life & disability insurance
Perks: Onsite gyms with laundry service, wellness activities, casual dress, snacks, game rooms
Learning: Tuition reimbursement, conference and training sponsorship
Time Off: Generous vacation and unlimited sick days, competitive paid caregiver leaves
Hybrid Work Policy: Flexible in-office days with budget for home office setup

The base pay for this role will be between $165,000 and $250,000. This role may also be eligible for other forms of compensation and benefits.

We are proud to be an equal opportunity workplace.`,
    },
    {
        id: "ai-engineer",
        title: "AI Engineer",
        content: `About the Team

OON Systems is building AI infrastructure and intelligent automation for healthcare workflows, with a strong focus on large language models, NLP systems, and practical deployment. Our mission is to turn advanced language technology into reliable tools that reduce administrative burden, increase operational efficiency, and support better outcomes for providers.

About the Role

As an AI Engineer, you will work on the design, training, evaluation, and deployment of production-grade AI systems centered on large language models and natural language processing. You will help build systems that understand complex healthcare and insurance language, automate structured and unstructured workflows, and support mission-critical decision making.

In this role, you will:

Build LLM and NLP Systems: Design and implement language-model-based applications for document understanding, information extraction, summarization, classification, and intelligent decision support
Train and Improve Models: Work on fine-tuning, prompting, retrieval pipelines, evaluation frameworks, and model optimization
Ship Real Products: Translate research ideas into scalable applications used in live workflows
Own the Pipeline: Develop data pipelines, evaluation tools, and monitoring systems that support continuous improvement
Drive Practical Innovation: Explore new methods in LLMs, NLP, RAG, agentic systems, and model personalization

You might thrive in this role if you:

Have strong experience with Python and modern machine learning tooling
Have worked with transformer models, fine-tuning workflows, embeddings, or retrieval systems
Understand the fundamentals of NLP, model evaluation, and production ML systems
Are comfortable building end-to-end systems
Communicate clearly and work well across technical and non-technical teams
Enjoy moving fast and solving messy real-world problems

Preferred Qualifications:

Experience with PyTorch, Hugging Face, vector databases, and LLM evaluation frameworks
Experience with prompt engineering, structured outputs, retrieval-augmented generation, or agent workflows
Familiarity with healthcare, insurance, legal, or other document-heavy domains
Experience deploying AI systems in secure production environments`,
    },
    {
        id: "cybersecurity-engineer",
        title: "Cybersecurity Engineer",
        content: `About the Team

OON Systems handles workflows that demand strong privacy, secure infrastructure, and disciplined data protection. We are building systems for healthcare-related operations where confidentiality, system integrity, and reliable access control are critical.

About the Role

As a Cybersecurity Engineer, you will help design, implement, and maintain the security architecture behind our platform. You will work across infrastructure, application security, access control, monitoring, and incident response readiness to ensure that our systems remain hardened, resilient, and trustworthy.

In this role, you will:

Secure the Platform: Design and improve security controls across cloud systems, internal services, user access, and deployment pipelines
Monitor and Defend: Build logging, monitoring, alerting, and detection workflows to identify suspicious behavior and reduce risk
Strengthen Access Control: Implement best practices around authentication, authorization, secrets management, and least-privilege access
Improve Application Security: Partner with engineers to reduce vulnerabilities in APIs, backend systems, and production workflows
Support Compliance: Help maintain security processes, documentation, auditability, and operational safeguards aligned with healthcare security expectations
Respond and Improve: Contribute to incident response planning, security reviews, and continuous hardening of systems over time

You might thrive in this role if you:

Have strong experience with cloud security, infrastructure hardening, and secure software practices
Understand network security, encryption, IAM, secrets management, and monitoring systems
Have worked with secure CI/CD pipelines, containerized systems, or production backend infrastructure
Can balance practical engineering speed with careful security thinking
Communicate clearly across engineering and operations teams
Take ownership and think proactively about risk reduction

Preferred Qualifications:

Experience with AWS, GCP, or Azure security tooling
Experience with vulnerability management, SIEM/logging tools, and incident response workflows
Familiarity with HIPAA-oriented security environments or other high-trust regulated systems
Experience reviewing architecture for security risks and improving defensive controls`,
    },
];

type Role = (typeof roles)[number];

function RoleCard({
    role,
    onClick,
}: {
    role: Role;
    onClick: () => void;
}) {
    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                onClick={onClick}
                className="flex h-[140px] w-[320px] items-center justify-center border border-zinc-400 bg-white px-6 text-center text-black transition hover:scale-[1.02]"
            >
                <div className="text-2xl font-semibold leading-tight md:text-3xl">
                    {role.title}
                </div>
            </button>
        </div>
    );
}

export default function CareersPage() {
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

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

            <section className="bg-black px-6 py-12 md:px-12 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        {roles.slice(0, 3).map((role) => (
                            <RoleCard
                                key={role.id}
                                role={role}
                                onClick={() => setSelectedRole(role)}
                            />
                        ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                        <RoleCard
                            role={roles[3]}
                            onClick={() => setSelectedRole(roles[3])}
                        />
                    </div>

                    {selectedRole && (
                        <div className="mx-auto mt-12 max-w-5xl bg-white px-6 py-8 text-black md:px-10 md:py-10">
                            <h1 className="text-3xl font-semibold md:text-4xl">
                                {selectedRole.title}
                            </h1>

                            <div className="mt-6 space-y-4 whitespace-pre-line text-sm leading-7 md:text-base">
                                {selectedRole.content}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}