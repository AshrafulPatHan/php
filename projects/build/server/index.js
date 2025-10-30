import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("title", {
        children: "Deploy app servers close to your users · Fly"
      }), /* @__PURE__ */ jsx("link", {
        rel: "shortcut icon",
        href: "/fly.ico",
        type: "image/x-icon"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Logo = "/assets/logo-landscape-Ch2kzX8d.svg";
const Hero = () => {
  return /* @__PURE__ */ jsx("div", { className: "pt-32 pb-32 h-[93vh] hero-background ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center max-w-[700px] mx-auto text-center font-medium", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl ", children: "A Public Cloud Built For Developers Who Ship" }),
    /* @__PURE__ */ jsx("p", { className: " mt-5 mb-9 ", children: "Over 3 million apps have launched on Fly.io, leveraging global Anycast load-balancing, zero-config private networking, hardware isolation, instant WireGuard VPN connections, and push-button deployments scaling to thousands of instances." }),
    /* @__PURE__ */ jsx("button", { className: "bg-[var(--blue)] text-white py-3 px-7 rounded-3xl ", children: "Deploy Your App in 5 minutes " })
  ] }) });
};
const Navbar = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto pt-8 ", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: Logo, alt: "logo", className: "w-28 " }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-evenly bg-[#ffffffbf] backdrop-blur-2xl border border-[#c4adad] py-2 px-6 rounded-3xl text-sm font-medium\n                    gap-5 ", children: [
        /* @__PURE__ */ jsx("div", { children: "Products" }),
        /* @__PURE__ */ jsx(Link, { to: "/", children: "Pricing" }),
        /* @__PURE__ */ jsx(Link, { to: "/", children: "Docs" }),
        /* @__PURE__ */ jsx("div", { children: "Articles" }),
        /* @__PURE__ */ jsx(Link, { to: "/", children: "Community" }),
        /* @__PURE__ */ jsx(Link, { to: "/", children: "Status" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-evenly bg-[#ffffffbf] backdrop-blur-2xl border border-[#c4adad] py-2 px-6 rounded-3xl text-sm font-medium\n                    gap-5 ", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: "", children: "Sign In" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: "", children: "Get Started" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(Hero, {}) })
  ] });
};
const World$1 = "/assets/world-BRbhmdHI.png";
const World = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-globe-icon%20lucide-globe'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'/%3e%3cpath%20d='M12%202a14.5%2014.5%200%200%200%200%2020%2014.5%2014.5%200%200%200%200-20'/%3e%3cpath%20d='M2%2012h20'/%3e%3c/svg%3e";
const fork = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-git-fork-icon%20lucide-git-fork'%3e%3ccircle%20cx='12'%20cy='18'%20r='3'/%3e%3ccircle%20cx='6'%20cy='6'%20r='3'/%3e%3ccircle%20cx='18'%20cy='6'%20r='3'/%3e%3cpath%20d='M18%209v2c0%20.6-.4%201-1%201H7c-.6%200-1-.4-1-1V9'/%3e%3cpath%20d='M12%2012v3'/%3e%3c/svg%3e";
const Zap = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-zap-icon%20lucide-zap'%3e%3cpath%20d='M4%2014a1%201%200%200%201-.78-1.63l9.9-10.2a.5.5%200%200%201%20.86.46l-1.92%206.02A1%201%200%200%200%2013%2010h7a1%201%200%200%201%20.78%201.63l-9.9%2010.2a.5.5%200%200%201-.86-.46l1.92-6.02A1%201%200%200%200%2011%2014z'/%3e%3c/svg%3e";
const atom = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-atom-icon%20lucide-atom'%3e%3ccircle%20cx='12'%20cy='12'%20r='1'/%3e%3cpath%20d='M20.2%2020.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04%202.03-.02%207.36%204.5%2011.9%204.54%204.52%209.87%206.54%2011.9%204.5Z'/%3e%3cpath%20d='M15.7%2015.7c4.52-4.54%206.54-9.87%204.5-11.9-2.03-2.04-7.36-.02-11.9%204.5-4.52%204.54-6.54%209.87-4.5%2011.9%202.03%202.04%207.36.02%2011.9-4.5Z'/%3e%3c/svg%3e";
const Section2 = () => {
  return /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto pb-40  ", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border flex flex-col items-center justify-center rounded-xl ", children: /* @__PURE__ */ jsx("img", { src: World, alt: "icon" }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[456px] ", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium text-[#281950] mb-4 ", children: "Get Right in Your Users' Faces" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#1E133C] ", children: "Deploy in 35 regions, from Sydney to São Paulo, for sub-100ms response times and native-app feel no matter where your users are." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border flex flex-col items-center justify-center rounded-xl ", children: /* @__PURE__ */ jsx("img", { src: fork, alt: "icon" }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[456px] ", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium text-[#281950] mb-4 ", children: "Fork Off VMs Like They're Processes" }),
        /* @__PURE__ */ jsx("p", { children: "Fly Machines start fast enough to handle HTTP requests, run only when you need them, and scale into tens of thousands of instances." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border flex flex-col items-center justify-center rounded-xl ", children: /* @__PURE__ */ jsx("img", { src: Zap, alt: "icon" }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[456px] ", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium text-[#281950] mb-4 ", children: "Ship GPU-Boosted Models" }),
        /* @__PURE__ */ jsx("p", { children: "From LLMs to inferencing, hardware acceleration with the same developer experience as a simple CRUD app." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border flex flex-col items-center justify-center rounded-xl ", children: /* @__PURE__ */ jsx("img", { src: atom, alt: "icon" }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[456px] ", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium text-[#281950] mb-4 ", children: "Built for Distributed Systems" }),
        /* @__PURE__ */ jsx("p", { children: "Clustered databases like Cockroach, globally-distributed Postgres, and modern RPC systems like Elixir FLAME, no Terraform required." })
      ] })
    ] })
  ] }) });
};
const Section1 = () => {
  return /* @__PURE__ */ jsxs("div", { className: "background-grid pt-32 ", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto pb-32  ", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between  ", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-[536px] ", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-[#281950] text-4xl font-medium ", children: "Public Cloud Infrastructure. Modern Platform Endorphins." }),
        /* @__PURE__ */ jsx("p", { className: "text-[#1e133cc9] leading-8 text-xl ", children: "The most flexible and powerful compute platform on any public cloud. Fly Machines are hardware-virtualized containers, running on our own hardware, that launch instantly and run exactly as long as you want them to — for a single HTTP request, or for weeks of uptime." })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: World$1, alt: "world map illustration", className: "w-[380px] h-[350px] object-cover " }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section2, {})
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-[var(--background)] ", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto mt-40 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-[#A39AC1] pt-20 ", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: Logo, alt: "logo", className: "w-28" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Company" }),
        /* @__PURE__ */ jsx("p", { children: "About" }),
        /* @__PURE__ */ jsx("p", { children: "Pricing" }),
        /* @__PURE__ */ jsx("p", { children: "Jobs" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Articles" }),
        /* @__PURE__ */ jsx("p", { children: "Blog" }),
        /* @__PURE__ */ jsx("p", { children: "Phoenix Files" }),
        /* @__PURE__ */ jsx("p", { children: "Laravel Bytes" }),
        /* @__PURE__ */ jsx("p", { children: "Ruby Dispatch" }),
        /* @__PURE__ */ jsx("p", { children: "Django Beats" }),
        /* @__PURE__ */ jsx("p", { children: "JavaScript Journal" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Resources" }),
        /* @__PURE__ */ jsx("p", { children: "Docs" }),
        /* @__PURE__ */ jsx("p", { children: "Customers" }),
        /* @__PURE__ */ jsx("p", { children: "Support" }),
        /* @__PURE__ */ jsx("p", { children: "Support Metrics" }),
        /* @__PURE__ */ jsx("p", { children: "Status" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Contact" }),
        /* @__PURE__ */ jsx("p", { children: "GitHub" }),
        /* @__PURE__ */ jsx("p", { children: "Twitter" }),
        /* @__PURE__ */ jsx("p", { children: "Community" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Legal" }),
        /* @__PURE__ */ jsx("p", { children: "Security" }),
        /* @__PURE__ */ jsx("p", { children: "Privacy policy" }),
        /* @__PURE__ */ jsx("p", { children: "Terms of service" }),
        /* @__PURE__ */ jsx("p", { children: "Acceptable Use Policy" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-[#A39AC1] mt-20 text-sm pb-8 ", children: "Copyright © 2025 Fly.io" }) })
  ] }) });
};
const Fireball = "/assets/fireball-vOYeUDvx.png";
const Section3 = () => {
  return /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] h-auto xl:h-[432px] mx-auto bg-[var(--background)] text-white rounded-3xl border-[2.5px] border-[var(--ring)] mb-40 \n        flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row  ", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[540px] ", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-[#F59E0B] py-1 px-3 text-xs rounded-2xl ", children: "NEW!" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-medium mb-4 mt-4", children: "Introducing Phoenix.new The Remote AI Runtime for Phoenix" }),
      /* @__PURE__ */ jsx("p", { className: "text-[#CCCCCC] mb-4 ", children: "Describe your app, and watch it take shape. Prototype quickly, experiment freely, and share instantly." }),
      /* @__PURE__ */ jsx("button", { className: "bg-[var(--blue)] text-white py-3 px-7 rounded-3xl ", children: "Learn More" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: Fireball, alt: "fire ball", className: "w-[435px] h-[285px] " }) })
  ] }) });
};
const tick = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-check-icon%20lucide-check'%3e%3cpath%20d='M20%206%209%2017l-5-5'/%3e%3c/svg%3e";
const Section4 = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto pb-40 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-[530px] ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "sin" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl text-[#1E133C] ", children: "Single Sign-On" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "sin" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl text-[#1E133C] ", children: "Guaranteed Support Response Times" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "sin" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl text-[#1E133C] ", children: "SOC2 Type 2 Attested" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "sin" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl text-[#1E133C] ", children: "Memory-safe Rust and Go stack" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "sin" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl text-[#1E133C] ", children: "CI/CD Integration" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[530px]", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-medium text-[#281950] ", children: "Enterprise-Ready" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#1E133C] mt-3 mb-5 ", children: "Apps running on Fly Machines are KVM hardware-isolated, built on a memory-safe stack and running directly on our own metal." }),
        /* @__PURE__ */ jsx("button", { className: "bg-[var(--blue)] text-white py-3 px-7 rounded-3xl mr-3 ", children: "Enterprise Features" }),
        /* @__PURE__ */ jsx("button", { className: "bg-gradient-to-b from-white to-[#747272] border border-[#706b6bab] py-3 px-7 rounded-3xl ", children: "Fly.io Security" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-32", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[var(--blue)] uppercase ", children: "Trusted by teams at" }),
      /* @__PURE__ */ jsx("div", {})
    ] })
  ] });
};
const logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20id='Layer_1'%20x='0px'%20y='0px'%20viewBox='0%200%20254.5%20225'%20style='enable-background:new%200%200%20254.5%20225;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%232DBCAF;}%20.st1{fill:%235DC9E1;}%20.st2{fill:%23FDDD00;}%20.st3{fill:%23CE3262;}%20.st4{fill:%2300ACD7;}%20.st5{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M40.2,101.1c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l35.7,0c0.4,0,0.5,0.3,0.3,0.6l-1.7,2.6%20c-0.2,0.3-0.7,0.6-1,0.6L40.2,101.1z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M25.1,110.3c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l45.6,0c0.4,0,0.6,0.3,0.5,0.6l-0.8,2.4%20c-0.1,0.4-0.5,0.6-0.9,0.6L25.1,110.3z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M49.3,119.5c-0.4,0-0.5-0.3-0.3-0.6l1.4-2.5c0.2-0.3,0.6-0.6,1-0.6l20,0c0.4,0,0.6,0.3,0.6,0.7l-0.2,2.4%20c0,0.4-0.4,0.7-0.7,0.7L49.3,119.5z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%20id='CXHf1q_5_'%3e%3cg%3e%3cg%3e%3cpath%20d='M153.1,99.3c-6.3,1.6-10.6,2.8-16.8,4.4c-1.5,0.4-1.6,0.5-2.9-1c-1.5-1.7-2.6-2.8-4.7-3.8c-6.3-3.1-12.4-2.2-18.1,1.5%20c-6.8,4.4-10.3,10.9-10.2,19c0.1,8,5.6,14.6,13.5,15.7c6.8,0.9,12.5-1.5,17-6.6c0.9-1.1,1.7-2.3,2.7-3.7c-3.6,0-8.1,0-19.3,0%20c-2.1,0-2.6-1.3-1.9-3c1.3-3.1,3.7-8.3,5.1-10.9c0.3-0.6,1-1.6,2.5-1.6c5.1,0,23.9,0,36.4,0c-0.2,2.7-0.2,5.4-0.6,8.1%20c-1.1,7.2-3.8,13.8-8.2,19.6c-7.2,9.5-16.6,15.4-28.5,17c-9.8,1.3-18.9-0.6-26.9-6.6c-7.4-5.6-11.6-13-12.7-22.2%20c-1.3-10.9,1.9-20.7,8.5-29.3c7.1-9.3,16.5-15.2,28-17.3c9.4-1.7,18.4-0.6,26.5,4.9c5.3,3.5,9.1,8.3,11.6,14.1%20C154.7,98.5,154.3,99,153.1,99.3z'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M186.2,154.6c-9.1-0.2-17.4-2.8-24.4-8.8c-5.9-5.1-9.6-11.6-10.8-19.3c-1.8-11.3,1.3-21.3,8.1-30.2%20c7.3-9.6,16.1-14.6,28-16.7c10.2-1.8,19.8-0.8,28.5,5.1c7.9,5.4,12.8,12.7,14.1,22.3c1.7,13.5-2.2,24.5-11.5,33.9%20c-6.6,6.7-14.7,10.9-24,12.8C191.5,154.2,188.8,154.3,186.2,154.6z%20M210,114.2c-0.1-1.3-0.1-2.3-0.3-3.3%20c-1.8-9.9-10.9-15.5-20.4-13.3c-9.3,2.1-15.3,8-17.5,17.4c-1.8,7.8,2,15.7,9.2,18.9c5.5,2.4,11,2.1,16.3-0.6%20C205.2,129.2,209.5,122.8,210,114.2z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const logo1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='800'%20width='1200'%20viewBox='-37.204725%20-21.6056%20322.44095%20129.6336'%3e%3cg%20fill-rule='evenodd'%3e%3cpath%20d='M13.603%2042.2763c-.043%208.1975%205.9679%2013.0844%2015.56%2010.8625v-21.725c-9.7134-2.9581-15.5193%203.0266-15.56%2010.8625M29.4566.0001h13.2113v62.5334c-12.6635%202.0703-24.792%203.3834-33.4685-1.4681-11.1719-6.2463-12.07-26.0956-3.2297-34.9363%204.4822-4.4818%2013.5057-7.6372%2023.1935-5.5781V.881c-.0253-.4169-.0488-.8319.2934-.881m34.6428%2013.7984H50.8882V0h13.2112zm158.5352%2039.9275c14.4022%205.5969%2015.9956-25.7788%201.4681-22.8997-9.0219%201.7881-8.7322%2020.0769-1.4681%2022.8997m.5872-33.7622c10.9984-1.176%2019.296%203.6775%2022.6062%2011.1562%205.6482%2012.7604-.3106%2027.4022-9.3947%2031.7072-4.708%202.2313-9.638%202.4438-14.0921%202.055-13.767-1.2006-22.4494-15.2306-17.615-30.8265.7565-2.441%201.6065-3.9341%202.0553-4.6972%202.9925-5.0881%208.0447-8.4969%2016.4403-9.3947M82.3018%2048.735c-3.654%206.141%205.5269%207.6122%2011.4494%205.8719v-9.1013c-4.5506.6354-9.7303.3397-11.4494%203.2294m23.1928%2014.3856c-10.913.6279-27.498%204.3454-33.4684-2.9356-3.5075-4.2781-3.1303-12.4378%200-16.441%204.0453-5.1724%2012.876-6.3005%2020.8444-7.0458.7234-1.7813.2356-4.6794-.5872-5.8722-7.2888-1.8566-14.5306%201.0203-19.6697%203.2293v-10.275c7.7619-3.5662%2025.7406-7.3212%2031.1197.8807%202.825%204.3078%201.7612%2011.8206%201.7612%2018.4956zm46.3865.5876H138.67V46.68c0-5.6066.9069-12.7157-2.0556-14.9729-2.32-1.7687-7.8241-.8812-11.1557%200v32.001h-13.2115V22.8997c13.5053-3.508%2037.883-7.2693%2039.634%209.6882.8635%208.3606-.6397%2020.904%200%2031.1203m19.67-14.0924c2.2231%203.5969%208.2431%204.9456%2013.211%202.6422-.2729-6.871-.3682-13.9194-.2935-21.1382-11.4175-3.0165-18.2219%209.916-12.9175%2018.496m33.175-27.8903c-1.176%203.5215-2.8969%206.4975-4.4037%209.6884-1.3616.305-2.5416-.5412-3.2297%200-.3013%2014.311%203.0478%2033.7116-2.6422%2044.0372-3.426%206.2169-9.7334%2010.2053-19.3766%2010.8628-7.0247.479-12.4768-.6687-17.615-2.6422V71.3411c6.0266%203.5187%2021.255%206.3875%2025.542-.881%201.2612-2.1384%201.1812-4.3487%201.7612-7.633-2.76.145-5.4394%201.423-8.8072%201.468-13.846.1838-22.4119-10.8409-19.0832-26.1293%201.2875-5.9138%204.7525-10.6753%209.395-13.5047%209.642-5.8766%2024.4629-5.4303%2038.4594-2.9356'/%3e%3cpath%20d='M64.0994%2020.7855c-.015%209.7284-.0128%2016.719-.0137%2028.5378-.5613%2011.6147-.4306%2020.8638-4.6834%2026.4213-.8388%201.0959-2.62%202.6947-4.1104%203.8168-1.2515.9422-3.6368%202.8528-4.9909%202.936-1.365.0838-4.8719-1.895-6.459-2.6425-2.0841-.9816-4.0107-2.285-6.165-2.9356%205.0253-3.1141%209.7956-5.4488%2011.743-11.7435%201.6938-5.4744%201.4682-13.4072%201.4682-21.1381%200-7.6338.034-16.5088.034-23.2488l13.1772-.003z'/%3e%3c/g%3e%3c/svg%3e";
const logo2 = "/assets/laracel-juoA9VsS.svg";
const logo3 = "/assets/docker-BvxbFfDQ.svg";
const logo4 = "/assets/rust-DNJ_AO0c.svg";
const Section5 = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-[var(--blue)] text-white py-40 ", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto pb-36 ", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "font-medium text-4xl mb-4 ", children: "Use the Tech You Love" }),
      /* @__PURE__ */ jsx("p", { className: "text-[#cac8c8] mb-7 max-w-[512px] ", children: "Build with your favorite framework. No Dockerfile? No problem: our CLI generates containers for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel, and .NET." }),
      /* @__PURE__ */ jsx("button", { className: "bg-[#5495eb] text-white py-3 px-7 rounded-3xl ", children: "Learn More" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "logo", className: " h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo1, alt: "logo", className: "h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo2, alt: "logo", className: "h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo4, alt: "logo", className: "h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo3, alt: "logo", className: "h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "logo", className: "h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "logo", className: "h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "logo", className: "h-16 " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "logo", className: "h-16 " }) })
    ] })
  ] }) }) });
};
const work = "/assets/working-DHJaCRJE.png";
const Section6 = () => {
  return /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto pt-28 pb-28  ", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[536px] ", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-[#ddb57149] py-1 px-3 text-xs rounded-2xl mb-4 ", children: "NEW!" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-medium mb-3 ", children: "Fly.io Managed Postgres" }),
      /* @__PURE__ */ jsx("p", { className: "text-[#1E133C] mb-6 ", children: "A fully-managed database service that handles all aspects of running production PostgreSQL where we take care of:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "icon" }),
          /* @__PURE__ */ jsx("p", { children: "Automatic backups and recovery" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "icon" }),
          /* @__PURE__ */ jsx("p", { children: "High availability with automatic failover" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "icon" }),
          /* @__PURE__ */ jsx("p", { children: "Performance monitoring and metrics" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "icon" }),
          /* @__PURE__ */ jsx("p", { children: "Resource scaling (CPU, RAM, storage)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "icon" }),
          /* @__PURE__ */ jsx("p", { children: "24/7 support and incident response" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: tick, alt: "icon" }),
          /* @__PURE__ */ jsx("p", { children: "Automatic encryption of data at rest and in transit" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "bg-[var(--blue)] text-white py-3 px-7 rounded-3xl mt-8 ", children: "Learn More" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: work, alt: "image", className: "w-[385px] " }) })
  ] }) });
};
const jsL = "/assets/js-B4RJX4Q0.png";
const cpu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-cpu-icon%20lucide-cpu'%3e%3cpath%20d='M12%2020v2'/%3e%3cpath%20d='M12%202v2'/%3e%3cpath%20d='M17%2020v2'/%3e%3cpath%20d='M17%202v2'/%3e%3cpath%20d='M2%2012h2'/%3e%3cpath%20d='M2%2017h2'/%3e%3cpath%20d='M2%207h2'/%3e%3cpath%20d='M20%2012h2'/%3e%3cpath%20d='M20%2017h2'/%3e%3cpath%20d='M20%207h2'/%3e%3cpath%20d='M7%2020v2'/%3e%3cpath%20d='M7%202v2'/%3e%3crect%20x='4'%20y='4'%20width='16'%20height='16'%20rx='2'/%3e%3crect%20x='8'%20y='8'%20width='8'%20height='8'%20rx='1'/%3e%3c/svg%3e";
const power = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-power-icon%20lucide-power'%3e%3cpath%20d='M12%202v10'/%3e%3cpath%20d='M18.4%206.6a9%209%200%201%201-12.77.04'/%3e%3c/svg%3e";
const brain = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-brain-icon%20lucide-brain'%3e%3cpath%20d='M12%2018V5'/%3e%3cpath%20d='M15%2013a4.17%204.17%200%200%201-3-4%204.17%204.17%200%200%201-3%204'/%3e%3cpath%20d='M17.598%206.5A3%203%200%201%200%2012%205a3%203%200%201%200-5.598%201.5'/%3e%3cpath%20d='M17.997%205.125a4%204%200%200%201%202.526%205.77'/%3e%3cpath%20d='M18%2018a4%204%200%200%200%202-7.464'/%3e%3cpath%20d='M19.967%2017.483A4%204%200%201%201%2012%2018a4%204%200%201%201-7.967-.517'/%3e%3cpath%20d='M6%2018a4%204%200%200%201-2-7.464'/%3e%3cpath%20d='M6.003%205.125a4%204%200%200%200-2.526%205.77'/%3e%3c/svg%3e";
const Section7 = () => {
  return /* @__PURE__ */ jsx("div", { className: "background-grid", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto pt-32 ", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: jsL, alt: "javascript and we", className: "w-[448px]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[530px] ", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-medium text-[#281950] mb-4 ", children: "Serverful JavaScript Without the Hassle of Serverless" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#1e133cd8] font-medium ", children: "Imagine if a server could boot as fast as a serverless function? That's Fly Machines—serverless compute is a trade-off you no longer need to make. Graduate to a full-stack cloud to regain control over your stack & hosting bill." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border flex flex-col items-center justify-center rounded-xl ", children: /* @__PURE__ */ jsx("img", { src: power, alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl mb-4 mt-7", children: "Boots in 250ms or Less" }),
          /* @__PURE__ */ jsx("p", { className: "text-[#1e133ca4] ", children: "Functions and apps boot and respond to web requests in 250ms or less with Fly Machines. You decide to keep them running or automatically put them to sleep." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border flex flex-col items-center justify-center rounded-xl ", children: /* @__PURE__ */ jsx("img", { src: brain, alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl mb-4 mt-7", children: "Built for JavaScript Developers" }),
          /* @__PURE__ */ jsx("p", { className: "text-[#1e133ca4] ", children: "JavaScript, TypeScript, Bun, Deno—whatever your flavor, Fly Launch automatically detects your runtime and generates a VM with everything you need to run your app." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border flex flex-col items-center justify-center rounded-xl ", children: /* @__PURE__ */ jsx("img", { src: cpu, alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl mb-4 mt-7", children: "Real GPUs & CPUs on the Edge" }),
          /* @__PURE__ */ jsx("p", { className: "text-[#1e133ca4] ", children: "Run workloads that require GPUs or lots of CPUs, memory, and storage in over 30 regions around the world—all interconnected by a private, encrypted WireGuard network that works out of the box." })
        ] })
      ] })
    ] })
  ] }) }) });
};
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("nav", {
      children: /* @__PURE__ */ jsx(Navbar, {})
    }), /* @__PURE__ */ jsxs("main", {
      children: [/* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx(Section1, {})
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx(Section3, {})
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx(Section4, {})
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx(Section5, {})
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx(Section6, {})
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx(Section7, {})
      })]
    }), /* @__PURE__ */ jsx("footer", {
      children: /* @__PURE__ */ jsx(Footer, {})
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-n1iw2mYZ.js", "imports": ["/assets/chunk-OIYGIGL5-CMUvuLFw.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BlPd-BkG.js", "imports": ["/assets/chunk-OIYGIGL5-CMUvuLFw.js"], "css": ["/assets/app-DErXt0vl.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BBigMMng.js", "imports": ["/assets/chunk-OIYGIGL5-CMUvuLFw.js"], "css": ["/assets/app-DErXt0vl.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-bf3b7731.js", "version": "bf3b7731", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
