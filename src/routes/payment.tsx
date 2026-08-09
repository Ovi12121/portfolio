import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payment")({
  head: () => ({
    title: "Monthly Automation Support Plans | Shahedul Islam Ovi",
    meta: [
      {
        name: "description",
        content:
          "Ongoing automation maintenance, optimization, and system support for growing businesses.",
      },
    ],
  }),
  component: PaymentPage,
});

export function PaymentPage() {
  return (
    <div>

      {/* HEADER / NAV */}
      Shahedul Islam <span style={{ color: "var(--cyan)" }}>Ovi</span>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 20%, color-mix(in oklab, var(--cyan) 18%, transparent), transparent 70%), radial-gradient(50% 60% at 10% 80%, color-mix(in oklab, var(--purple) 15%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full" style={{ background: "var(--cyan)" }} />
            Exclusive Support Plans for Clients
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Automate Your Business. <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, var(--cyan), var(--purple))" }}
            >
              Save Time. Cut Costs. Scale Faster.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Stop wasting time on manual work. Capture leads, automate follow-ups, and keep your entire business running smoothly with ongoing automation management.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold sm:text-sm">
            <span className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-white px-3 py-1.5 shadow-sm">
              ⏱ Save 14–35 hours/week
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-white px-3 py-1.5 shadow-sm">
              ⚡ Faster response to leads
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-white px-3 py-1.5 shadow-sm">
              📈 Never miss opportunities
            </span>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="border-t border-border bg-secondary/30 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>
            Monthly Support
          </div>
          <h2 className="mt-1 text-2xl font-bold md:text-3xl">Ongoing Automation Systems Management</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            After your automation system is built, this monthly plan ensures everything runs smoothly, stays updated, and keeps improving as your business grows.
          </p>
          <p className="mt-2 text-xs font-semibold text-muted-foreground/80 italic">
            * Note: Available for clients after system setup.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-stretch">

            {/* STARTER */}
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:shadow-elegant">
              <div>
                <h3 className="text-xl font-bold">Starter Support Plan</h3>
                <p className="mt-1 text-xs text-muted-foreground">Keep things running smoothly</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">$100</span>
                  <span className="text-sm font-medium text-muted-foreground">/ month</span>
                </div>

                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> System monitoring</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Fix automations</li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://oviautomation.gumroad.com/l/starter"
                  className="btn-outline w-full text-center block !py-3"
                >
                  Subscribe to Starter
                </a>
              </div>
            </div>

            {/* GROWTH */}
            <div className="flex flex-col justify-between rounded-3xl border-2 border-[var(--cyan)] bg-white p-8 shadow-xl">
              <div>
                <h3 className="text-xl font-bold">Growth Automation Plan</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">$300</span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://oviautomation.gumroad.com/l/ezjten"
                  className="btn-primary w-full text-center block !py-3"
                >
                  Subscribe to Growth
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
