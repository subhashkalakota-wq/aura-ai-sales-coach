import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AuraCRM — AI Sales Assistant" },
      { name: "description", content: "AuraCRM is a next-generation AI sales assistant that analyzes pipeline risk, automates communications, and predicts deal success." },
      { name: "author", content: "AuraCRM" },
      { property: "og:title", content: "AuraCRM — AI Sales Assistant" },
      { property: "og:description", content: "AuraCRM is a next-generation AI sales assistant that analyzes pipeline risk, automates communications, and predicts deal success." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AuraCRM — AI Sales Assistant" },
      { name: "twitter:description", content: "AuraCRM is a next-generation AI sales assistant that analyzes pipeline risk, automates communications, and predicts deal success." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/491e74e1-a6e4-4941-ac7e-580ba4954b08/id-preview-56e77f1e--a3223416-200c-4744-ba7d-4311a59c3c83.lovable.app-1776544352019.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/491e74e1-a6e4-4941-ac7e-580ba4954b08/id-preview-56e77f1e--a3223416-200c-4744-ba7d-4311a59c3c83.lovable.app-1776544352019.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return <Outlet />;
}
