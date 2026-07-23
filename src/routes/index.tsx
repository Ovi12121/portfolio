import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      // ✅ TITLE
      {
        title:
          "Shahedul Islam Ovi — Automation & AI Specialist | n8n, Make, Zapier",
      },

      // ✅ DESCRIPTION
      {
        name: "description",
        content:
          "Freelance Workflow Automation & AI Agents specialist. I build systems with n8n, Make.com & Zapier that save time, capture leads, and scale your business on autopilot.",
      },

      // ✅ AUTHOR
      { name: "author", content: "Shahedul Islam Ovi" },

      // ✅ OPEN GRAPH (for Facebook, LinkedIn, etc.)
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://shahedulislamovi.com/" },
      {
        property: "og:title",
        content:
          "Shahedul Islam Ovi — Automation & AI Specialist | n8n, Make, Zapier",
      },
      {
        property: "og:description",
        content:
          "Freelance Workflow Automation & AI Agents specialist. I build systems with n8n, Make.com & Zapier that save time and scale your business.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1a3a6f4-a15d-4a22-9969-deb09f955589/id-preview-4995e562--53e2c349-7eb3-4035-88b2-e408a3534a22.lovable.app-1784800680878.png",
      },

      // ✅ TWITTER
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Shahedul Islam Ovi — Automation & AI Specialist | n8n, Make, Zapier",
      },
      {
        name: "twitter:description",
        content:
          "Automation & AI Specialist building systems with n8n, Make.com & Zapier.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1a3a6f4-a15d-4a22-9969-deb09f955589/id-preview-4995e562--53e2c349-7eb3-4035-88b2-e408a3534a22.lovable.app-1784800680878.png",
      },
    ],

    links: [
      // ✅ CANONICAL (VERY IMPORTANT FOR GOOGLE)
      {
        rel: "canonical",
        href: "https://shahedulislamovi.com/",
      },
    ],
  }),

  component: Index,
});

const allVideos = [
  { id: "grEUu4hlgxo", title: "Automated Onboarding Systems", desc: "Onboard new clients on autopilot with zero manual steps." },
  { id: "2NaMb9uqgRs", title: "AI Proposal Generator", desc: "Generate tailored proposals in seconds using AI." },
  { id: "0MmZBikomQY", title: "AI Voice Receptionist", desc: "24/7 AI voice agent that handles phone inquiries, checks calendar availability, and books appointments." },
  { id: "JscIpqC5EUs", title: "AI Sales CRM Assistant", desc: "Your AI-powered sales assistant that never sleeps." },
  { id: "Pm5_1YLRP-c", title: "AI Order Processing Bot", desc: "Automated 24/7 web chatbot that captures details, updates sheets, and confirms orders seamlessly." },
  { id: "0zsbVu60-F4", title: "AI Resume Screener", desc: "Automatically screen, score, and communicate with candidates to fast-track top hiring talent." },
  { id: "e4lr4FCibjY", title: "Instagram Automation Engine", desc: "Auto-DMs, comments, and lead capture on Instagram." },
  { id: "spnfNvlQo9k", title: "WhatsApp AI E-commerce Bot", desc: "24/7 AI bot that sells and supports on WhatsApp." },
  { id: "X9azx1AclVI", title: "AI Facebook Lead Processor", desc: "Instantly qualify and route Facebook leads to your CRM." },
];

const services = [
  "Workflow Automation",
  "AI Agent Development",
  "Lead Capture Systems",
  "CRM Automation",
  "Sales Funnel Automation",
  "Content Automation",
  "WhatsApp & Chatbot Automation",
  "API Integrations",
  "Business Process Optimization",
];

const serviceIcons = ["⚡", "🤖", "🎯", "📊", "🚀", "✍️", "💬", "🔌", "📈"];

