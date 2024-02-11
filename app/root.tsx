import { zhTW } from "./data/zh-tw-translation";
import "./tailwind.css";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { Header } from "~/components/Header";

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(args, ({ request }) => {
    const { sessionId, userId, getToken } = request.auth;
    return { userId };
  });
};

export const ErrorBoundary = ClerkErrorBoundary();

export const links: LinksFunction = () => [
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@500&display=swap",
  },
];

function App() {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Justin Chien" />
        <meta name="creator" content="Justin Chien" />
        <meta
          property="og:url"
          content={`https://build-ui-fast.com${location.pathname}`}
        />
        <meta property="og:site_name" content="Build UI Fast" />
        <meta property="og:image" content="https://build-ui-fast.com/ogn.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@justinchiency" />
        <meta
          name="twitter:url"
          content={`https://build-ui-fast.com${location.pathname}`}
        />
        <meta
          name="twitter:image"
          content="https://build-ui-fast.com/ogn.jpg"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App, {
  localization: zhTW,
  appearance: {
    variables: {
      colorPrimary: "#101828",
      colorTextOnPrimaryBackground: "white",
      colorTextSecondary: "#98A2B3",
      fontSmoothing: "antialiased",
    },
  },
});
