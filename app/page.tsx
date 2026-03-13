"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const photos = [
  {
    src: "/home/graph.png",
    alt: "Graph theory diagram",
    fit: "contain",
  },
  {
    src: "/home/surgery.png",
    alt: "Surgery room",
    fit: "cover",
  },
  {
    src: "/home/neural-network.png",
    alt: "Neural network diagram",
    fit: "contain",
  },
  {
    src: "/home/spine.png",
    alt: "Spine image",
    fit: "cover",
  },
  {
    src: "/home/caduceus.png",
    alt: "Medical symbol",
    fit: "contain",
  },
];

export default function Home() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstSetRef = useRef<HTMLDivElement | null>(null);
  const secondSetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId = 0;
    let x = 0;
    let lastTime = 0;

    const speed = 80;

    const animate = (time: number) => {
      if (!trackRef.current || !firstSetRef.current || !secondSetRef.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      x -= speed * delta;

      const loopDistance = secondSetRef.current.offsetLeft;
      if (Math.abs(x) >= loopDistance) {
        x += loopDistance;
      }

      trackRef.current.style.transform = `translateX(${x}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Mobile */}
      <section className="border-b border-black bg-red-900 md:hidden">
        <div className="px-4 py-4">
          <Link href="/" className="inline-block hover:opacity-80">
            <h1 className="text-5xl font-light tracking-tight">OON Systems</h1>
          </Link>

          <nav className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <Link href="/who-we-are" className="hover:opacity-80">
              Who We Are
            </Link>
            <Link href="/what-sets-us-apart" className="hover:opacity-80">
              What Sets Us Apart
            </Link>
            <Link href="/careers" className="hover:opacity-80">
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
      <section className="hidden bg-red-900 md:block">
        <div className="flex items-start justify-between px-4 py-4">
          <Link href="/" className="inline-block hover:opacity-80">
            <h1 className="text-5xl font-light tracking-tight">OON Systems</h1>
          </Link>

          <nav className="flex items-center gap-8 text-2xl">
            <Link href="/who-we-are" className="hover:opacity-80">
              Who We Are
            </Link>
            <Link href="/what-sets-us-apart" className="hover:opacity-80">
              What Sets Us Apart
            </Link>
            <Link href="/careers" className="hover:opacity-80">
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

      {/* White bar */}
      <section className="bg-white px-4 py-4 md:px-8 md:py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 text-base font-medium text-black md:gap-12 md:text-2xl">
          <span>Our Platform</span>
          <span>Results</span>
          <span>Research</span>
        </div>
      </section>

      {/* Black intro section */}
      <section className="bg-black px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-lg leading-relaxed text-white md:text-2xl">
            OON Systems is an AI optimization company built for our
            out-of-network surgeons. We built a platform that uses
            mathematical, statistical, and machine learning methods to
            automate the entire IDR process from start to finish.
          </p>
        </div>
      </section>

      {/* Scrolling photo section */}
      <section className="overflow-hidden bg-black py-8 md:py-12">
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-5 will-change-transform md:gap-8"
          >
            <div
              ref={firstSetRef}
              className="flex items-center gap-5 md:gap-8"
            >
              {photos.map((photo, index) => (
                <div
                  key={`set1-${photo.src}-${index}`}
                  className="relative h-[180px] w-[280px] flex-shrink-0 overflow-hidden border border-zinc-800 bg-black md:h-[260px] md:w-[420px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 280px, 420px"
                    className={
                      photo.fit === "contain"
                        ? "object-contain p-3 md:p-4"
                        : "object-cover"
                    }
                  />
                </div>
              ))}
            </div>

            <div
              ref={secondSetRef}
              className="flex items-center gap-5 md:gap-8"
            >
              {photos.map((photo, index) => (
                <div
                  key={`set2-${photo.src}-${index}`}
                  className="relative h-[180px] w-[280px] flex-shrink-0 overflow-hidden border border-zinc-800 bg-black md:h-[260px] md:w-[420px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 280px, 420px"
                    className={
                      photo.fit === "contain"
                        ? "object-contain p-3 md:p-4"
                        : "object-cover"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Red HIPAA section */}
      <section className="bg-red-900 px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto flex max-w-6xl items-center justify-center">
          <Link
            href="/hipaa-compliance"
            className="text-center text-3xl font-semibold tracking-wide text-white hover:opacity-80 md:text-5xl"
          >
            HIPAA COMPLIANT
          </Link>
        </div>
      </section>

      {/* White company info section */}
      <section className="bg-white px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-black md:text-3xl">
                New York
              </h2>
              <div className="mt-3 space-y-1 text-lg leading-snug text-black md:text-xl">
                <p>OON Systems LLC</p>
                <p>Replace with street address</p>
                <p>Replace with city, state ZIP</p>
                <p>Replace with phone number</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black md:text-3xl">
                Boston
              </h2>
              <div className="mt-3 space-y-1 text-lg leading-snug text-black md:text-xl">
                <p>OON Systems LLC</p>
                <p>Replace with street address</p>
                <p>Replace with city, state ZIP</p>
                <p>Replace with phone number</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}