const howSteps = [
  { t: "Quick Discovery", d: "We start with a deep dive conversation to understand your business, workflows, and pain points." },
  { t: "System Mapping", d: "I design a clear automation structure tailored to your processes and tools." },
  { t: "Automation Build", d: "Your automation system is developed step-by-step to eliminate manual work, streamline operations, and ensure everything runs smoothly without constant input." },
  { t: "Progress Updates", d: "You receive updates and insights on what's completed and what's next." },
  { t: "Testing & Optimization", d: "Everything is tested to ensure reliability, speed, and accuracy." },
  { t: "Final Delivery", d: "You get a fully working automation system ready to run your operations smoothly." },
];

const faqs = [
  { q: "What tools do you use?", a: "Primarily n8n, Make.com & Zapier for automation & combined with OpenAI, Airtable, Google Workspace, Notion, HubSpot, ClickFunnels, Salesforce, Mailchimp, Apollo.io, Apify, WhatsApp, and 100+ other apps through APIs." },
  { q: "How long does setup take?", a: "Most projects are delivered within 1–2 weeks. Smaller workflows can be live in a few days; larger, multi-system builds take up to 3–4 weeks." },
  { q: "Can you customize workflows?", a: "Every system I build is custom to your business. I map your actual process first, then design automation around how you already work — not the other way around." },
  { q: "Do you work with small businesses?", a: "Yes — most of my clients are small teams, agencies, and solo creators. Automation gives smaller teams the leverage of a much larger one." },
  { q: "What do you need to get started?", a: "Just a short discovery call. From there I'll ask about your current tools, workflows, and goals, and send back a clear scope and timeline within 48 hours." },
];

const testimonials = [
  "We were manually handling leads from 3 different platforms. He built an automation system that organizes everything instantly and now we literally stopped missing leads overnight.",
  "I didn't even realize how much time we were wasting until he automated our workflow. What used to take hours now runs in the background without us touching anything.",
  "What I liked most is that he didn't just jump into tools. He first understood how our process worked and then built automation around it. The final system with n8n actually fits our business instead of forcing us to change everything.",
];

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=68",
  "https://i.pravatar.cc/80?img=15",
];

