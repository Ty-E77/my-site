import Link from "next/link";
import { profile } from "@/profile";
import { Guestbook } from "@/components/Guestbook";

/**
 * Your home page. It's already personalized: everything here reads from
 * src/profile.ts. The "portfolio of decision services" section below is the
 * scaffold the course expects: each lane's challenge fills in one slot.
 */

const SERVICES = [
  {
    lane: 2,
    title: "Reasoning & Uncertainty",
    href: "/reasoning",
    blurb: "Audits syllogisms, updates on base rates, reads Bernoulli businesses.",
  },
  {
    lane: 3,
    title: "Decision Simulator",
    href: "/simulator",
    blurb: "Simulates investment games and recommends the growth-optimal stake.",
  },
  {
    lane: 4,
    title: "Causality Audit",
    href: "/causality",
    blurb: "Tells forks from pipes from colliders, and when to stratify.",
  },
  {
    lane: 5,
    title: "Capstone: Live Decision Service",
    href: "/capstone",
    blurb: "A full advocacy report on a real decision domain, backed by data.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="flex min-h-[60vh] flex-col justify-center py-10">
        <h1 className="text-6xl font-bold sm:text-7xl">{profile.displayName}</h1>
        <p className="mt-6 max-w-2xl font-heading text-3xl font-semibold italic leading-tight text-accent sm:text-4xl">
          {profile.tagline}
        </p>
        <p className="mt-8 max-w-prose text-lg text-muted">{profile.bio}</p>
      </section>

      {/* ── Portfolio of decision services ───────────────────────────── */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">A portfolio of decision services</h2>
        <p className="mt-2 max-w-prose text-muted">
          Over the semester this site grows one live decision service per lane. Here&apos;s
          what&apos;s coming:
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <li
              key={s.lane}
              className="rounded-xl border border-line bg-surface p-5 shadow-md shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/40"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Lane {s.lane}
              </p>
              <h3 className="mt-1 font-bold">
                <Link href={s.href} className="transition hover:text-accent">
                  {s.title}
                </Link>
              </h3>
              <p className="mt-1.5 text-sm text-muted">{s.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Guestbook: the live database round-trip ──────────────────── */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Guestbook</h2>
        <p className="mt-2 max-w-prose text-muted">
          Signed entries live in my own database: proof this site does a real round-trip.
        </p>
        <Guestbook />
      </section>
    </main>
  );
}
