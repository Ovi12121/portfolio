import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      // ✅ MOBILE OPTIMIZATION (VERY IMPORTANT)
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // ✅ GOOGLE VERIFICATION
      { name: "google-site-verification", content: "zY0qvbk3ZMQB175ZFD6We--QRUac-fxE9lO6CppD0ac" },

      // ✅ CLEAN SEO TITLE (NO DOMAIN DUPLICATION)
      { title: "Shahedul Islam Ovi — Automation & AI Specialist" },

      // ✅ SEO DESCRIPTION
      {
        name: "description",
        content:
          "Shahedul Islam Ovi is an Automation & AI Specialist. I build systems using n8n, Make.com & Zapier to automate workflows, capture leads, and scale businesses.",
      },

      // ✅ AUTHOR
      { name: "author", content: "Shahedul Islam Ovi" },

      // ✅ OPEN GRAPH
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://shahedulislamovi.com" },

      // ✅ TWITTER
      { name: "twitter:card", content: "summary_large_image" },

      // ✅ TITLES
      {
        property: "og:title",
        content: "Shahedul Islam Ovi — Automation & AI Specialist",
      },
      {
        name: "twitter:title",
        content: "Shahedul Islam Ovi — Automation & AI Specialist",
      },

      // ✅ DESCRIPTIONS
      {
        property: "og:description",
        content:
          "Shahedul Islam Ovi is an Automation & AI Specialist using n8n, Make.com & Zapier to build powerful business workflows.",
      },
      {
        name: "twitter:description",
        content:
          "Automation & AI Specialist building systems with n8n, Make.com & Zapier.",
      },

      // ✅ IMAGE
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1a3a6f4-a15d-4a22-9969-deb09f955589/id-preview-4995e562--53e2c349-7eb3-4035-88b2-e408a3534a22.lovable.app-1784800680878.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1a3a6f4-a15d-4a22-9969-deb09f955589/id-preview-4995e562--53e2c349-7eb3-4035-88b2-e408a3534a22.lovable.app-1784800680878.png",
      },
    ],

    links: [
      { rel: "canonical", href: "https://shahedulislamovi.com" },
      { rel: "stylesheet", href: appCss },
       {
  rel: "preload",
  href:
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
  as: "style",
  crossOrigin: "anonymous",
},
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