function LazyYouTube({ id, title, isPlaying, onPlay }: { id: string; title: string; isPlaying: boolean; onPlay: () => void }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-primary/5">
      {isPlaying ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button onClick={onPlay} className="group relative block h-full w-full" aria-label={`Play ${title}`}>
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-xl">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--primary)"><path d="M8 5v14l11-7z"/></svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function HeroVideo({ playing, onPlay }: { playing: boolean; onPlay: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-elegant h-[240px] w-[180px] sm:h-[320px] sm:w-[240px] md:h-[520px] md:w-[420px]">
      {playing ? (
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/F6rtMOsPUzw?autoplay=1"
          title="Intro video"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button onClick={onPlay} className="group relative block h-full w-full" aria-label="Play intro video">
          <img
            src="/hero.webp"
            alt="Shahedul Islam Ovi, Automation & AI Specialist"
            width={520}
            height={520}
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/5 transition">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-xl">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--primary)"><path d="M8 5v14l11-7z"/></svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMore, setShowMore] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [heroPlaying, setHeroPlaying] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleHeroPlay = () => {
    requestAnimationFrame(() => {
      setHeroPlaying(true);
      setPlayingVideo(null);
    });
  };

  const handlePlay = (index: number) => {
    requestAnimationFrame(() => {
      setPlayingVideo(index);
      setHeroPlaying(false);
    });
  };

  const videos = showMore ? allVideos : allVideos.slice(0, 9);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFormError(null);
    try {
      const res = await fetch("https://formspree.io/f/xgogwakw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-display text-lg font-bold tracking-tight">
            Shahedul Islam <span style={{ color: "var(--cyan)" }}>Ovi</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#work" className="hover:text-[var(--cyan)]">Work</a>
            <a href="#about" className="hover:text-[var(--cyan)]">About</a>
            <a href="#services" className="hover:text-[var(--cyan)]">Services</a>
            <a href="#faq" className="hover:text-[var(--cyan)]">FAQ</a>
          </nav>
          <a href="#contact" className="btn-primary text-sm !py-2.5 !px-4">Let's Talk</a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden scroll-mt-20" style={{ minHeight: "auto" }}>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 20%, color-mix(in oklab, var(--cyan) 18%, transparent), transparent 70%), radial-gradient(50% 60% at 10% 80%, color-mix(in oklab, var(--purple) 15%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-5 px-6 pt-6 pb-6 md:grid-cols-2 md:gap-10 md:pt-14 md:pb-12 lg:pt-20 lg:pb-16">
          {/* Mobile: image first, then text */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-3 -z-10 rounded-[2rem] opacity-70 blur-2xl md:-inset-4"
                style={{ background: "linear-gradient(135deg, var(--cyan), var(--purple))" }}
              />
              <HeroVideo playing={heroPlaying} onPlay={handleHeroPlay} />

              {!heroPlaying && (
                <>
                  <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-white px-3 py-2 shadow-lg md:block">
                    <div className="text-[10px] text-muted-foreground">Systems built</div>
                    <div className="font-display text-xl font-bold">120+</div>
                  </div>
                  <div className="absolute -right-3 top-6 hidden rounded-xl border border-border bg-white px-3 py-2 shadow-lg md:block">
                    <div className="text-[10px] text-muted-foreground">Tools</div>
                    <div className="font-display text-xs font-bold">n8n · Make · Zapier</div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:px-3 sm:text-xs">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--cyan)" }} />
              Available for new projects
            </span>
            <h1 className="mt-3 text-[1.65rem] font-bold leading-[1.08] sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl">
              Automate Your Business.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, var(--cyan), var(--purple))" }}
              >
                Save Time. Scale Faster.
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg md:mt-5">
              I build powerful automation systems using AI &amp; no-code tools to eliminate repetitive work and manage leads on autopilot.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              <a href="#work" className="btn-primary !py-2 !px-3.5 text-sm sm:!py-2.5 sm:!px-4 sm:text-base">View My Work</a>
              <a href="#contact" className="btn-outline !py-2 !px-3.5 text-sm sm:!py-2.5 sm:!px-4 sm:text-base">Let's Talk</a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <div className="flex -space-x-2.5 sm:-space-x-3">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy" width={40} height={40} className="h-8 w-8 rounded-full border-2 border-background object-cover sm:h-10 sm:w-10" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs sm:text-sm">
                  <span style={{ color: "#f5b301" }}>★★★★★</span>
                  <span className="font-semibold">4.9</span>
                </div>
                <div className="text-[11px] text-muted-foreground sm:text-xs">Trusted by 40+ businesses & creators</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial strip */}
        <div className="mx-auto hidden max-w-6xl px-6 pb-10 md:block">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-xl border border-border bg-white p-5 text-sm text-muted-foreground shadow-sm">
                <div className="mb-2" style={{ color: "#f5b301" }}>★★★★★</div>
                <p>"{t}"</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>Portfolio</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Proven Automation Systems</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">Automation systems I've built to demonstrate what's possible for your business.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm transition hover:shadow-elegant">
                <LazyYouTube id={v.id} title={v.title} isPlaying={playingVideo === i} onPlay={() => handlePlay(i)} />
                <div className="p-4">
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {!showMore && allVideos.length > 9 && (
            <div className="mt-10 text-center">
              <button onClick={() => setShowMore(true)} className="btn-outline">See More Work</button>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>Who I Am</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Your Automation & Systems Growth Partner</h2>
          </div>
          <div className="space-y-4 text-muted-foreground md:col-span-3">
            <p>
              I'm <span className="font-semibold text-foreground">Ovi</span>, a Workflow Automation & AI Agents Specialist helping businesses and creators eliminate repetitive work and capture more leads automatically.
            </p>
            <p>
              I design and build custom automation systems tailored to how your business actually operates — whether it's lead capture, follow-ups, social media workflows, CRM processes, or complete client onboarding pipelines.
            </p>
            <p>
              While every system is built around your specific needs, most projects focus on eliminating repetitive tasks, improving response time, and making sure no opportunities are missed.
            </p>
            <p>
              My focus is simple: delivering <span className="font-semibold text-foreground">real business results</span>, not just tools. Every system is built to save time, reduce errors, and ensure no opportunity slips through the cracks.
            </p>
            <p>
              Most of my clients start seeing results within weeks — saving <span className="font-semibold text-foreground">14–35 hours per week</span>, reducing manual admin by 60%+, and responding to leads faster than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — horizontal marquee */}
      <section id="services" className="border-t border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>Services</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">What I Build For You</h2>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/60 to-transparent" />
          <div className="flex w-max animate-marquee gap-4 py-2">
            {[...services, ...services].map((s, i) => (
              <div
                key={i}
                className="flex min-w-[240px] items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm"
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-lg text-lg"
                  style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--cyan) 20%, white), color-mix(in oklab, var(--purple) 20%, white))" }}
                >
                  {serviceIcons[i % serviceIcons.length]}
                </div>
                <span className="font-semibold whitespace-nowrap">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>Process</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">How I Work</h2>
          </div>
          <ol className="relative border-l-2 border-dashed border-border pl-8">
            {howSteps.map((s, i) => (
              <li key={i} className="relative mb-10 last:mb-0">
                <span
                  className="absolute -left-[43px] grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white shadow-md"
                  style={{ background: "linear-gradient(135deg, var(--cyan), var(--purple))" }}
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-secondary/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>Contact</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Let's automate your business</h2>
          </div>
          <div className="grid overflow-hidden rounded-3xl border border-border bg-white shadow-elegant md:grid-cols-[1fr_auto_1.2fr]">
            {/* LEFT */}
            <div
              className="flex flex-col items-start justify-center gap-6 p-10 text-white md:p-12"
              style={{ background: "linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--purple) 70%, var(--primary)))" }}
            >
              <div>
                <h3 className="font-display text-3xl font-bold">Start a Project</h3>
                <p className="mt-3 max-w-xs text-sm text-white/80">
                  Book a discovery call and get a scoped proposal within 48 hours.
                </p>
              </div>
              <a
                href="https://forms.gle/HZPwKhqtgdCpJfHr7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-[color:var(--primary)] shadow-xl transition hover:-translate-y-0.5"
              >
                Let's Talk →
              </a>
            </div>
            {/* OR divider */}
            <div className="flex items-center justify-center py-4 md:px-4">
              <div className="flex items-center gap-3 md:flex-col md:gap-3">
                <span className="h-px w-12 bg-border md:h-16 md:w-px" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">OR</span>
                <span className="h-px w-12 bg-border md:h-16 md:w-px" />
              </div>
            </div>
            {/* RIGHT */}
            <div className="p-10 md:p-12">
              <h3 className="font-display text-2xl font-bold">Quick Message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Have a quick question or want to discuss an idea? Just drop a message — I'll get back to you.
              </p>
              {sent ? (
                <div className="mt-6 rounded-lg border border-border bg-secondary/50 p-6 text-center">
                  <div className="text-3xl">✅</div>
                  <p className="mt-2 font-semibold">Got it! I'll reply as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <input
                    required
                    maxLength={100}
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--cyan)]"
                  />
                  <input
                    required
                    maxLength={200}
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--cyan)]"
                  />
                  <textarea
                    required
                    maxLength={2000}
                    rows={4}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--cyan)]"
                  />
                  {formError && <p className="text-sm text-destructive">{formError}</p>}
                  <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-70">
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>FAQ</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium"
                >
                  <span>{f.q}</span>
                  <span className="ml-4 text-xl" style={{ color: "var(--cyan)" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div>
            <span className="font-display font-bold text-foreground">Shahedul Islam Ovi</span> — Automation & AI Specialist
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.youtube.com/@ovi.automation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cyan)]"
            >
              YouTube
            </a>
            <a href="https://x.com/oviii101" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cyan)]">X</a>
            <a href="https://www.linkedin.com/in/shahedul-islam-ovi-6337a1378" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cyan)]">LinkedIn</a>
          </div>
          <a href="mailto:hello@shahedulislamovi.com" className="hover:text-[var(--cyan)]">hello@shahedulislamovi.com</a>
        </div>
      </footer>
    </div>
  );
}
