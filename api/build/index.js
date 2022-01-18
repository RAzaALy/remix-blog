var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-LSFR4O4O.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// app/utils/firebase.js
init_react();
var import_app = __toModule(require("firebase/app"));
var import_auth = __toModule(require("firebase/auth"));
var firebaseConfig = {
  apiKey: "AIzaSyAOTXk1G4vP483Xuu7CKnOimjmnUgjZxzg",
  authDomain: "remix-blog-92c7d.firebaseapp.com",
  projectId: "remix-blog-92c7d",
  storageBucket: "remix-blog-92c7d.appspot.com",
  messagingSenderId: "39190282021",
  appId: "1:39190282021:web:5314077d6c5f34728b24cc",
  measurementId: "G-RK6HCFV4VZ"
};
var app = (0, import_app.initializeApp)(firebaseConfig);
var auth = (0, import_auth.getAuth)(app);

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/root.jsx
var import_remix4 = __toModule(require_remix());

// app/sessions.server.jsx
init_react();
var import_remix2 = __toModule(require_remix());
var { getSession, commitSession, destroySession } = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "fb:token",
    expires: new Date(Date.now() + 600),
    httpOnly: true,
    maxAge: 600,
    path: "/",
    sameSite: "lax",
    secrets: ["t@c0s"],
    secure: true
  }
});

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/root.jsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    const data = { user: auth.currentUser, error: session.get("error") };
    return (0, import_remix4.json)(data, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } else {
    return null;
  }
}
var action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    return (0, import_remix3.redirect)("/", {
      headers: { "Set-Cookie": await destroySession(session) }
    });
  }
  auth.signOut();
  return (0, import_remix3.redirect)("/");
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to. Maybe try logging in first? ", /* @__PURE__ */ React.createElement(import_remix3.Link, {
        to: "/login"
      }, "Login"));
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Error 404 has been encountered");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  let data = (0, import_remix4.useLoaderData)();
  let loggedIn = data == null ? void 0 : data.user;
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React.createElement(RemixLogo, null)), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Home")), !loggedIn ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/login"
  }, "Login")) : /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "navLogoutButton"
  }, "Logout"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/blogs"
  }, "Blogs")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/docs"
  }, "Remix Docs")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA9 You!"))));
}
function RemixLogo(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/auth/register.jsx
var register_exports = {};
__export(register_exports, {
  action: () => action2,
  default: () => Register,
  links: () => links2
});
init_react();
var import_auth2 = __toModule(require("@firebase/auth"));
var import_remix5 = __toModule(require_remix());

// app/styles/auth.css
var auth_default = "/build/_assets/auth-G2BXVUE3.css";

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/auth/register.jsx
var links2 = () => {
  return [{ rel: "stylesheet", href: auth_default }];
};
var action2 = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  await auth.signOut();
  let { session: sessionData, user, error: signUpError } = await (0, import_auth2.createUserWithEmailAndPassword)(auth, email, password);
  if (!signUpError) {
    let session = await getSession(request.headers.get("Cookie"));
    session.set("access_token", auth.currentUser.access_token);
    return (0, import_remix5.redirect)("/blogs", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return { user, signUpError };
};
function Register() {
  var _a;
  const actionData = (0, import_remix5.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "loginContainer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "authTitle"
  }, /* @__PURE__ */ React.createElement("h1", null, "Register")), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    className: "loginInput",
    type: "email",
    name: "email",
    placeholder: "you@awesome.dev",
    required: true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    className: "loginInput",
    type: "password",
    name: "password",
    required: true
  }), /* @__PURE__ */ React.createElement("button", {
    className: "loginButton",
    type: "submit"
  }, "Register")), /* @__PURE__ */ React.createElement("div", {
    className: "additionalLinks"
  }, "Already Registered?  ", /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/login"
  }, "Login")), /* @__PURE__ */ React.createElement("div", {
    className: "errors"
  }, (actionData == null ? void 0 : actionData.error) ? (_a = actionData == null ? void 0 : actionData.error) == null ? void 0 : _a.message : null));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/actions.jsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action3,
  default: () => ActionsDemo,
  meta: () => meta
});
init_react();
var import_react = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
function meta() {
  return { title: "Actions Demo" };
}
var action3 = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix6.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix6.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix6.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix6.useActionData)();
  let answerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/correct.jsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
init_react();
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/params.jsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
init_react();
var import_remix7 = __toModule(require_remix());
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/params/index.jsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
init_react();
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/params/$id.jsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader2,
  meta: () => meta3
});
init_react();
var import_remix8 = __toModule(require_remix());
var loader2 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix8.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix8.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta3 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/auth/forgot.jsx
var forgot_exports = {};
__export(forgot_exports, {
  action: () => action4,
  default: () => Login,
  links: () => links3
});
init_react();
var import_auth4 = __toModule(require("@firebase/auth"));
var import_remix9 = __toModule(require_remix());
var links3 = () => {
  return [{ rel: "stylesheet", href: auth_default }];
};
var action4 = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  try {
    await (0, import_auth4.sendPasswordResetEmail)(auth, email);
  } catch (err) {
    console.log("Error: ", err.message);
  }
  return (0, import_remix9.redirect)("/login");
};
function Login() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "loginContainer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "authTitle"
  }, /* @__PURE__ */ React.createElement("h1", null, "Forgot Password?")), /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, "Enter the email address associated with your account"), /* @__PURE__ */ React.createElement("input", {
    className: "loginInput",
    type: "email",
    name: "email",
    placeholder: "you@awesome.dev",
    required: true
  }), /* @__PURE__ */ React.createElement("button", {
    className: "loginButton",
    type: "submit"
  }, "Submit")), /* @__PURE__ */ React.createElement("div", {
    className: "additionalLinks"
  }, "Not Yet Registered?  ", /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/auth/register"
  }, "Register")));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/blogs/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_remix10 = __toModule(require_remix());
var import_tiny_invariant = __toModule(require("tiny-invariant"));

// app/post.js
init_react();
var import_client = __toModule(require("@prisma/client"));
var import_marked = __toModule(require("marked"));
var prisma = new import_client.PrismaClient();
async function getPost(slug) {
  await prisma.$connect();
  const foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  });
  let id = foundSlug.id;
  let title = foundSlug.title;
  let html = (0, import_marked.marked)(foundSlug.markdown);
  prisma.$disconnect();
  return { id, slug, title, html };
}
async function getPostEdit(slug) {
  await prisma.$connect();
  const foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  });
  let id = foundSlug.id;
  let title = foundSlug.title;
  let markdown = foundSlug.markdown;
  prisma.$disconnect();
  return { id, slug, title, markdown };
}
async function createPost(post) {
  await prisma.$connect();
  await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown
    }
  });
  prisma.$disconnect();
  return getPost(post.slug);
}
async function updatePost(post) {
  await prisma.$connect();
  console.log("updatePost id", post.id);
  await prisma.posts.update({
    where: {
      id: post.id
    },
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown
    }
  });
  prisma.$disconnect();
  return getPost(post.slug);
}
async function deletePost(post) {
  await prisma.$connect();
  await prisma.posts.delete({
    where: {
      id: post
    }
  });
  prisma.$disconnect();
  return post;
}
async function getPosts() {
  await prisma.$connect();
  const allPosts = await prisma.posts.findMany();
  prisma.$disconnect();
  return allPosts;
}

// app/styles/posts.css
var posts_default = "/build/_assets/posts-ZDQT6MXY.css";

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/blogs/$slug.jsx
var links4 = () => {
  return [{ rel: "stylesheet", href: posts_default }];
};
var loader3 = ({ params }) => {
  return getPost(params.slug);
};
function PostSlug() {
  let post = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "postDisplay",
    dangerouslySetInnerHTML: { __html: post.html }
  });
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/blogs/index.jsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => Posts,
  links: () => links5,
  loader: () => loader4
});
init_react();
var import_remix11 = __toModule(require_remix());
var links5 = () => {
  return [{ rel: "stylesheet", href: posts_default }];
};
var loader4 = () => {
  return getPosts();
};
function Posts() {
  let posts = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "My Remix Blog"), /* @__PURE__ */ React.createElement("p", null, "Click on the post name to read the post"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/admin"
  }, "Blog Admin (Edit/Create)")), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    className: "postList",
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    className: "postTitle",
    to: post.slug
  }, post.title)))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links6,
  meta: () => meta4
});
init_react();
var import_remix12 = __toModule(require_remix());

// app/styles/demos/about.css
var about_default = "/build/_assets/about-GGM5BPB3.css";

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/about.jsx
var meta4 = () => {
  return {
    title: "About Remix"
  };
};
var links6 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix12.Outlet, null)));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/about/index.jsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
init_react();
var import_remix13 = __toModule(require_remix());
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/demos/about/whoa.jsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
init_react();
var import_remix14 = __toModule(require_remix());
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/admin.jsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links7,
  loader: () => loader5
});
init_react();
var import_remix15 = __toModule(require_remix());

// app/styles/admin.css
var admin_default = "/build/_assets/admin-BRWJOEDC.css";

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/admin.jsx
var links7 = () => {
  return [{ rel: "stylesheet", href: admin_default }];
};
async function loader5({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("access_token")) {
    return (0, import_remix15.redirect)("/login");
  }
  const data = { error: session.get("error") };
  return (0, import_remix15.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }), getPosts();
}
function Admin() {
  let posts = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "adminTitle"
  }, "Admin"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("p", null, "Click on a post to edit the blog post"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: post.slug
  }, post.title)))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix15.Outlet, null))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/admin/$edit.jsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action5,
  default: () => PostSlug2,
  loader: () => loader6
});
init_react();
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));
var import_remix16 = __toModule(require_remix());
var loader6 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.edit, "expected params.edit");
  return getPostEdit(params.edit);
};
var action5 = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let slug = formData.get("slug");
  let markdown = formData.get("markdown");
  let id = formData.get("id");
  if (request.method == "DELETE") {
    await deletePost(id);
    return (0, import_remix16.redirect)("/admin");
  }
  let errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  await updatePost({ id, title, slug, markdown });
  return (0, import_remix16.redirect)("/admin");
};
function PostSlug2() {
  let errors = (0, import_remix16.useActionData)();
  let transition = (0, import_remix16.useTransition)();
  let post = (0, import_remix16.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix16.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    className: "hiddenBlogID",
    name: "id",
    defaultValue: post.id
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Post Title: ", " ", " ", (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("em", null, "Title is required"), " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: post.title
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, " Post Slug: ", " ", " ", (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("em", null, "Slug is required"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: post.slug,
    id: "slugInput",
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), " ", " ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: post.markdown,
    name: "markdown",
    id: "",
    rows: 20,
    cols: 50
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "adminButton updateButton"
  }, transition.submission ? "Updating..." : "Update Post"))), /* @__PURE__ */ React.createElement(import_remix16.Form, {
    method: "delete"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    className: "hiddenBlogID",
    name: "id",
    defaultValue: post.id
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    className: "adminButton deleteButton",
    type: "submit"
  }, "Delete"))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/admin/index.jsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
init_react();
var import_remix17 = __toModule(require_remix());
function AdminIndex() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "adminNewPostLink"
  }, /* @__PURE__ */ React.createElement(import_remix17.Link, {
    to: "new"
  }, " ", /* @__PURE__ */ React.createElement("button", {
    className: "adminNewPostButton"
  }, "Create a New Post")));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/admin/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action6,
  default: () => NewPost
});
init_react();
var import_data = __toModule(require("@remix-run/react/data"));
var import_remix18 = __toModule(require_remix());
var action6 = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let slug = formData.get("slug");
  let markdown = formData.get("markdown");
  let errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  await createPost({ title, slug, markdown });
  return (0, import_remix18.redirect)("/admin");
};
function NewPost() {
  let errors = (0, import_remix18.useActionData)();
  let transition = (0, import_remix18.useTransition)();
  let slug = "";
  const handleChange = (e) => {
    let text = e.target.value;
    slug = text.replace(/\s/g, "-");
    document.getElementById("slugInput").value = slug.toLowerCase();
  };
  return /* @__PURE__ */ React.createElement(import_remix18.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Post Title: ", " ", " ", (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("em", null, "Title is required"), " ", /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    name: "title"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, " Post Slug: ", " ", " ", (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("em", null, "Slug is required"), /* @__PURE__ */ React.createElement("input", {
    placeholder: slug,
    id: "slugInput",
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), " ", " ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    name: "markdown",
    id: "",
    rows: 20,
    cols: 30
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post")));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader7,
  meta: () => meta5
});
init_react();
var import_remix19 = __toModule(require_remix());
async function loader7({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    const data = { user: auth.currentUser, error: session.get("error") };
    return (0, import_remix19.json)(data, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return null;
}
var meta5 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index2() {
  var _a;
  const data = (0, import_remix19.useLoaderData)();
  let greeting = ((_a = data == null ? void 0 : data.user) == null ? void 0 : _a.email) ? data.user.email : "friend";
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Welcome ", greeting, " to Remix Blog Auth Tutorial!"), /* @__PURE__ */ React.createElement("h3", null, "This blog was created by ", /* @__PURE__ */ React.createElement("strong", null, "Chris Benjamin")), /* @__PURE__ */ React.createElement("p", null, "This tutorial will show you how firebase authentication functionality works in Remix")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Tutorial Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/cbenjamin2009/remix-blog-firebase-auth",
    target: "_blank"
  }, "Github")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/chrisbenjamin",
    target: "_blank"
  }, "Tutorial")))));
}

// route-module:/home/aliraza2747/remix-blog-firebase-auth/app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => Login2,
  links: () => links8,
  loader: () => loader8
});
init_react();
var import_auth6 = __toModule(require("@firebase/auth"));
var import_remix20 = __toModule(require_remix());
var links8 = () => {
  return [{ rel: "stylesheet", href: auth_default }];
};
async function loader8({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    return (0, import_remix20.redirect)("/blogs");
  }
  const data = { error: session.get("error") };
  return (0, import_remix20.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
var action7 = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  const { user, error } = await (0, import_auth6.signInWithEmailAndPassword)(auth, email, password);
  if (user) {
    let session = await getSession(request.headers.get("Cookie"));
    session.set("access_token", await user.getIdToken());
    return (0, import_remix20.redirect)("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return { user, error };
};
function Login2() {
  var _a;
  const actionData = (0, import_remix20.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "loginContainer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "authTitle"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login")), /* @__PURE__ */ React.createElement(import_remix20.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    className: "loginInput",
    type: "email",
    name: "email",
    placeholder: "you@awesome.dev",
    required: true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    className: "loginInput",
    type: "password",
    name: "password",
    required: true
  }), /* @__PURE__ */ React.createElement("button", {
    className: "loginButton",
    type: "submit"
  }, "Login")), /* @__PURE__ */ React.createElement("div", {
    className: "additionalLinks"
  }, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/auth/register"
  }, "Register"), /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/auth/forgot"
  }, "Forgot Password?")), /* @__PURE__ */ React.createElement("div", {
    className: "errors"
  }, (actionData == null ? void 0 : actionData.error) ? (_a = actionData == null ? void 0 : actionData.error) == null ? void 0 : _a.message : null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/register": {
    id: "routes/auth/register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/auth/forgot": {
    id: "routes/auth/forgot",
    parentId: "root",
    path: "auth/forgot",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_exports
  },
  "routes/blogs/$slug": {
    id: "routes/blogs/$slug",
    parentId: "root",
    path: "blogs/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blogs/index": {
    id: "routes/blogs/index",
    parentId: "root",
    path: "blogs",
    index: true,
    caseSensitive: void 0,
    module: blogs_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/$edit": {
    id: "routes/admin/$edit",
    parentId: "routes/admin",
    path: ":edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/admin/new": {
    id: "routes/admin/new",
    parentId: "routes/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm9vdC5qc3giLCAiLi4vLi4vYXBwL3V0aWxzL2ZpcmViYXNlLmpzIiwgIi4uLy4uL2FwcC9zZXNzaW9ucy5zZXJ2ZXIuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9hdXRoL3JlZ2lzdGVyLmpzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvZGVtb3MvYWN0aW9ucy5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2RlbW9zL2NvcnJlY3QuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXguanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkLmpzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvYXV0aC9mb3Jnb3QuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9ibG9ncy8kc2x1Zy5qc3giLCAiLi4vLi4vYXBwL3Bvc3QuanMiLCAicm91dGUtbW9kdWxlOi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2Jsb2dzL2luZGV4LmpzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleC5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L3dob2EuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9hZG1pbi5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2FkbWluLyRlZGl0LmpzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXguanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9hZG1pbi9uZXcuanN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9pbmRleC5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2xvZ2luLmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvYXV0aC9yZWdpc3Rlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvZGVtb3MvYWN0aW9ucy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvZGVtb3MvY29ycmVjdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy8kaWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2F1dGgvZm9yZ290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9ibG9ncy8kc2x1Zy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvYmxvZ3MvaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2FkbWluLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvYWRtaW4vJGVkaXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvaG9tZS9hbGlyYXphMjc0Ny9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGgvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2FkbWluL25ldy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIi9ob21lL2FsaXJhemEyNzQ3L3JlbWl4LWJsb2ctZmlyZWJhc2UtYXV0aC9hcHAvcm91dGVzL2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOCBmcm9tIFwiL2hvbWUvYWxpcmF6YTI3NDcvcmVtaXgtYmxvZy1maXJlYmFzZS1hdXRoL2FwcC9yb3V0ZXMvbG9naW4uanN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9hdXRoL3JlZ2lzdGVyXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYXV0aC9yZWdpc3RlclwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImF1dGgvcmVnaXN0ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWN0aW9uc1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImRlbW9zL2FjdGlvbnNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9kZW1vcy9jb3JyZWN0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZGVtb3MvY29ycmVjdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImRlbW9zL2NvcnJlY3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJkZW1vcy9wYXJhbXNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9kZW1vcy9wYXJhbXMvJGlkXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICBwYXRoOiBcIjppZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2F1dGgvZm9yZ290XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYXV0aC9mb3Jnb3RcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhdXRoL2ZvcmdvdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dzLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZ3MvJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9ncy86c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZ3MvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9nc1wiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZGVtb3MvYWJvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dC9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9hYm91dFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTExXG4gIH0sXG4gIFwicm91dGVzL2RlbW9zL2Fib3V0L3dob2FcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dC93aG9hXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgcGF0aDogXCJ3aG9hXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEyXG4gIH0sXG4gIFwicm91dGVzL2FkbWluXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhZG1pblwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxM1xuICB9LFxuICBcInJvdXRlcy9hZG1pbi8kZWRpdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluLyRlZGl0XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCI6ZWRpdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxNFxuICB9LFxuICBcInJvdXRlcy9hZG1pbi9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTVcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vbmV3XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vbmV3XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCJuZXdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTZcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxN1xuICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibG9naW5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMThcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG4gIHJlZGlyZWN0XG59IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgZGFya1N0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZGFyay5jc3NcIjtcbmltcG9ydCB7YXV0aH0gZnJvbSBcIn4vdXRpbHMvZmlyZWJhc2VcIlxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuL3Nlc3Npb25zLnNlcnZlclwiO1xuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSBmcm9tIFwiLi9zZXNzaW9ucy5zZXJ2ZXJcIjtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2FwcCNsaW5rc1xuZXhwb3J0IGxldCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGdsb2JhbFN0eWxlc1VybCB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBkYXJrU3R5bGVzVXJsLFxuICAgICAgbWVkaWE6IFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiXG4gICAgfVxuICBdO1xufTtcblxuLy8gbG9hZGVyIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBleGlzdGluZyB1c2VyIGJhc2VkIG9uIHNlc3Npb24gY29va2llXG4vLyB0aGlzIGlzIHVzZWQgdG8gY2hhbmdlIHRoZSBuYXYgcmVuZGVyZWQgb24gdGhlIHBhZ2UgYW5kIHRoZSBncmVldGluZy4gXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKFxuICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcbiAgKTtcblxuICBpZiAoc2Vzc2lvbi5oYXMoXCJhY2Nlc3NfdG9rZW5cIikpIHtcblxuICBjb25zdCBkYXRhID0geyB1c2VyOiBhdXRoLmN1cnJlbnRVc2VyLCBlcnJvcjogc2Vzc2lvbi5nZXQoXCJlcnJvclwiKSB9O1xuICByZXR1cm4ganNvbihkYXRhLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbilcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcblxuICByZXR1cm4gbnVsbDtcbn1cbn1cblxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oXG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuICApO1xuXG4gIGlmIChzZXNzaW9uLmhhcyhcImFjY2Vzc190b2tlblwiKSkge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvXCIsIHtcbiAgICBoZWFkZXJzOiB7XCJTZXQtQ29va2llXCI6IGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pfVxuICB9KVxufVxuYXV0aC5zaWduT3V0KCk7XG5yZXR1cm4gcmVkaXJlY3QoJy8nKVxufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgbGV0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgbGV0IG1lc3NhZ2U7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLiBNYXliZSB0cnkgbG9nZ2luZyBpbiBmaXJzdD8gPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgRXJyb3IgNDA0IGhhcyBiZWVuIGVuY291bnRlcmVkPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuLCB0aXRsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG5cbiAgLy8gbGV0J3MgZ3JhYiBvdXIgbG9hZGVyIGRhdGEgdG8gc2VlIGlmIGl0J3MgYSBzZXNzaW9uZWQgdXNlclxuICBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgLy8gbGV0J3MgY2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSB1c2VyLCBpZiBzbyB3ZSB3aWxsIHVzZSBpdCB0byB1cGRhdGUgdGhlIGdyZWV0aW5nIGFuZCBsaW5rIGxvZ2ljIGZvciBMb2dpbi9Mb2dvdXQgaW4gTmF2XG4gIGxldCBsb2dnZWRJbiA9IGRhdGE/LnVzZXJcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXgtYXBwXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9faGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9faGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiB0aXRsZT1cIlJlbWl4XCIgY2xhc3NOYW1lPVwicmVtaXgtYXBwX19oZWFkZXItaG9tZS1saW5rXCI+XG4gICAgICAgICAgICA8UmVtaXhMb2dvIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9faGVhZGVyLW5hdlwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgeyFsb2dnZWRJbiA/IDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPiA6IFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJuYXZMb2dvdXRCdXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9saT4gfVxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYmxvZ3NcIj5CbG9nczwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCI+UmVtaXggRG9jczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL3JlbWl4XCI+R2l0SHViPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXgtYXBwX19tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9fbWFpbi1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9fZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9fZm9vdGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8cD4mY29weTsgWW91ITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmVtaXhMb2dvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCA2NTkgMTY1XCJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJyZW1peC1ydW4tbG9nby10aXRsZVwiXG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIHdpZHRoPVwiMTA2XCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDx0aXRsZSBpZD1cInJlbWl4LXJ1bi1sb2dvLXRpdGxlXCI+UmVtaXggTG9nbzwvdGl0bGU+XG4gICAgICA8cGF0aCBkPVwiTTAgMTYxVjEzNkg0NS41NDE2QzUzLjE0ODYgMTM2IDU0LjgwMDMgMTQxLjYzOCA1NC44MDAzIDE0NVYxNjFIMFogTTEzMy44NSAxMjQuMTZDMTM1LjMgMTQyLjc2MiAxMzUuMyAxNTEuNDgyIDEzNS4zIDE2MUg5Mi4yMjgzQzkyLjIyODMgMTU4LjkyNyA5Mi4yNjUzIDE1Ny4wMyA5Mi4zMDI4IDE1NS4xMDdDOTIuNDE5NSAxNDkuMTI4IDkyLjU0MTEgMTQyLjg5NCA5MS41NzE3IDEzMC4zMDRDOTAuMjkwNSAxMTEuODcyIDgyLjM0NzMgMTA3Ljc3NiA2Ny43NDE5IDEwNy43NzZINTQuODAyMUgwVjc0LjI0SDY5Ljc5MThDODguMjQwNyA3NC4yNCA5Ny40NjUxIDY4LjYzMiA5Ny40NjUxIDUzLjc4NEM5Ny40NjUxIDQwLjcyOCA4OC4yNDA3IDMyLjgxNiA2OS43OTE4IDMyLjgxNkgwVjBINzcuNDc4OEMxMTkuMjQ1IDAgMTQwIDE5LjcxMiAxNDAgNTEuMkMxNDAgNzQuNzUyIDEyNS4zOTUgOTAuMTEyIDEwNS42NjUgOTIuNjcyQzEyMi4zMiA5NiAxMzIuMDU3IDEwNS40NzIgMTMzLjg1IDEyNC4xNlpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0yMjkuNDMgMTIwLjU3NkMyMjUuNTkgMTI5LjUzNiAyMTguNDIyIDEzMy4zNzYgMjA3LjE1OCAxMzMuMzc2QzE5NC42MTQgMTMzLjM3NiAxODQuMzc0IDEyNi43MiAxODMuMzUgMTEyLjY0SDI2My40NzhWMTAxLjEyQzI2My40NzggNzAuMTQzNyAyNDMuMjU0IDQ0LjAzMTcgMjA1LjExIDQ0LjAzMTdDMTY5LjUyNiA0NC4wMzE3IDE0Mi45MDIgNjkuODg3NyAxNDIuOTAyIDEwNS45ODRDMTQyLjkwMiAxNDIuMzM2IDE2OS4wMTQgMTY0LjM1MiAyMDUuNjIyIDE2NC4zNTJDMjM1LjgzIDE2NC4zNTIgMjU2LjgyMiAxNDkuNzYgMjYyLjcxIDEyMy42NDhMMjI5LjQzIDEyMC41NzZaTTE4My44NjIgOTIuNjcxN0MxODUuMzk4IDgxLjkxOTcgMTkxLjI4NiA3My43Mjc3IDIwNC41OTggNzMuNzI3N0MyMTYuODg2IDczLjcyNzcgMjIzLjU0MiA4Mi40MzE3IDIyNC4wNTQgOTIuNjcxN0gxODMuODYyWlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTM4NS4yNTYgNjYuNTU5N0MzODAuMzkyIDUzLjI0NzcgMzY5Ljg5NiA0NC4wMzE3IDM0OS42NzIgNDQuMDMxN0MzMzIuNTIgNDQuMDMxNyAzMjAuMjMyIDUxLjcxMTcgMzE0LjA4OCA2NC4yNTU3VjQ3LjEwMzdIMjcyLjYxNlYxNjEuMjhIMzE0LjA4OFYxMDUuMjE2QzMxNC4wODggODguMDYzOCAzMTguOTUyIDc2Ljc5OTcgMzMyLjUyIDc2Ljc5OTdDMzQ1LjA2NCA3Ni43OTk3IDM0OC4xMzYgODQuOTkxNyAzNDguMTM2IDEwMC42MDhWMTYxLjI4SDM4OS42MDhWMTA1LjIxNkMzODkuNjA4IDg4LjA2MzggMzk0LjIxNiA3Ni43OTk3IDQwOC4wNCA3Ni43OTk3QzQyMC41ODQgNzYuNzk5NyA0MjMuNCA4NC45OTE3IDQyMy40IDEwMC42MDhWMTYxLjI4SDQ2NC44NzJWODkuNTk5N0M0NjQuODcyIDY1Ljc5MTcgNDU1LjY1NiA0NC4wMzE3IDQyNC4xNjggNDQuMDMxN0M0MDQuOTY4IDQ0LjAzMTcgMzkxLjQgNTMuNzU5NyAzODUuMjU2IDY2LjU1OTdaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNDc4LjQzNiA0Ny4xMDRWMTYxLjI4SDUxOS45MDhWNDcuMTA0SDQ3OC40MzZaTTQ3OC4xOCAzNi4zNTJINTIwLjE2NFYwSDQ3OC4xOFYzNi4zNTJaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNjU0LjU0IDQ3LjEwMzVINjExLjc4OEw1OTIuMzMyIDc0LjIzOTVMNTczLjM4OCA0Ny4xMDM1SDUyNy41NjRMNTY4Ljc4IDEwMy4xNjhMNTIzLjk4IDE2MS4yOEg1NjYuNzMyTDU4OS41MTYgMTMwLjMwNEw2MTIuMyAxNjEuMjhINjU4LjEyNEw2MTMuMDY4IDEwMS4zNzZMNjU0LjU0IDQ3LjEwMzVaXCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoICB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcclxuXHJcbiAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUFPVFhrMUc0dlA0ODNYdXU3Q0tuT2ltam1uVWdqWnh6Z1wiLFxyXG4gIGF1dGhEb21haW46IFwicmVtaXgtYmxvZy05MmM3ZC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwicmVtaXgtYmxvZy05MmM3ZFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicmVtaXgtYmxvZy05MmM3ZC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM5MTkwMjgyMDIxXCIsXHJcbiAgYXBwSWQ6IFwiMTozOTE5MDI4MjAyMTp3ZWI6NTMxNDA3N2Q2YzVmMzQ3MjhiMjRjY1wiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1SSzZIQ0ZWNFZaXCJcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcClcclxuXHJcbmV4cG9ydCB7IGF1dGggfSIsICIvLyBhcHAvc2Vzc2lvbnMuanNcclxuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9XHJcbiAgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xyXG4gICAgLy8gYSBDb29raWUgZnJvbSBgY3JlYXRlQ29va2llYCBvciB0aGUgQ29va2llT3B0aW9ucyB0byBjcmVhdGUgb25lXHJcbiAgICBjb29raWU6IHtcclxuICAgICAgICAvL2ZpcmViYXNlIHRva2VuXHJcbiAgICAgIG5hbWU6IFwiZmI6dG9rZW5cIixcclxuXHJcbiAgICAgIC8vIGFsbCBvZiB0aGVzZSBhcmUgb3B0aW9uYWxcclxuICAgICAgZXhwaXJlczogbmV3IERhdGUoRGF0ZS5ub3coKSArIDYwMCksXHJcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICBtYXhBZ2U6IDYwMCxcclxuICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxyXG4gICAgICBzZWNyZXRzOiBbXCJ0QGMwc1wiXSxcclxuICAgICAgc2VjdXJlOiB0cnVlXHJcbiAgICB9XHJcbiAgfSk7XHJcbiBcclxuZXhwb3J0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfTsiLCAiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2ZpcmViYXNlXCJcclxuaW1wb3J0IHsgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcIkBmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCBGb3JtLCB1c2VBY3Rpb25EYXRhLCBMaW5rLCBqc29uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9ucy5zZXJ2ZXJcIjtcclxuaW1wb3J0IGF1dGhTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2F1dGguY3NzXCI7XHJcblxyXG4vL2NyZWF0ZSBhIHN0eWxlc2hlZXQgcmVmIGZvciB0aGUgYXV0aC5jc3MgZmlsZSBcclxuZXhwb3J0IGxldCBsaW5rcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBbe3JlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGF1dGhTdHlsZXN9XVxyXG59XHJcbi8vIFRoaXMgd2lsbCBiZSB0aGUgc2FtZSBhcyBvdXIgU2lnbiBJbiBidXQgaXQgd2lsbCBzYXkgUmVnaXN0ZXIgYW5kIHVzZSBjcmVhdGVVc2VyIGluc3RlYWQgb2Ygc2lnbkluIFxyXG5cclxuICAgIGV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpO1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpXHJcblxyXG4gICAgICAgIC8vcGVyZm9ybSBhIHNpZ25vdXQgdG8gY2xlYXIgYW55IGFjdGl2ZSBzZXNzaW9uc1xyXG4gICAgICAgIGF3YWl0IGF1dGguc2lnbk91dCgpO1xyXG5cclxuICAgICAgICAvL3NldHVwIHVzZXIgZGF0YSBcclxuICAgICAgICBsZXQge3Nlc3Npb246IHNlc3Npb25EYXRhLCB1c2VyLCBlcnJvcjogc2lnblVwRXJyb3J9ID0gIGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcblxyXG4gICAgICAgIGlmICghc2lnblVwRXJyb3Ipe1xyXG4gICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcclxuICAgICAgICAgICAgc2Vzc2lvbi5zZXQoXCJhY2Nlc3NfdG9rZW5cIiwgYXV0aC5jdXJyZW50VXNlci5hY2Nlc3NfdG9rZW4pXHJcbiAgICAgICAgICAgIHJldHVybiByZWRpcmVjdChcIi9ibG9nc1wiLHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcGVyZm9ybSBmaXJlYmFzZSByZWdpc3RlciBcclxuICAgICAgICByZXR1cm4ge3VzZXIsIHNpZ25VcEVycm9yfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCl7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsb2dpbklucHV0XCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ5b3VAYXdlc29tZS5kZXZcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsb2dpbklucHV0XCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZGl0aW9uYWxMaW5rc1wiPlxyXG4gICAgICAgICAgICBBbHJlYWR5IFJlZ2lzdGVyZWQ/ICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvcnNcIj5cclxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvciA/IGFjdGlvbkRhdGE/LmVycm9yPy5tZXNzYWdlOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwganNvbiwgdXNlQWN0aW9uRGF0YSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkFjdGlvbnMgRGVtb1wiIH07XG59XG5cbi8vIFdoZW4geW91ciBmb3JtIHNlbmRzIGEgUE9TVCwgdGhlIGFjdGlvbiBpcyBjYWxsZWQgb24gdGhlIHNlcnZlci5cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2FjdGlvblxuLy8gLSBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvZGF0YS11cGRhdGVzXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBhbnN3ZXIgPSBmb3JtRGF0YS5nZXQoXCJhbnN3ZXJcIik7XG5cbiAgLy8gVHlwaWNhbCBhY3Rpb24gd29ya2Zsb3dzIHN0YXJ0IHdpdGggdmFsaWRhdGluZyB0aGUgZm9ybSBkYXRhIHRoYXQganVzdCBjYW1lXG4gIC8vIG92ZXIgdGhlIG5ldHdvcmsuIENsaWVudHNpZGUgdmFsaWRhdGlvbiBpcyBmaW5lLCBidXQgeW91IGRlZmluaXRlbHkgbmVlZCBpdFxuICAvLyBzZXJ2ZXIgc2lkZS4gIElmIHRoZXJlJ3MgYSBwcm9ibGVtLCByZXR1cm4gdGhlIHRoZSBkYXRhIGFuZCB0aGUgY29tcG9uZW50XG4gIC8vIGNhbiByZW5kZXIgaXQuXG4gIGlmICh0eXBlb2YgYW5zd2VyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGpzb24oXCJDb21lIG9uLCBhdCBsZWFzdCB0cnkhXCIsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBpZiAoYW5zd2VyICE9PSBcImVnZ1wiKSB7XG4gICAgcmV0dXJuIGpzb24oYFNvcnJ5LCAke2Fuc3dlcn0gaXMgbm90IHJpZ2h0LmAsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBpZiB0aGUgZGF0YSBpcyB2YWxpZCwgeW91J2xsIHR5cGljYWxseSB3cml0ZSB0byBhIGRhdGFiYXNlIG9yIHNlbmQgb3JcbiAgLy8gZW1haWwgb3IgbG9nIHRoZSB1c2VyIGluLCBldGMuIEl0J3MgcmVjb21tZW5kZWQgdG8gcmVkaXJlY3QgYWZ0ZXIgYVxuICAvLyBzdWNjZXNzZnVsIGFjdGlvbiwgZXZlbiBpZiBpdCdzIHRvIHRoZSBzYW1lIHBsYWNlIHNvIHRoYXQgbm9uLUphdmFTY3JpcHQgd29ya2Zsb3dzXG4gIC8vIGZyb20gdGhlIGJyb3dzZXIgZG9lc24ndCByZXBvc3QgdGhlIGRhdGEgaWYgdGhlIHVzZXIgY2xpY2tzIGJhY2suXG4gIHJldHVybiByZWRpcmVjdChcIi9kZW1vcy9jb3JyZWN0XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uc0RlbW8oKSB7XG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCN1c2VhY3Rpb25kYXRhXG4gIGxldCBhY3Rpb25NZXNzYWdlID0gdXNlQWN0aW9uRGF0YSgpO1xuICBsZXQgYW5zd2VyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIFRoaXMgZm9ybSB3b3JrcyB3aXRob3V0IEphdmFTY3JpcHQsIGJ1dCB3aGVuIHdlIGhhdmUgSmF2YVNjcmlwdCB3ZSBjYW4gbWFrZVxuICAvLyB0aGUgZXhwZXJpZW5jZSBiZXR0ZXIgYnkgc2VsZWN0aW5nIHRoZSBpbnB1dCBvbiB3cm9uZyBhbnN3ZXJzISBHbyBhaGVhZCwgZGlzYWJsZVxuICAvLyBKYXZhU2NyaXB0IGluIHlvdXIgYnJvd3NlciBhbmQgc2VlIHdoYXQgaGFwcGVucy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aW9uTWVzc2FnZSAmJiBhbnN3ZXJSZWYuY3VycmVudCkge1xuICAgICAgYW5zd2VyUmVmLmN1cnJlbnQuc2VsZWN0KCk7XG4gICAgfVxuICB9LCBbYWN0aW9uTWVzc2FnZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1peF9fcGFnZVwiPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMj5BY3Rpb25zITwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgZm9ybSBzdWJtaXNzaW9uIHdpbGwgc2VuZCBhIHBvc3QgcmVxdWVzdCB0aGF0IHdlIGhhbmRsZSBpbiBvdXJcbiAgICAgICAgICBgYWN0aW9uYCBleHBvcnQuIEFueSByb3V0ZSBjYW4gZXhwb3J0IGFuIGFjdGlvbiB0byBoYW5kbGUgZGF0YVxuICAgICAgICAgIG11dGF0aW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwicmVtaXhfX2Zvcm1cIj5cbiAgICAgICAgICA8aDM+UG9zdCBhbiBBY3Rpb248L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGk+V2hhdCBpcyBtb3JlIHVzZWZ1bCB3aGVuIGl0IGlzIGJyb2tlbj88L2k+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxkaXY+QW5zd2VyOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHJlZj17YW5zd2VyUmVmfSBuYW1lPVwiYW5zd2VyXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24+QW5zd2VyITwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHthY3Rpb25NZXNzYWdlID8gKFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxiPnthY3Rpb25NZXNzYWdlfTwvYj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8YXNpZGU+XG4gICAgICAgIDxoMz5BZGRpdGlvbmFsIFJlc291cmNlczwvaDM+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHdWlkZTp7XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vZ3VpZGVzL2RhdGEtd3JpdGVzXCI+RGF0YSBXcml0ZXM8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBBUEk6e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNhY3Rpb25cIj5cbiAgICAgICAgICAgICAgUm91dGUgQWN0aW9uIEV4cG9ydFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQVBJOntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjdXNlYWN0aW9uZGF0YVwiPlxuICAgICAgICAgICAgICA8Y29kZT51c2VBY3Rpb25EYXRhPC9jb2RlPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5pY2VXb3JrKCkge1xuICByZXR1cm4gPGgxPllvdSBnb3QgaXQgcmlnaHQhPC9oMT47XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2F0Y2gsIExpbmssIGpzb24sIHVzZUxvYWRlckRhdGEsIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQm91bmRhcmllcyBEZW1vXCIgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm91bmRhcmllcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlXCI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8YXNpZGU+XG4gICAgICAgIDxoMj5DbGljayB0aGVzZSBMaW5rczwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi5cIj5TdGFydCBvdmVyPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJvbmVcIj5cbiAgICAgICAgICAgICAgUGFyYW06IDxpPm9uZTwvaT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwidHdvXCI+XG4gICAgICAgICAgICAgIFBhcmFtOiA8aT50d288L2k+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cInRoaXMtcmVjb3JkLWRvZXMtbm90LWV4aXN0XCI+VGhpcyB3aWxsIGJlIGEgNDA0PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJzaGgtaXRzLWEtc2VjcmV0XCI+QW5kIHRoaXMgd2lsbCBiZSA0MDEgVW5hdXRob3JpemVkPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJrYWJvb21cIj5UaGlzIG9uZSB3aWxsIHRocm93IGFuIGVycm9yPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm91bmRhcmllcygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPlBhcmFtczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiB5b3UgbmFtZSBhIHJvdXRlIHNlZ21lbnQgd2l0aCAkIGxpa2V7XCIgXCJ9XG4gICAgICAgIDxjb2RlPnJvdXRlcy91c2Vycy8kdXNlcklkLmpzPC9jb2RlPiwgdGhlICQgc2VnbWVudCB3aWxsIGJlIHBhcnNlZCBmcm9tXG4gICAgICAgIHRoZSBVUkwgYW5kIHNlbnQgdG8geW91ciBsb2FkZXJzIGFuZCBhY3Rpb25zIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICA8L3A+XG4gICAgICA8aDI+RXJyb3JzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIGEgcm91dGUgdGhyb3dzIGFuZCBlcnJvciBpbiBpdCdzIGFjdGlvbiwgbG9hZGVyLCBvciBjb21wb25lbnQsXG4gICAgICAgIFJlbWl4IGF1dG9tYXRpY2FsbHkgY2F0Y2hlcyBpdCwgd29uJ3QgZXZlbiB0cnkgdG8gcmVuZGVyIHRoZSBjb21wb25lbnQsXG4gICAgICAgIGJ1dCBpdCB3aWxsIHJlbmRlciB0aGUgcm91dGUncyBFcnJvckJvdW5kYXJ5IGluc3RlYWQuIElmIHRoZSByb3V0ZVxuICAgICAgICBkb2Vzbid0IGhhdmUgb25lLCBpdCB3aWxsIGJ1YmJsZSB1cCB0byB0aGUgcm91dGVzIGFib3ZlIGl0IHVudGlsIGl0IGhpdHNcbiAgICAgICAgdGhlIHJvb3QuXG4gICAgICA8L3A+XG4gICAgICA8cD5TbyBiZSBhcyBncmFudWxhciBhcyB5b3Ugd2FudCB3aXRoIHlvdXIgZXJyb3IgaGFuZGxpbmcuPC9wPlxuICAgICAgPGgyPk5vdCBGb3VuZDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgKGFuZCBvdGhlcntcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvU3RhdHVzI2NsaWVudF9lcnJvcl9yZXNwb25zZXNcIj5cbiAgICAgICAgICBjbGllbnQgZXJyb3JzXG4gICAgICAgIDwvYT5cbiAgICAgICAgKVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIExvYWRlcnMgYW5kIEFjdGlvbnMgY2FuIHRocm93IGEgPGNvZGU+UmVzcG9uc2U8L2NvZGU+IGluc3RlYWQgb2YgYW5cbiAgICAgICAgZXJyb3IgYW5kIFJlbWl4IHdpbGwgcmVuZGVyIHRoZSBDYXRjaEJvdW5kYXJ5IGluc3RlYWQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgVGhpcyBpcyBncmVhdCB3aGVuIGxvYWRpbmcgZGF0YSBmcm9tIGEgZGF0YWJhc2UgaXNuJ3QgZm91bmQuIEFzIHNvb24gYXNcbiAgICAgICAgeW91IGtub3cgeW91IGNhbid0IHJlbmRlciB0aGUgY29tcG9uZW50IG5vcm1hbGx5LCB0aHJvdyBhIDQwNCByZXNwb25zZVxuICAgICAgICBhbmQgc2VuZCB5b3VyIGFwcCBpbnRvIHRoZSBjYXRjaCBib3VuZGFyeS4gSnVzdCBsaWtlIGVycm9yIGJvdW5kYXJpZXMsXG4gICAgICAgIGNhdGNoIGJvdW5kYXJpZXMgYnViYmxlLCB0b28uXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2F0Y2gsIExpbmssIGpzb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuLy8gVGhlIGAkYCBpbiByb3V0ZSBmaWxlbmFtZXMgYmVjb21lcyBhIHBhdHRlcm4gdGhhdCdzIHBhcnNlZCBmcm9tIHRoZSBVUkwgYW5kXG4vLyBwYXNzZWQgdG8geW91ciBsb2FkZXJzIHNvIHlvdSBjYW4gbG9vayB1cCBkYXRhLlxuLy8gLSBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyLXBhcmFtc1xuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICAvLyBwcmV0ZW5kIGxpa2Ugd2UncmUgdXNpbmcgcGFyYW1zLmlkIHRvIGxvb2sgc29tZXRoaW5nIHVwIGluIHRoZSBkYlxuXG4gIGlmIChwYXJhbXMuaWQgPT09IFwidGhpcy1yZWNvcmQtZG9lcy1ub3QtZXhpc3RcIikge1xuICAgIC8vIElmIHRoZSByZWNvcmQgZG9lc24ndCBleGlzdCB3ZSBjYW4ndCByZW5kZXIgdGhlIHJvdXRlIG5vcm1hbGx5LCBzb1xuICAgIC8vIGluc3RlYWQgd2UgdGhyb3cgYSA0MDQgcmVwb25zZSB0byBzdG9wIHJ1bm5pbmcgY29kZSBoZXJlIGFuZCBzaG93IHRoZVxuICAgIC8vIHVzZXIgdGhlIGNhdGNoIGJvdW5kYXJ5LlxuICAgIHRocm93IG5ldyBSZXNwb25zZShcIk5vdCBGb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xuICB9XG5cbiAgLy8gbm93IHByZXRlbmQgbGlrZSB0aGUgcmVjb3JkIGV4aXN0cyBidXQgdGhlIHVzZXIganVzdCBpc24ndCBhdXRob3JpemVkIHRvXG4gIC8vIHNlZSBpdC5cbiAgaWYgKHBhcmFtcy5pZCA9PT0gXCJzaGgtaXRzLWEtc2VjcmV0XCIpIHtcbiAgICAvLyBBZ2Fpbiwgd2UgY2FuJ3QgcmVuZGVyIHRoZSBjb21wb25lbnQgaWYgdGhlIHVzZXIgaXNuJ3QgYXV0aG9yaXplZC4gWW91XG4gICAgLy8gY2FuIGV2ZW4gcHV0IGRhdGEgaW4gdGhlIHJlc3BvbnNlIHRoYXQgbWlnaHQgaGVscCB0aGUgdXNlciByZWN0aWZ5IHRoZVxuICAgIC8vIGlzc3VlISBMaWtlIGVtYWlsaW5nIHRoZSB3ZWJtYXN0ZXIgZm9yIGFjY2VzcyB0byB0aGUgcGFnZS4gKE9oLCByaWdodCxcbiAgICAvLyBganNvbmAgaXMganVzdCBhIFJlc3BvbnNlIGhlbHBlciB0aGF0IG1ha2VzIGl0IGVhc2llciB0byBzZW5kIEpTT05cbiAgICAvLyByZXNwb25zZXMpLlxuICAgIHRocm93IGpzb24oeyB3ZWJtYXN0ZXJFbWFpbDogXCJoZWxsb0ByZW1peC5ydW5cIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgLy8gU29tZXRpbWVzIHlvdXIgY29kZSBqdXN0IGJsb3dzIHVwIGFuZCB5b3UgbmV2ZXIgYW50aWNpcGF0ZWQgaXQuIFJlbWl4IHdpbGxcbiAgLy8gYXV0b21hdGljYWxseSBjYXRjaCBpdCBhbmQgc2VuZCB0aGUgVUkgdG8gdGhlIGVycm9yIGJvdW5kYXJ5LlxuICBpZiAocGFyYW1zLmlkID09PSBcImthYm9vbVwiKSB7XG4gICAgbG9sKCk7XG4gIH1cblxuICAvLyBidXQgb3RoZXJ3aXNlIHRoZSByZWNvcmQgd2FzIGZvdW5kLCB1c2VyIGhhcyBhY2Nlc3MsIHNvIHdlIGNhbiBkbyB3aGF0ZXZlclxuICAvLyBlbHNlIHdlIG5lZWRlZCB0byBpbiB0aGUgbG9hZGVyIGFuZCByZXR1cm4gdGhlIGRhdGEuIChUaGlzIGlzIGJvcmluZywgd2UncmVcbiAgLy8ganVzdCBnb25uYSByZXR1cm4gdGhlIHBhcmFtcy5pZCkuXG4gIHJldHVybiB7IHBhcmFtOiBwYXJhbXMuaWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmFtRGVtbygpIHtcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPGgxPlxuICAgICAgVGhlIHBhcmFtIGlzIDxpIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PntkYXRhLnBhcmFtfTwvaT5cbiAgICA8L2gxPlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjY2F0Y2hib3VuZGFyeVxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWNhdGNoXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvZ3VpZGVzL25vdC1mb3VuZFxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8uXG4gICAgICAgICAgTWF5YmUgYXNrIHRoZSB3ZWJtYXN0ZXIgKHtjYXVnaHQuZGF0YS53ZWJtYXN0ZXJFbWFpbH0pIGZvciBhY2Nlc3MuXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Mb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0IVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+T29wcyE8L2gyPlxuICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgPHA+XG4gICAgICAgIChJc24ndCBpdCBjb29sIHRoYXQgdGhlIHVzZXIgZ2V0cyB0byBzdGF5IGluIGNvbnRleHQgYW5kIHRyeSBhIGRpZmZlcmVudFxuICAgICAgICBsaW5rIGluIHRoZSBwYXJ0cyBvZiB0aGUgVUkgdGhhdCBkaWRuJ3QgYmxvdyB1cD8pXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvZ3VpZGVzL25vdC1mb3VuZFxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+RXJyb3IhPC9oMj5cbiAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICAoSXNuJ3QgaXQgY29vbCB0aGF0IHRoZSB1c2VyIGdldHMgdG8gc3RheSBpbiBjb250ZXh0IGFuZCB0cnkgYSBkaWZmZXJlbnRcbiAgICAgICAgbGluayBpbiB0aGUgcGFydHMgb2YgdGhlIFVJIHRoYXQgZGlkbid0IGJsb3cgdXA/KVxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgbGV0IG1ldGEgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YSA/IGBQYXJhbTogJHtkYXRhLnBhcmFtfWAgOiBcIk9vcHMuLi5cIixcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L3V0aWxzL2ZpcmViYXNlXCJcclxuaW1wb3J0IHsgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCB9IGZyb20gXCJAZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCwgRm9ybSwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgYXV0aFN0eWxlcyBmcm9tIFwifi9zdHlsZXMvYXV0aC5jc3NcIjtcclxuXHJcbi8vY3JlYXRlIGEgc3R5bGVzaGVldCByZWYgZm9yIHRoZSBhdXRoLmNzcyBmaWxlIFxyXG5leHBvcnQgbGV0IGxpbmtzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFt7cmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogYXV0aFN0eWxlc31dXHJcbn1cclxuICAgIGV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgICAgICAgLy8gcHVsbCBpbiB0aGUgZm9ybSBkYXRhIGZyb20gdGhlIHJlcXVlc3QgYWZ0ZXIgdGhlIGZvcm0gaXMgc3VibWl0dGVkXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIik7XHJcblxyXG4gICAgICAgIC8vIHBlcmZvcm0gZmlyZWJhc2Ugc2VuZCBwYXNzd29yZCByZXNldCBlbWFpbCBcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnIubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VjY2Vzcywgc2VuZCB1c2VyIHRvIC9sb2dpbiBwYWdlXHJcbiAgICAgICAgcmV0dXJuIHJlZGlyZWN0KCcvbG9naW4nKVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhUaXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+Rm9yZ290IFBhc3N3b3JkPzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5FbnRlciB0aGUgZW1haWwgYWRkcmVzcyBhc3NvY2lhdGVkIHdpdGggeW91ciBhY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImxvZ2luSW5wdXRcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdUBhd2Vzb21lLmRldlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkaXRpb25hbExpbmtzXCI+XHJcbiAgICAgICAgICAgIE5vdCBZZXQgUmVnaXN0ZXJlZD8gIDxMaW5rIHRvPVwiL2F1dGgvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgcmVkaXJlY3QsIGpzb24gfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xyXG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSBcIn4vcG9zdFwiO1xyXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucy5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucy5zZXJ2ZXInO1xyXG5pbXBvcnQgcG9zdFN0eWxlcyBmcm9tIFwifi9zdHlsZXMvcG9zdHMuY3NzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxpbmtzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFt7cmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcG9zdFN0eWxlc31dXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gKHtwYXJhbXN9KSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0UG9zdChwYXJhbXMuc2x1Zyk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XHJcbiAgICBsZXQgcG9zdCA9IHVzZUxvYWRlckRhdGEoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0RGlzcGxheVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0Lmh0bWx9fS8+XHJcbiAgICApXHJcbn0iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB7IG1hcmtlZCB9IGZyb20gXCJtYXJrZWRcIjtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdChzbHVnKXtcclxuICAgIC8vc2V0dXAgb3VyIHByaXNtYSBjb25uZWN0aW9uXHJcbiAgICBhd2FpdCBwcmlzbWEuJGNvbm5lY3QoKTtcclxuXHJcbiAgICAvLyB3ZSB3aWxsIGZpbmQgdGhlIGZpcnN0IGRhdGFiYXNlIGVudHJ5IHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNsdWdcclxuICAgY29uc3QgZm91bmRTbHVnID0gYXdhaXQgcHJpc21hLnBvc3RzLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgc2x1Zzogc2x1Z1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBsZXQgaWQgPSBmb3VuZFNsdWcuaWRcclxuICAgIC8vbGV0J3MgZXh0cmFjdCB0aGUgdGl0bGUgXHJcbiAgICBsZXQgdGl0bGUgPSBmb3VuZFNsdWcudGl0bGU7XHJcbiAgICAvLyB1c2luZyBtYXJrZWQsIHdlIGFyZSBnb2luZyB0byBjb252ZXJ0IHRoZSBtYXJrZG93biBpbnRvIEhUTUwgc28gdGhlIGJsb2cgcG9zdCBjYW4gcmVuZGVyIGFzIGVudGVyZWQgaW4gTWFya2Rvd24uIFxyXG4gICAgbGV0IGh0bWwgPSBtYXJrZWQoZm91bmRTbHVnLm1hcmtkb3duKVxyXG4gICAgLy8gd2UgbmVlZCB0byBjbGVhbnVwIG91ciBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbiAgICBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHJcbiAgICAvLyBsZXQncyBzZW5kIGJhY2sgdGhlIHNsdWcsIHRoZSB0aXRsZSwgYW5kIG91ciBtYXJrZG93biBjb252ZXJ0ZWQgdG8gaHRtbCBcclxuICAgIHJldHVybiB7IGlkLCBzbHVnLCB0aXRsZSwgaHRtbH07XHJcbn1cclxuXHJcbi8vd2hlbiB3ZSBlZGl0IHRoZSBwb3N0IHdlIHdhbnQgdG8gcmV0dXJuIGRpZmZlcmVudCBkYXRhIGluY2x1ZGluZyB0aGUgSUQgZmllbGRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RFZGl0KHNsdWcpe1xyXG4gICAgLy9zZXR1cCBvdXIgcHJpc21hIGNvbm5lY3Rpb25cclxuICAgIGF3YWl0IHByaXNtYS4kY29ubmVjdCgpO1xyXG5cclxuICAgIC8vIHdlIHdpbGwgZmluZCB0aGUgZmlyc3QgZGF0YWJhc2UgZW50cnkgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2x1Z1xyXG4gICBjb25zdCBmb3VuZFNsdWcgPSBhd2FpdCBwcmlzbWEucG9zdHMuZmluZEZpcnN0KHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBzbHVnOiBzbHVnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGxldCBpZCA9IGZvdW5kU2x1Zy5pZFxyXG4gICAgLy9sZXQncyBleHRyYWN0IHRoZSB0aXRsZSBcclxuICAgIGxldCB0aXRsZSA9IGZvdW5kU2x1Zy50aXRsZTtcclxuICAgIC8vIHNpbmNlIHdlIGFyZSBlZGl0aW5nIGFuZCBub3QgcmVuZGVyaW5nIHdlIHdhbnQgdG8gcHVsbCB0aGUgb3JpZ2luYWwgbWFya2Rvd24gdmFsdWUgc3RvcmVkIGluIHRoZSBkYlxyXG4gICAgbGV0IG1hcmtkb3duID0gZm91bmRTbHVnLm1hcmtkb3duXHJcbiAgICAvLyB3ZSBuZWVkIHRvIGNsZWFudXAgb3VyIGRhdGFiYXNlIGNvbm5lY3Rpb25cclxuICAgIHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cclxuICAgIC8vIGxldCdzIHNlbmQgYmFjayB0aGUgc2x1ZywgdGhlIHRpdGxlLCBhbmQgb3VyIG1hcmtkb3duIGNvbnZlcnRlZCB0byBodG1sIFxyXG4gICAgcmV0dXJuIHsgaWQsIHNsdWcsIHRpdGxlLCBtYXJrZG93bn07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3Qpe1xyXG4gICAgLy9QcmlzbWEgY29ubmVjdGlvbiBcclxuICAgIGF3YWl0IHByaXNtYS4kY29ubmVjdCgpXHJcbiAgICAvLyBwcmlzbWEgY3JlYXRlXHJcbiAgICBhd2FpdCBwcmlzbWEucG9zdHMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxyXG4gICAgICAgICAgICBzbHVnOiBwb3N0LnNsdWcsXHJcbiAgICAgICAgICAgIG1hcmtkb3duOiBwb3N0Lm1hcmtkb3duXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBjbGVhbnVwIHByaXNtYSBjb25uZWN0aW9uIFxyXG4gICAgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAvLyBsZXQncyBzZW5kIGJhY2sgdGhlIHNsdWcgd2UgY3JlYXRlZFxyXG4gICAgcmV0dXJuIGdldFBvc3QocG9zdC5zbHVnKSAgICBcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBvc3QocG9zdCl7XHJcbiAgICAvL1ByaXNtYSBjb25uZWN0aW9uIFxyXG4gICAgYXdhaXQgcHJpc21hLiRjb25uZWN0KClcclxuICAgIC8vIHByaXNtYSBjcmVhdGVcclxuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVQb3N0IGlkJywgcG9zdC5pZClcclxuICAgIGF3YWl0IHByaXNtYS5wb3N0cy51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGlkOiBwb3N0LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxyXG4gICAgICAgICAgICBzbHVnOiBwb3N0LnNsdWcsXHJcbiAgICAgICAgICAgIG1hcmtkb3duOiBwb3N0Lm1hcmtkb3duXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBjbGVhbnVwIHByaXNtYSBjb25uZWN0aW9uIFxyXG4gICAgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAvLyBsZXQncyBzZW5kIGJhY2sgdGhlIHNsdWcgd2UgY3JlYXRlZFxyXG4gICAgcmV0dXJuIGdldFBvc3QocG9zdC5zbHVnKSAgICBcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3QocG9zdCl7XHJcbiAgICBhd2FpdCBwcmlzbWEuJGNvbm5lY3QoKVxyXG4gICAgYXdhaXQgcHJpc21hLnBvc3RzLmRlbGV0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogcG9zdFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICByZXR1cm4ocG9zdCk7XHJcbn1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIHNpbmNlIHdlIHdpbGwgYmUgbG9hZGluZyBleHRlcm5hbCBkYXRhXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpe1xyXG4vLyBhd2FpdCBwcmlzbWEgY29ubmVjdGlvblxyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kY29ubmVjdCgpXHJcbi8vIGxldCdzIGdyYWIgYWxsIHBvc3RzIHVzaW5nIGZpbmRNYW55KClcclxuLy8gdGhlIHBvc3RzIGluIHByaXNtYS5wb3N0cyBpcyB0aGUgY29sbGVjdGlvbiB3ZSBjcmVhdGVkIGluIE1vbmdvLmRiXHJcbiAgICAgICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBwcmlzbWEucG9zdHMuZmluZE1hbnkoKTtcclxuLy8gbGV0J3MgY2xlYW51cCBvdXIgY29ubmVjdGlvblxyXG4gICAgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAgICAgLy8gbGV0J3Mgc2VlIHdoYXQgd2UgYXJlIHJldHVybmluZ1xyXG4gICAgIC8vICBjb25zb2xlLmxvZyhhbGxQb3N0cylcclxuICAgICAgICByZXR1cm4gYWxsUG9zdHM7XHJcbn0iLCAiaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICd+L3Bvc3QnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCwganNvbiB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHBvc3RTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL3Bvc3RzLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucy5zZXJ2ZXInO1xyXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9ucy5zZXJ2ZXInO1xyXG5leHBvcnQgbGV0IGxpbmtzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFt7cmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcG9zdFN0eWxlc31dXHJcbn1cclxuLy8gb24gbG9hZCByZW1peCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4sIGlmIG5vdCBpdCB3aWxsIHNlbmQgdGhlbSB0byBsb2dpbiBwYWdlIHRvIHByZXZlbnQgdW5hdXRob3JpemVkIGFjY2Vzc1xyXG4vLyBpZiB0aGUgdXNlciBpcyBmb3VuZCBpdCB3aWxsIGdldFBvc3RzKCkgYW5kIHJlbmRlciBjb3JyZWN0bHkuIFxyXG5leHBvcnQgbGV0IGxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiBnZXRQb3N0cygpO1xyXG5cclxufVxyXG5cclxuLy8gb3VyIFBvc3RzIGZ1bmN0aW9uIHdoaWNoIHdpbGwgcmV0dXJuIHRoZSByZW5kZXJlZCBjb21wb25lbnQgb24gdGhlIHBhZ2UgLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpIHtcclxuICAgIGxldCBwb3N0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPk15IFJlbWl4IEJsb2c8L2gxPlxyXG4gICAgICAgICAgICA8cD5DbGljayBvbiB0aGUgcG9zdCBuYW1lIHRvIHJlYWQgdGhlIHBvc3Q8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiPkJsb2cgQWRtaW4gKEVkaXQvQ3JlYXRlKTwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RMaXN0XCIga2V5PXtwb3N0LnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJwb3N0VGl0bGVcIiB0bz17cG9zdC5zbHVnfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZGVtb3MvYWJvdXQuY3NzXCI7XG5cbmV4cG9ydCBsZXQgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJBYm91dCBSZW1peFwiXG4gIH07XG59O1xuXG5leHBvcnQgbGV0IGxpbmtzID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW50cm9cIj5cbiAgICAgICAgPGgyPkFib3V0IFVzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT2ssIHNvIHRoaXMgcGFnZSBpc24ndCByZWFsbHkgPGVtPmFib3V0IHVzPC9lbT4sIGJ1dCB3ZSBkaWQgd2FudCB0b1xuICAgICAgICAgIHNob3cgeW91IGEgZmV3IG1vcmUgdGhpbmdzIFJlbWl4IGNhbiBkby5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEaWQgeW91IG5vdGljZSB0aGF0IHRoaW5ncyBsb29rIGEgbGl0dGxlIGRpZmZlcmVudCBvbiB0aGlzIHBhZ2U/IFRoZVxuICAgICAgICAgIENTUyB0aGF0IHdlIGltcG9ydCBpbiB0aGUgcm91dGUgZmlsZSBhbmQgaW5jbHVkZSBpbiBpdHN7XCIgXCJ9XG4gICAgICAgICAgPGNvZGU+bGlua3M8L2NvZGU+IGV4cG9ydCBpcyBvbmx5IGluY2x1ZGVkIG9uIHRoaXMgcm91dGUgYW5kIGl0c1xuICAgICAgICAgIGNoaWxkcmVuLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdhaXQgYSBzZWMuLi48ZW0+aXRzIGNoaWxkcmVuPC9lbT4/IFRvIHVuZGVyc3RhbmQgd2hhdCB3ZSBtZWFuIGJ5XG4gICAgICAgICAgdGhpcyx7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFsLzQtbmVzdGVkLXJvdXRlcy1wYXJhbXNcIj5cbiAgICAgICAgICAgIHJlYWQgYWxsIGFib3V0IG5lc3RlZCByb3V0ZXMgaW4gdGhlIGRvY3NcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgYXJlIGxvb2tpbmcgYXQgdGhlIGluZGV4IHJvdXRlIGZvciB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBVUkxcbiAgICAgICAgc2VnbWVudCwgYnV0IHRoZXJlIGFyZSBuZXN0ZWQgcm91dGVzIGFzIHdlbGwhXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICA8TGluayB0bz1cIndob2FcIj5DaGVjayBvdXQgb25lIG9mIHRoZW0gaGVyZS48L0xpbms+XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFdob2EsIHRoaXMgaXMgYSBuZXN0ZWQgcm91dGUhIFdlIHJlbmRlciB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBsYXlvdXRcbiAgICAgICAgcm91dGUgY29tcG9uZW50LCBhbmQgaXRzIDxjb2RlPk91dGxldDwvY29kZT4gcmVuZGVycyBvdXIgcm91dGVcbiAgICAgICAgY29tcG9uZW50LiBcdUQ4M0VcdUREMkZcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIDxMaW5rIHRvPVwiLi5cIj5cbiAgICAgICAgICAgIEdvIGJhY2sgdG8gdGhlIDxjb2RlPi9hYm91dDwvY29kZT4gaW5kZXguXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQsIExpbmssIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0LCBqc29uIH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gXCJ+L3Bvc3RcIjtcclxuaW1wb3J0IGFkbWluU3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9hZG1pbi5jc3NcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMuc2VydmVyJztcclxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbnMuc2VydmVyJztcclxuXHJcblxyXG4vL2NyZWF0ZSBhIHN0eWxlc2hlZXQgcmVmIGZvciB0aGUgYWRtaW4uY3NzIGZpbGUgXHJcbmV4cG9ydCBsZXQgbGlua3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gW3tyZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhZG1pblN0eWxlc31dXHJcbn1cclxuXHJcbi8vIHRoaXMgaXMgdGhlIHNhbWUgbG9hZGVyIGZ1bmN0aW9uIGZyb20gb3VyIEJsb2dzIHBhZ2VcclxuLy8gY2hlY2sgZm9yIGV4aXN0aW5nIHVzZXIsIGlmIG5vdCB0aGVuIHJlZGlyZWN0IHRvIGxvZ2luLCBvdGhlcndpc2Ugc2V0IGNvb2tpZSBhbmQgZ2V0UG9zdHMoKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcmVxdWVzdCB9KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihcclxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24uaGFzKFwiYWNjZXNzX3Rva2VuXCIpKSB7XHJcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgIH0gXHJcbiAgXHJcbiAgICBjb25zdCBkYXRhID0geyBlcnJvcjogc2Vzc2lvbi5nZXQoXCJlcnJvclwiKSB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIGpzb24oZGF0YSwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbilcclxuICAgICAgfVxyXG4gICAgfSksIGdldFBvc3RzKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcclxuICAgIGxldCBwb3N0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pblwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWRtaW5UaXRsZVwiPkFkbWluPC9oMT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgIDxwPkNsaWNrIG9uIGEgcG9zdCB0byBlZGl0IHRoZSBibG9nIHBvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwb3N0LnNsdWd9Pntwb3N0LnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogT3V0bGV0IHJlbmRlcnMgdGhlIC9hZG1pbi9pbmRleC5qc3ggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcclxuaW1wb3J0IHsgZ2V0UG9zdEVkaXQsIHVwZGF0ZVBvc3QsIGRlbGV0ZVBvc3QgfSBmcm9tIFwifi9wb3N0XCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCBGb3JtLCB1c2VBY3Rpb25EYXRhLCB1c2VUcmFuc2l0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyh7cGFyYW1zfSkgPT4ge1xyXG4gICAgaW52YXJpYW50KHBhcmFtcy5lZGl0LCBcImV4cGVjdGVkIHBhcmFtcy5lZGl0XCIpO1xyXG4gICAgcmV0dXJuIGdldFBvc3RFZGl0KHBhcmFtcy5lZGl0KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gXHJcbiAgICBsZXQgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcclxuICAgIGxldCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKVxyXG4gICAgbGV0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIilcclxuICAgIGxldCBpZCA9IGZvcm1EYXRhLmdldChcImlkXCIpO1xyXG4gICAgaWYgKHJlcXVlc3QubWV0aG9kID09ICdERUxFVEUnKXtcclxuICAgICAgICBhd2FpdCBkZWxldGVQb3N0KGlkKVxyXG4gICAgICAgIHJldHVybiByZWRpcmVjdChcIi9hZG1pblwiKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBlcnJvcnMgPSB7fTtcclxuICAgIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XHJcbiAgICBpZiAoIXNsdWcpIGVycm9ycy5zbHVnID0gdHJ1ZTtcclxuICAgIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XHJcbiAgICBcclxuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlUG9zdCh7aWQsIHRpdGxlLCBzbHVnLCBtYXJrZG93bn0pO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2FkbWluXCIpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcclxuICAgIGxldCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XHJcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcclxuICAgIGxldCBwb3N0ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImhpZGRlbkJsb2dJRFwiIG5hbWU9XCJpZFwiIGRlZmF1bHRWYWx1ZT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3QgVGl0bGU6IHtcIiBcIn0ge2Vycm9ycz8udGl0bGUgJiYgPGVtPlRpdGxlIGlzIHJlcXVpcmVkPC9lbT59IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGRlZmF1bHRWYWx1ZT17cG9zdC50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPiBQb3N0IFNsdWc6IHtcIiBcIn0ge2Vycm9ycz8uc2x1ZyAmJiA8ZW0+U2x1ZyBpcyByZXF1aXJlZDwvZW0+fSBcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3Bvc3Quc2x1Z30gaWQ9XCJzbHVnSW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzbHVnXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXJrZG93blwiPk1hcmtkb3duOjwvbGFiZWw+e1wiIFwifSB7ZXJyb3JzPy5tYXJrZG93biAmJiA8ZW0+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2VtPn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBkZWZhdWx0VmFsdWU9e3Bvc3QubWFya2Rvd259IG5hbWU9XCJtYXJrZG93blwiIGlkPVwiXCIgcm93cz17MjB9IGNvbHM9ezUwfS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhZG1pbkJ1dHRvbiB1cGRhdGVCdXR0b25cIj57dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJVcGRhdGluZy4uLlwiIDogXCJVcGRhdGUgUG9zdFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaGlkZGVuQmxvZ0lEXCIgbmFtZT1cImlkXCIgZGVmYXVsdFZhbHVlPXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZG1pbkJ1dHRvbiBkZWxldGVCdXR0b25cIiB0eXBlPVwic3VibWl0XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5JbmRleCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW5OZXdQb3N0TGlua1wiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIm5ld1wiPiA8YnV0dG9uIGNsYXNzTmFtZT1cImFkbWluTmV3UG9zdEJ1dHRvblwiPkNyZWF0ZSBhIE5ldyBQb3N0PC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICApXHJcbn0iLCAiaW1wb3J0IHsgaXNFcnJvclJlc3BvbnNlIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvZGF0YVwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCwgRm9ybSwgdXNlQWN0aW9uRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQb3N0IH0gZnJvbSBcIn4vcG9zdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XHJcbiAgICBsZXQgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIilcclxuICAgIGxldCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpXHJcblxyXG4gICAgbGV0IGVycm9ycyA9IHt9O1xyXG4gICAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcclxuICAgIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlO1xyXG4gICAgaWYgKCFtYXJrZG93bikgZXJyb3JzLm1hcmtkb3duID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBjcmVhdGVQb3N0KHt0aXRsZSwgc2x1ZywgbWFya2Rvd259KTtcclxuXHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvYWRtaW5cIilcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XHJcbiAgICAvLyBwdWxsIGluIGVycm9ycyBmcm9tIG91ciBhY3Rpb24gdXNpbmcgdGhlIHVzZUFjdGlvbkRhdGEoKSBob29rXHJcbiAgICBsZXQgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xyXG4gICAgLy8gdHJhbnNpdGlvbiB3aWxsIGFsbG93IHVzIHRvIGNyZWF0ZSBhIGJldHRlciB1c2VyIGV4cGVyaWVuY2UgYnkgdXBkYXRpbmcgdGhlIHRleHQgb2YgdGhlIHN1Ym1pdCBidXR0b24gd2hpbGUgY3JlYXRpbmcgdGhlIGJsb2cgcG9zdFxyXG4gICAgbGV0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XHJcbiAgICAvLyB3ZSBhcmUgZ29pbmcgdG8gY3JlYXRlIHRoZSBzbHVnIGZvciB0aGUgdXNlclxyXG4gICAgbGV0IHNsdWcgPSAnJ1xyXG5cclxuICAgIC8vIGFzIHRoZSBUaXRsZSBpbnB1dCBpcyB1cGRhdGVkIHdlIHdpbGwgZ2VuZXJhdGUgdGhlIHNsdWcgYXV0b21hdGljYWxseS4gXHJcbiAgICAvLyBNeSBGaXJzdCBQb3N0IHNsdWcgd291bGQgZXF1YWwgJ215LWZpcnN0LXBvc3QnLiBXZSB3aWxsIGNvbnZlcnQgdG8gbG93ZXIgY2FzZSBhbmQgd2Ugd2lsbCBzdHJpcCBzcGFjZXMgYW5kIHJlcGxhY2Ugd2l0aCBoeXBoZW5zIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+e1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZS50YXJnZXQudmFsdWUgXHJcbiAgICAgICAgLy8gdXNpbmcgcmVnZXggYW5kIHJlcGxhY2UsIGxldCdzIGNvbnZlcnQgc3BhY2VzIHRvIGRhc2hlc1xyXG4gICAgICAgc2x1ZyA9IHRleHQucmVwbGFjZSgvXFxzL2cgLCAnLScpO1xyXG4gICAgICAgLy8gbGV0cyBzZXQgdGhlIHZhbHVlIG9mIHRoZSBzbHVnIHRleHQgYm94IHRvIGJlIG91ciBuZXcgc2x1ZyBpbiBsb3dlcmNhc2UgXHJcbiAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsdWdJbnB1dFwiKS52YWx1ZSA9IHNsdWcudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICBQb3N0IFRpdGxlOiB7XCIgXCJ9IHtlcnJvcnM/LnRpdGxlICYmIDxlbT5UaXRsZSBpcyByZXF1aXJlZDwvZW0+fSA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIi8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+IFBvc3QgU2x1Zzoge1wiIFwifSB7ZXJyb3JzPy5zbHVnICYmIDxlbT5TbHVnIGlzIHJlcXVpcmVkPC9lbT59IFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPXtzbHVnfSBpZD1cInNsdWdJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNsdWdcIi8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1hcmtkb3duXCI+TWFya2Rvd246PC9sYWJlbD57XCIgXCJ9IHtlcnJvcnM/Lm1hcmtkb3duICYmIDxlbT5NYXJrZG93biBpcyByZXF1aXJlZDwvZW0+fSBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtYXJrZG93blwiIGlkPVwiXCIgcm93cz17MjB9IGNvbHM9ezMwfS8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJDcmVhdGluZy4uLlwiIDogXCJDcmVhdGUgUG9zdFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgIDwvRm9ybT5cclxuICApXHJcbn0gIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIGpzb24sIExpbmssICByZWRpcmVjdH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIn4vdXRpbHMvZmlyZWJhc2VcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zLnNlcnZlclwiO1xuaW1wb3J0IHsgZGVzdHJveVNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9ucy5zZXJ2ZXJcIjtcblxuLy8gdXNlIGxvYWRlciB0byBjaGVjayBmb3IgZXhpc3Rpbmcgc2Vzc2lvbiBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyByZXF1ZXN0IH0pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oXG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuICApO1xuICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uLmhhcyhcImFjY2Vzc190b2tlblwiKSlcblxuICBpZiAoc2Vzc2lvbi5oYXMoXCJhY2Nlc3NfdG9rZW5cIikpIHtcblxuICBjb25zdCBkYXRhID0geyB1c2VyOiBhdXRoLmN1cnJlbnRVc2VyLCBlcnJvcjogc2Vzc2lvbi5nZXQoXCJlcnJvclwiKSB9O1xuICByZXR1cm4ganNvbihkYXRhLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbilcbiAgICB9XG4gIH0pO1xufSBcbnJldHVybiBudWxsO1xufVxuXG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgbGV0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiUmVtaXggU3RhcnRlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlbGNvbWUgdG8gcmVtaXghXCJcbiAgfTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9yb3V0aW5nI2luZGV4LXJvdXRlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGxldCBncmVldGluZyA9IGRhdGE/LnVzZXI/LmVtYWlsID8gZGF0YS51c2VyLmVtYWlsIDogJ2ZyaWVuZCdcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlXCI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgyPldlbGNvbWUge2dyZWV0aW5nfSB0byBSZW1peCBCbG9nIEF1dGggVHV0b3JpYWwhPC9oMj5cbiAgICAgICAgPGgzPlRoaXMgYmxvZyB3YXMgY3JlYXRlZCBieSA8c3Ryb25nPkNocmlzIEJlbmphbWluPC9zdHJvbmc+PC9oMz5cbiAgICAgICAgPHA+VGhpcyB0dXRvcmlhbCB3aWxsIHNob3cgeW91IGhvdyBmaXJlYmFzZSBhdXRoZW50aWNhdGlvbiBmdW5jdGlvbmFsaXR5IHdvcmtzIGluIFJlbWl4PC9wPlxuICAgICAgPC9tYWluPlxuICAgICAgPGFzaWRlPlxuICAgICAgPGgzPlR1dG9yaWFsIExpbmtzPC9oMz5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2JlbmphbWluMjAwOS9yZW1peC1ibG9nLWZpcmViYXNlLWF1dGhcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRodWI8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2Rldi50by9jaHJpc2JlbmphbWluXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHV0b3JpYWw8L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGF1dGggfSBmcm9tIFwifi91dGlscy9maXJlYmFzZVwiXHJcbmltcG9ydCB7IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSBcIkBmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCBGb3JtLCBMaW5rLCBqc29uLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24gfSBmcm9tIFwifi9zZXNzaW9ucy5zZXJ2ZXJcIjtcclxuaW1wb3J0IGF1dGhTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2F1dGguY3NzXCI7XHJcblxyXG4vL2NyZWF0ZSBhIHN0eWxlc2hlZXQgcmVmIGZvciB0aGUgYXV0aC5jc3MgZmlsZSBcclxuZXhwb3J0IGxldCBsaW5rcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBbe3JlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGF1dGhTdHlsZXN9XVxyXG59XHJcbi8vIHVzZSBsb2FkZXIgdG8gY2hlY2sgZm9yIGV4aXN0aW5nIHNlc3Npb24sIGlmIGZvdW5kLCBzZW5kIHRoZSB1c2VyIHRvIHRoZSBibG9ncyBzaXRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyByZXF1ZXN0IH0pIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKFxyXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXHJcbiAgICApO1xyXG4gIFxyXG4gICAgaWYgKHNlc3Npb24uaGFzKFwiYWNjZXNzX3Rva2VuXCIpKSB7XHJcbiAgICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBibG9nIHBhZ2UgaWYgdGhleSBhcmUgYWxyZWFkeSBzaWduZWQgaW4uXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd1c2VyIGhhcyBleGlzdGluZyBjb29raWUnKVxyXG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ3NcIik7XHJcbiAgICB9IFxyXG4gIFxyXG4gICAgY29uc3QgZGF0YSA9IHsgZXJyb3I6IHNlc3Npb24uZ2V0KFwiZXJyb3JcIikgfTtcclxuICBcclxuICAgIHJldHVybiBqc29uKGRhdGEsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbi8vIG91ciBhY3Rpb24gZnVuY3Rpb24gd2lsbCBiZSBsYXVuY2hlZCB3aGVuIHRoZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWRcclxuLy8gdGhpcyB3aWxsIHNpZ24gaW4gb3VyIGZpcmViYXNlIHVzZXIgYW5kIGNyZWF0ZSBvdXIgc2Vzc2lvbiBhbmQgY29va2llIHVzaW5nIHVzZXIuZ2V0SURUb2tlbigpXHJcbiAgICBleHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgICAgICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKTtcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKVxyXG4gICAgICAgICAgICBjb25zdCB7dXNlciwgZXJyb3J9ID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAvLyBpZiBzaWduaW4gd2FzIHN1Y2Nlc3NmdWwgdGhlbiB3ZSBoYXZlIGEgdXNlclxyXG4gICAgICAgICAgICBpZiAoIHVzZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQncyBzZXR1cCB0aGUgc2Vzc2lvbiBhbmQgY29va2llIHd0aCB1c2VycyBpZFRva2VuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcclxuICAgICAgICAgICAgICAgIHNlc3Npb24uc2V0KFwiYWNjZXNzX3Rva2VuXCIsIGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpKVxyXG4gICAgICAgICAgICAgICAgLy8gbGV0J3Mgc2VuZCB0aGUgdXNlciB0byB0aGUgbWFpbiBwYWdlIGFmdGVyIGxvZ2luXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVkaXJlY3QoXCIvYWRtaW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geyB1c2VyLCBlcnJvcn1cclxuICAgICAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKXtcclxuICAgICAgICAvLyB0byB1c2Ugb3VyIGFjdGlvbkRhdGEgZXJyb3IgaW4gb3VyIGZvcm0sIHdlIG5lZWQgdG8gcHVsbCBpbiBvdXIgYWN0aW9uIGRhdGFcclxuICAgICAgICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoVGl0bGVcIj5cclxuICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5JbnB1dFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwieW91QGF3ZXNvbWUuZGV2XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5JbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRpdGlvbmFsTGlua3NcIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvYXV0aC9yZWdpc3RlclwiPlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9hdXRoL2ZvcmdvdFwiPkZvcmdvdCBQYXNzd29yZD88L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yc1wiPlxyXG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9yID8gYWN0aW9uRGF0YT8uZXJyb3I/Lm1lc3NhZ2U6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzVJbEM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3BEMUM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDaENqQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUlmLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssVUFBVSxRQUFRLFNBQVUsR0FBRztBQUMxQyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkNyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBRWIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsTUFBSSxTQUFTLGtDQUNYLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDakJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBV087Ozs7Ozs7OztBQ1hQO0FBQUEsaUJBQThCO0FBQzlCLGtCQUF5QjtBQUl6QixJQUFNLGlCQUFpQjtBQUFBLEVBQ3JCLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLG1CQUFtQjtBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLGVBQWU7QUFBQTtBQUdqQixJQUFNLE1BQU0sOEJBQWM7QUFFMUIsSUFBTSxPQUFPLHlCQUFROzs7QUREckIsb0JBQW9DOzs7QUVoQnBDO0FBQ0Esb0JBQTJDO0FBRTNDLElBQU0sRUFBRSxZQUFZLGVBQWUsbUJBQ2pDLDhDQUEyQjtBQUFBLEVBRXpCLFFBQVE7QUFBQSxJQUVOLE1BQU07QUFBQSxJQUdOLFNBQVMsSUFBSSxLQUFLLEtBQUssUUFBUTtBQUFBLElBQy9CLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFNBQVMsQ0FBQztBQUFBLElBQ1YsUUFBUTtBQUFBO0FBQUE7OztBRklQLElBQUksUUFBUSxNQUFNO0FBQ3ZCLFNBQU87QUFBQSxJQUNMLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQSxJQUMzQjtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBO0FBQUE7QUFBQTtBQU9iLHNCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxVQUFVLE1BQU0sV0FDcEIsUUFBUSxRQUFRLElBQUk7QUFHdEIsTUFBSSxRQUFRLElBQUksaUJBQWlCO0FBRWpDLFVBQU0sT0FBTyxFQUFFLE1BQU0sS0FBSyxhQUFhLE9BQU8sUUFBUSxJQUFJO0FBQzFELFdBQU8sd0JBQUssTUFBTTtBQUFBLE1BQ2hCLFNBQVM7QUFBQSxRQUNQLGNBQWMsTUFBTSxjQUFjO0FBQUE7QUFBQTtBQUFBLFNBR2pDO0FBRUwsV0FBTztBQUFBO0FBQUE7QUFJRixJQUFJLFNBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsUUFBTSxVQUFVLE1BQU0sV0FDcEIsUUFBUSxRQUFRLElBQUk7QUFHdEIsTUFBSSxRQUFRLElBQUksaUJBQWlCO0FBQ2pDLFdBQU8sNEJBQVMsS0FBSztBQUFBLE1BQ25CLFNBQVMsRUFBQyxjQUFjLE1BQU0sZUFBZTtBQUFBO0FBQUE7QUFHakQsT0FBSztBQUNMLFNBQU8sNEJBQVM7QUFBQTtBQUtELGVBQWU7QUFDNUIsU0FDRSxvQ0FBQyxVQUFELE1BQ0Usb0NBQUMsUUFBRCxNQUNFLG9DQUFDLHNCQUFEO0FBQUE7QUFPRCx1QkFBdUIsRUFBRSxTQUFTO0FBQ3ZDLFVBQVEsTUFBTTtBQUNkLFNBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVUsT0FBTTtBQUFBLEtBQ2Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQUksdUJBQ0osb0NBQUMsS0FBRCxNQUFJLE1BQU0sVUFDVixvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsS0FBRCxNQUFHO0FBQUE7QUFXTix5QkFBeUI7QUFDOUIsTUFBSSxTQUFTO0FBRWIsTUFBSTtBQUNKLFVBQVEsT0FBTztBQUFBLFNBQ1I7QUFDSCxnQkFDRSxvQ0FBQyxLQUFELE1BQUcsMkdBRStCLG9DQUFDLG9CQUFEO0FBQUEsUUFBTSxJQUFHO0FBQUEsU0FBUztBQUd0RDtBQUFBLFNBQ0c7QUFDSCxnQkFDRSxvQ0FBQyxLQUFELE1BQUc7QUFFTDtBQUFBO0FBR0EsWUFBTSxJQUFJLE1BQU0sT0FBTyxRQUFRLE9BQU87QUFBQTtBQUcxQyxTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLE9BQU8sR0FBRyxPQUFPLFVBQVUsT0FBTztBQUFBLEtBQzFDLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxNQUFELE1BQ0csT0FBTyxRQUFPLE1BQUcsT0FBTyxhQUUxQjtBQUFBO0FBTVQsa0JBQWtCLEVBQUUsVUFBVSxTQUFTO0FBQ3JDLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM3QixRQUFRLG9DQUFDLFNBQUQsTUFBUSxTQUFpQixNQUNsQyxvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRCxNQUNHLFVBQ0Qsb0NBQUMsaUNBQUQsT0FDQSxvQ0FBQyx1QkFBRCxPQUMyQyxvQ0FBQywwQkFBRDtBQUFBO0FBTW5ELGdCQUFnQixFQUFFLFlBQVk7QUFHNUIsTUFBSSxPQUFPO0FBRVgsTUFBSSxXQUFXLDZCQUFNO0FBRXJCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSSxPQUFNO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDbkMsb0NBQUMsV0FBRCxRQUVGLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLGNBQVc7QUFBQSxJQUFrQixXQUFVO0FBQUEsS0FDMUMsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQUksVUFFZCxDQUFDLFdBQVcsb0NBQUMsTUFBRCxNQUNYLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBUyxZQUVwQixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNmLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUFrQixhQUdsRCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFTLFdBRXBCLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBeUIsZ0JBRW5DLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBcUMsZ0JBTXZELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFxQyxZQUV0RCxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRCxNQUFHO0FBQUE7QUFPYixtQkFBbUIsT0FBTztBQUN4QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLFlBQVc7QUFBQSxJQUNYLG1CQUFnQjtBQUFBLElBQ2hCLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLE1BQUs7QUFBQSxLQUNELFFBRUosb0NBQUMsU0FBRDtBQUFBLElBQU8sSUFBRztBQUFBLEtBQXVCLGVBQ2pDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBOzs7QUdsT2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxtQkFBK0M7QUFDL0Msb0JBQTBEOzs7Ozs7QUFLbkQsSUFBSSxTQUFRLE1BQU07QUFDckIsU0FBTyxDQUFDLEVBQUMsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUkzQixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDdkMsTUFBSSxXQUFXLE1BQU0sUUFBUTtBQUM3QixNQUFJLFFBQVEsU0FBUyxJQUFJO0FBQ3pCLE1BQUksV0FBVyxTQUFTLElBQUk7QUFHNUIsUUFBTSxLQUFLO0FBR1gsTUFBSSxFQUFDLFNBQVMsYUFBYSxNQUFNLE9BQU8sZ0JBQWdCLE1BQU0saURBQStCLE1BQU0sT0FBTztBQUUxRyxNQUFJLENBQUMsYUFBWTtBQUNiLFFBQUksVUFBVSxNQUFNLFdBQVcsUUFBUSxRQUFRLElBQUk7QUFDbkQsWUFBUSxJQUFJLGdCQUFnQixLQUFLLFlBQVk7QUFDN0MsV0FBTyw0QkFBUyxVQUFTO0FBQUEsTUFDckIsU0FBUztBQUFBLFFBQ0wsY0FBYyxNQUFNLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFLOUMsU0FBTyxFQUFDLE1BQU07QUFBQTtBQUdILG9CQUFtQjtBQXBDdEM7QUFxQ1EsUUFBTSxhQUFhO0FBQ3ZCLFNBQ0ksb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRCxNQUFJLGNBRVIsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNULG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxLQUFRLFVBQ3ZCLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxJQUFhLE1BQUs7QUFBQSxJQUFRLE1BQUs7QUFBQSxJQUFRLGFBQVk7QUFBQSxJQUFrQixVQUFRO0FBQUEsTUFDOUYsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQVcsYUFDMUIsb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLElBQWEsTUFBSztBQUFBLElBQVcsTUFBSztBQUFBLElBQVcsVUFBUTtBQUFBLE1BQ3RFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUFjLE1BQUs7QUFBQSxLQUFTLGNBRWxELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrQix5QkFDWixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQVMsV0FFdkMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1YsMENBQVksU0FBUSwrQ0FBWSxVQUFaLG1CQUFtQixVQUFTO0FBQUE7OztBQ3REakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBa0M7QUFDbEMsb0JBQW9EO0FBRTdDLGdCQUFnQjtBQUNyQixTQUFPLEVBQUUsT0FBTztBQUFBO0FBTVgsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksV0FBVyxNQUFNLFFBQVE7QUFDN0IsTUFBSSxTQUFTLFNBQVMsSUFBSTtBQU0xQixNQUFJLE9BQU8sV0FBVyxVQUFVO0FBQzlCLFdBQU8sd0JBQUssMEJBQTBCLEVBQUUsUUFBUTtBQUFBO0FBR2xELE1BQUksV0FBVyxPQUFPO0FBQ3BCLFdBQU8sd0JBQUssVUFBVSx3QkFBd0IsRUFBRSxRQUFRO0FBQUE7QUFPMUQsU0FBTyw0QkFBUztBQUFBO0FBR0gsdUJBQXVCO0FBRXBDLE1BQUksZ0JBQWdCO0FBQ3BCLE1BQUksWUFBWSx5QkFBTztBQUt2Qiw4QkFBVSxNQUFNO0FBQ2QsUUFBSSxpQkFBaUIsVUFBVSxTQUFTO0FBQ3RDLGdCQUFVLFFBQVE7QUFBQTtBQUFBLEtBRW5CLENBQUM7QUFFSixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxNQUFELE1BQUksYUFDSixvQ0FBQyxLQUFELE1BQUcsa0pBS0gsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUM1QixvQ0FBQyxNQUFELE1BQUksbUJBQ0osb0NBQUMsS0FBRCxNQUNFLG9DQUFDLEtBQUQsTUFBRyw0Q0FFTCxvQ0FBQyxTQUFELE1BQ0Usb0NBQUMsT0FBRCxNQUFLLFlBQ0wsb0NBQUMsU0FBRDtBQUFBLElBQU8sS0FBSztBQUFBLElBQVcsTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLE9BRTVDLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxVQUFELE1BQVEsYUFFVCxnQkFDQyxvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsS0FBRCxNQUFJLGtCQUVKLFFBSVIsb0NBQUMsU0FBRCxNQUNFLG9DQUFDLE1BQUQsTUFBSSx5QkFDSixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUFJLFVBQ0ssS0FDUCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBdUMsaUJBRWpELG9DQUFDLE1BQUQsTUFBSSxRQUNHLEtBQ0wsb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLEtBQTJDLHlCQUlyRCxvQ0FBQyxNQUFELE1BQUksUUFDRyxLQUNMLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUNOLG9DQUFDLFFBQUQsTUFBTTtBQUFBOzs7QUM1RnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZSxvQkFBb0I7QUFDakMsU0FBTyxvQ0FBQyxNQUFELE1BQUk7QUFBQTs7O0FDRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTREO0FBRXJELGlCQUFnQjtBQUNyQixTQUFPLEVBQUUsT0FBTztBQUFBO0FBR0gsc0JBQXNCO0FBQ25DLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRCxNQUNFLG9DQUFDLHNCQUFELFFBR0Ysb0NBQUMsU0FBRCxNQUNFLG9DQUFDLE1BQUQsTUFBSSxzQkFDSixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBSSxnQkFFZixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFNLFdBQ04sb0NBQUMsS0FBRCxNQUFHLFVBR2Qsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBTSxXQUNOLG9DQUFDLEtBQUQsTUFBRyxVQUdkLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQTZCLHdCQUV4QyxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFtQix1Q0FFOUIsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBUztBQUFBOzs7QUNwQzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSx1QkFBc0I7QUFDbkMsU0FDRSwwREFDRSxvQ0FBQyxNQUFELE1BQUksV0FDSixvQ0FBQyxLQUFELE1BQUcsNkNBQ3lDLEtBQzFDLG9DQUFDLFFBQUQsTUFBTSw0QkFBOEIsdUdBR3RDLG9DQUFDLE1BQUQsTUFBSSxXQUNKLG9DQUFDLEtBQUQsTUFBRyxzU0FPSCxvQ0FBQyxLQUFELE1BQUcsNERBQ0gsb0NBQUMsTUFBRCxNQUFJLGNBQ0osb0NBQUMsS0FBRCxNQUFHLGNBQ1UsS0FDWCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FBa0Ysa0JBRXRGLE1BR04sb0NBQUMsS0FBRCxNQUFHLG9DQUMrQixvQ0FBQyxRQUFELE1BQU0sYUFBZTtBQUFBOzs7QUM3QjdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFvRDtBQUs3QyxJQUFJLFVBQVMsT0FBTyxFQUFFLGFBQWE7QUFHeEMsTUFBSSxPQUFPLE9BQU8sOEJBQThCO0FBSTlDLFVBQU0sSUFBSSxTQUFTLGFBQWEsRUFBRSxRQUFRO0FBQUE7QUFLNUMsTUFBSSxPQUFPLE9BQU8sb0JBQW9CO0FBTXBDLFVBQU0sd0JBQUssRUFBRSxnQkFBZ0IscUJBQXFCLEVBQUUsUUFBUTtBQUFBO0FBSzlELE1BQUksT0FBTyxPQUFPLFVBQVU7QUFDMUI7QUFBQTtBQU1GLFNBQU8sRUFBRSxPQUFPLE9BQU87QUFBQTtBQUdWLHFCQUFxQjtBQUNsQyxNQUFJLE9BQU87QUFDWCxTQUNFLG9DQUFDLE1BQUQsTUFBSSxpQkFDVyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxPQUFPLEVBQUUsT0FBTztBQUFBLEtBQVUsS0FBSztBQUFBO0FBUTlDLDBCQUF5QjtBQUM5QixNQUFJLFNBQVM7QUFFYixNQUFJO0FBQ0osVUFBUSxPQUFPO0FBQUEsU0FDUjtBQUNILGdCQUNFLG9DQUFDLEtBQUQsTUFBRyxrR0FFeUIsT0FBTyxLQUFLLGdCQUFlO0FBQUEsU0FHdEQ7QUFDSCxnQkFDRSxvQ0FBQyxLQUFELE1BQUc7QUFBQTtBQUdMLGdCQUNFLG9DQUFDLEtBQUQsTUFBRywwQ0FFRCxvQ0FBQyxNQUFELE9BQ0MsT0FBTyxRQUFPLEtBQUUsT0FBTztBQUFBO0FBS2hDLFNBQ0UsMERBQ0Usb0NBQUMsTUFBRCxNQUFJLFVBQ0osb0NBQUMsS0FBRCxNQUFJLFVBQ0osb0NBQUMsS0FBRCxNQUFHO0FBQUE7QUFVRix3QkFBdUIsRUFBRSxTQUFTO0FBQ3ZDLFVBQVEsTUFBTTtBQUNkLFNBQ0UsMERBQ0Usb0NBQUMsTUFBRCxNQUFJLFdBQ0osb0NBQUMsS0FBRCxNQUFJLE1BQU0sVUFDVixvQ0FBQyxLQUFELE1BQUc7QUFBQTtBQVFGLElBQUksUUFBTyxDQUFDLEVBQUUsV0FBVztBQUM5QixTQUFPO0FBQUEsSUFDTCxPQUFPLE9BQU8sVUFBVSxLQUFLLFVBQVU7QUFBQTtBQUFBOzs7QUMxRzNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQXVDO0FBQ3ZDLG9CQUFxQztBQUk5QixJQUFJLFNBQVEsTUFBTTtBQUNyQixTQUFPLENBQUMsRUFBQyxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRTNCLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUV2QyxNQUFJLFdBQVcsTUFBTSxRQUFRO0FBRTdCLE1BQUksUUFBUSxTQUFTLElBQUk7QUFHekIsTUFBRztBQUNDLFVBQU0seUNBQXVCLE1BQU07QUFBQSxXQUVoQyxLQUFQO0FBQ0UsWUFBUSxJQUFJLFdBQVcsSUFBSTtBQUFBO0FBRzdCLFNBQU8sNEJBQVM7QUFBQTtBQUdMLGlCQUFnQjtBQUMvQixTQUNJLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNmLG9DQUFDLE1BQUQsTUFBSSxzQkFFSixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1Qsb0NBQUMsS0FBRCxNQUFHLHlEQUNILG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxJQUFhLE1BQUs7QUFBQSxJQUFRLE1BQUs7QUFBQSxJQUFRLGFBQVk7QUFBQSxJQUFrQixVQUFRO0FBQUEsTUFDOUYsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLElBQWMsTUFBSztBQUFBLEtBQVMsWUFFbEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLHlCQUNaLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBaUI7QUFBQTs7O0FDdEMzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4QztBQUM5Qyw0QkFBc0I7OztBQ0R0QjtBQUFBLG9CQUE2QjtBQUM3QixvQkFBdUI7QUFDdkIsSUFBTSxTQUFTLElBQUk7QUFJbkIsdUJBQThCLE1BQUs7QUFFL0IsUUFBTSxPQUFPO0FBR2QsUUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFVBQVU7QUFBQSxJQUMxQyxPQUFPO0FBQUEsTUFDSDtBQUFBO0FBQUE7QUFHUixNQUFJLEtBQUssVUFBVTtBQUVuQixNQUFJLFFBQVEsVUFBVTtBQUV0QixNQUFJLE9BQU8sMEJBQU8sVUFBVTtBQUU1QixTQUFPO0FBR1AsU0FBTyxFQUFFLElBQUksTUFBTSxPQUFPO0FBQUE7QUFJOUIsMkJBQWtDLE1BQUs7QUFFbkMsUUFBTSxPQUFPO0FBR2QsUUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFVBQVU7QUFBQSxJQUMxQyxPQUFPO0FBQUEsTUFDSDtBQUFBO0FBQUE7QUFHUixNQUFJLEtBQUssVUFBVTtBQUVuQixNQUFJLFFBQVEsVUFBVTtBQUV0QixNQUFJLFdBQVcsVUFBVTtBQUV6QixTQUFPO0FBR1AsU0FBTyxFQUFFLElBQUksTUFBTSxPQUFPO0FBQUE7QUFHOUIsMEJBQWlDLE1BQUs7QUFFbEMsUUFBTSxPQUFPO0FBRWIsUUFBTSxPQUFPLE1BQU0sT0FBTztBQUFBLElBQ3RCLE1BQU07QUFBQSxNQUNGLE9BQU8sS0FBSztBQUFBLE1BQ1osTUFBTSxLQUFLO0FBQUEsTUFDWCxVQUFVLEtBQUs7QUFBQTtBQUFBO0FBS3ZCLFNBQU87QUFFUCxTQUFPLFFBQVEsS0FBSztBQUFBO0FBR3hCLDBCQUFpQyxNQUFLO0FBRWxDLFFBQU0sT0FBTztBQUViLFVBQVEsSUFBSSxpQkFBaUIsS0FBSztBQUNsQyxRQUFNLE9BQU8sTUFBTSxPQUFPO0FBQUEsSUFDdEIsT0FBTztBQUFBLE1BQ0gsSUFBSSxLQUFLO0FBQUE7QUFBQSxJQUViLE1BQU07QUFBQSxNQUNGLE9BQU8sS0FBSztBQUFBLE1BQ1osTUFBTSxLQUFLO0FBQUEsTUFDWCxVQUFVLEtBQUs7QUFBQTtBQUFBO0FBS3ZCLFNBQU87QUFFUCxTQUFPLFFBQVEsS0FBSztBQUFBO0FBR3hCLDBCQUFpQyxNQUFLO0FBQ2xDLFFBQU0sT0FBTztBQUNiLFFBQU0sT0FBTyxNQUFNLE9BQU87QUFBQSxJQUN0QixPQUFPO0FBQUEsTUFDUCxJQUFJO0FBQUE7QUFBQTtBQUdSLFNBQU87QUFDUCxTQUFPO0FBQUE7QUFJWCwwQkFBZ0M7QUFFeEIsUUFBTSxPQUFPO0FBR2IsUUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNO0FBRXhDLFNBQU87QUFHSCxTQUFPO0FBQUE7Ozs7OztBRDFHUixJQUFJLFNBQVEsTUFBTTtBQUNyQixTQUFPLENBQUMsRUFBQyxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRy9CLElBQUksVUFBUyxDQUFDLEVBQUMsYUFBWTtBQUM5QixTQUFPLFFBQVEsT0FBTztBQUFBO0FBSVgsb0JBQW9CO0FBQy9CLE1BQUksT0FBTztBQUNYLFNBQ0ksb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQWMseUJBQXlCLEVBQUMsUUFBUSxLQUFLO0FBQUE7QUFBQTs7O0FFbkI1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQUFvRDtBQUk3QyxJQUFJLFNBQVEsTUFBTTtBQUNyQixTQUFPLENBQUMsRUFBQyxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBSS9CLElBQUksVUFBUyxNQUFNO0FBQ3RCLFNBQU87QUFBQTtBQUtJLGlCQUFpQjtBQUM1QixNQUFJLFFBQVE7QUFDWixTQUNJLG9DQUFDLE9BQUQsTUFDSSxvQ0FBQyxNQUFELE1BQUksa0JBQ0osb0NBQUMsS0FBRCxNQUFHLDRDQUNILG9DQUFDLE9BQUQsTUFDSSxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQVMsOEJBRXRCLG9DQUFDLE1BQUQsTUFDSyxNQUFNLElBQUksVUFDUCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsSUFBVyxLQUFLLEtBQUs7QUFBQSxLQUMvQixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQVksSUFBSSxLQUFLO0FBQUEsS0FBTyxLQUFLO0FBQUE7OztBQzVCekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdUI7Ozs7OztBQUloQixJQUFJLFFBQU8sTUFBTTtBQUN0QixTQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUE7QUFBQTtBQUlKLElBQUksU0FBUSxNQUFNO0FBQ3ZCLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHdEIsaUJBQWlCO0FBQzlCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRCxNQUFJLGFBQ0osb0NBQUMsS0FBRCxNQUFHLGtDQUM2QixvQ0FBQyxNQUFELE1BQUksYUFBYSxrRUFHakQsb0NBQUMsS0FBRCxNQUFHLGdJQUV1RCxLQUN4RCxvQ0FBQyxRQUFELE1BQU0sVUFBWSw2REFHcEIsb0NBQUMsS0FBRCxNQUFHLGlCQUNZLG9DQUFDLE1BQUQsTUFBSSxpQkFBaUIseUNBQzVCLEtBQ04sb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLEtBQW9ELDZDQUV4RCxNQUdOLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyx1QkFBRDtBQUFBOzs7QUN0Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxQjtBQUVOLHNCQUFzQjtBQUNuQyxTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxLQUFELE1BQUcsK0NBQzBDLG9DQUFDLFFBQUQsTUFBTSxXQUFhLHVEQUdoRSxvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsVUFBRCxNQUNFLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBTztBQUFBOzs7QUNYMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxQjtBQUVOLHVCQUFzQjtBQUNuQyxTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxLQUFELE1BQUcsZ0RBQzJDLG9DQUFDLFFBQUQsTUFBTSxXQUFhLHFDQUN0QyxvQ0FBQyxRQUFELE1BQU0sV0FBYSw0Q0FHOUMsb0NBQUMsS0FBRCxNQUNFLG9DQUFDLFVBQUQsTUFDRSxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQUssbUJBQ0csb0NBQUMsUUFBRCxNQUFNLFdBQWE7QUFBQTs7O0FDYjlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTREOzs7Ozs7QUFRckQsSUFBSSxTQUFRLE1BQU07QUFDckIsU0FBTyxDQUFDLEVBQUMsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUt0Qyx1QkFBNkIsRUFBRSxXQUFXO0FBQ3RDLFFBQU0sVUFBVSxNQUFNLFdBQ3BCLFFBQVEsUUFBUSxJQUFJO0FBR3RCLE1BQUksQ0FBQyxRQUFRLElBQUksaUJBQWlCO0FBQ2hDLFdBQU8sNkJBQVM7QUFBQTtBQUdsQixRQUFNLE9BQU8sRUFBRSxPQUFPLFFBQVEsSUFBSTtBQUVsQyxTQUFPLHlCQUFLLE1BQU07QUFBQSxJQUNoQixTQUFTO0FBQUEsTUFDUCxjQUFjLE1BQU0sY0FBYztBQUFBO0FBQUEsTUFFbEM7QUFBQTtBQUlPLGlCQUFpQjtBQUM1QixNQUFJLFFBQVE7QUFDWixTQUNJLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFhLFVBRTNCLG9DQUFDLE9BQUQsTUFDQyxvQ0FBQyxLQUFELE1BQUcsMENBRUEsb0NBQUMsTUFBRCxNQUNLLE1BQU0sSUFBSSxVQUNQLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLEtBQUssS0FBSztBQUFBLEtBQ2Qsb0NBQUMscUJBQUQ7QUFBQSxJQUFNLElBQUksS0FBSztBQUFBLEtBQU8sS0FBSyxXQUluQyxvQ0FBQyxRQUFELE1BRUksb0NBQUMsdUJBQUQ7QUFBQTs7O0FDbkRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFzQjtBQUV0QixxQkFBNEU7QUFHckUsSUFBSSxVQUFTLE9BQU0sRUFBQyxhQUFZO0FBQ25DLHNDQUFVLE9BQU8sTUFBTTtBQUN2QixTQUFPLFlBQVksT0FBTztBQUFBO0FBSXZCLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUV2QyxNQUFJLFdBQVcsTUFBTSxRQUFRO0FBRTdCLE1BQUksUUFBUSxTQUFTLElBQUk7QUFDekIsTUFBSSxPQUFPLFNBQVMsSUFBSTtBQUN4QixNQUFJLFdBQVcsU0FBUyxJQUFJO0FBQzVCLE1BQUksS0FBSyxTQUFTLElBQUk7QUFDdEIsTUFBSSxRQUFRLFVBQVUsVUFBUztBQUMzQixVQUFNLFdBQVc7QUFDakIsV0FBTyw2QkFBUztBQUFBO0FBR3BCLE1BQUksU0FBUztBQUNiLE1BQUksQ0FBQztBQUFPLFdBQU8sUUFBUTtBQUMzQixNQUFJLENBQUM7QUFBTSxXQUFPLE9BQU87QUFDekIsTUFBSSxDQUFDO0FBQVUsV0FBTyxXQUFXO0FBRWpDLE1BQUksT0FBTyxLQUFLLFFBQVEsUUFBUTtBQUM1QixXQUFPO0FBQUE7QUFFUCxRQUFNLFdBQVcsRUFBQyxJQUFJLE9BQU8sTUFBTTtBQUN2QyxTQUFPLDZCQUFTO0FBQUE7QUFJTCxxQkFBb0I7QUFDL0IsTUFBSSxTQUFTO0FBQ2IsTUFBSSxhQUFhO0FBQ2pCLE1BQUksT0FBTztBQUNYLFNBQ1EsMERBQ0Esb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNULG9DQUFDLEtBQUQsTUFDSSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsSUFBZSxNQUFLO0FBQUEsSUFBSyxjQUFjLEtBQUs7QUFBQSxPQUdqRSxvQ0FBQyxLQUFELE1BQ0ksb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQUcsZ0JBQ0QsS0FBSSxLQUFFLGtDQUFRLFVBQVMsb0NBQUMsTUFBRCxNQUFJLHNCQUF1QixLQUFDLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFRLGNBQWMsS0FBSztBQUFBLFFBR3pILG9DQUFDLEtBQUQsTUFDSSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBRyxnQkFBYSxLQUFJLEtBQUUsa0NBQVEsU0FBUSxvQ0FBQyxNQUFELE1BQUkscUJBQ3pELG9DQUFDLFNBQUQ7QUFBQSxJQUFPLGNBQWMsS0FBSztBQUFBLElBQU0sSUFBRztBQUFBLElBQVksTUFBSztBQUFBLElBQU8sTUFBSztBQUFBLFFBR3BFLG9DQUFDLEtBQUQsTUFDSSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBVyxjQUFrQixLQUFJLEtBQUUsa0NBQVEsYUFBWSxvQ0FBQyxNQUFELE1BQUkseUJBQzFFLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxZQUFEO0FBQUEsSUFBVSxjQUFjLEtBQUs7QUFBQSxJQUFVLE1BQUs7QUFBQSxJQUFXLElBQUc7QUFBQSxJQUFHLE1BQU07QUFBQSxJQUFJLE1BQU07QUFBQSxPQUVqRixvQ0FBQyxLQUFELE1BQ0ksb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLElBQVMsV0FBVTtBQUFBLEtBQTRCLFdBQVcsYUFBYSxnQkFBZ0Isa0JBSTlHLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDVCxvQ0FBQyxLQUFELE1BQ0ksb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLElBQWUsTUFBSztBQUFBLElBQUssY0FBYyxLQUFLO0FBQUEsT0FHakUsb0NBQUMsS0FBRCxNQUNJLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUEyQixNQUFLO0FBQUEsS0FBUztBQUFBOzs7QUMxRS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUI7QUFFTixzQkFBc0I7QUFDakMsU0FDUSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQU0sS0FBQyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBcUI7QUFBQTs7O0FDTG5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFnQztBQUNoQyxxQkFBNkQ7QUFJdEQsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3ZDLE1BQUksV0FBVyxNQUFNLFFBQVE7QUFFN0IsTUFBSSxRQUFRLFNBQVMsSUFBSTtBQUN6QixNQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3hCLE1BQUksV0FBVyxTQUFTLElBQUk7QUFFNUIsTUFBSSxTQUFTO0FBQ2IsTUFBSSxDQUFDO0FBQU8sV0FBTyxRQUFRO0FBQzNCLE1BQUksQ0FBQztBQUFNLFdBQU8sT0FBTztBQUN6QixNQUFJLENBQUM7QUFBVSxXQUFPLFdBQVc7QUFFakMsTUFBSSxPQUFPLEtBQUssUUFBUSxRQUFRO0FBQzVCLFdBQU87QUFBQTtBQUdYLFFBQU0sV0FBVyxFQUFDLE9BQU8sTUFBTTtBQUUvQixTQUFPLDZCQUFTO0FBQUE7QUFJTCxtQkFBbUI7QUFFOUIsTUFBSSxTQUFTO0FBRWIsTUFBSSxhQUFhO0FBRWpCLE1BQUksT0FBTztBQUlYLFFBQU0sZUFBZSxDQUFDLE1BQUs7QUFDdkIsUUFBSSxPQUFPLEVBQUUsT0FBTztBQUVyQixXQUFPLEtBQUssUUFBUSxPQUFRO0FBRTVCLGFBQVMsZUFBZSxhQUFhLFFBQVEsS0FBSztBQUFBO0FBRXZELFNBQ0ksb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNULG9DQUFDLEtBQUQsTUFDSSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBRyxnQkFDRCxLQUFJLEtBQUUsa0NBQVEsVUFBUyxvQ0FBQyxNQUFELE1BQUksc0JBQXVCLEtBQUMsb0NBQUMsU0FBRDtBQUFBLElBQU8sVUFBVTtBQUFBLElBQWMsTUFBSztBQUFBLElBQU8sTUFBSztBQUFBLFFBR3RILG9DQUFDLEtBQUQsTUFDSSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBRyxnQkFBYSxLQUFJLEtBQUUsa0NBQVEsU0FBUSxvQ0FBQyxNQUFELE1BQUkscUJBQ3pELG9DQUFDLFNBQUQ7QUFBQSxJQUFPLGFBQWE7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFZLE1BQUs7QUFBQSxJQUFPLE1BQUs7QUFBQSxRQUc5RCxvQ0FBQyxLQUFELE1BQ0ksb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQVcsY0FBa0IsS0FBSSxLQUFFLGtDQUFRLGFBQVksb0NBQUMsTUFBRCxNQUFJLHlCQUMxRSxvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsWUFBRDtBQUFBLElBQVUsTUFBSztBQUFBLElBQVcsSUFBRztBQUFBLElBQUcsTUFBTTtBQUFBLElBQUksTUFBTTtBQUFBLE9BRXBELG9DQUFDLEtBQUQsTUFDSSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsS0FBVSxXQUFXLGFBQWEsZ0JBQWdCO0FBQUE7OztBQzlEL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBb0Q7QUFNcEQsdUJBQTZCLEVBQUUsV0FBVztBQUN4QyxRQUFNLFVBQVUsTUFBTSxXQUNwQixRQUFRLFFBQVEsSUFBSTtBQUl0QixNQUFJLFFBQVEsSUFBSSxpQkFBaUI7QUFFakMsVUFBTSxPQUFPLEVBQUUsTUFBTSxLQUFLLGFBQWEsT0FBTyxRQUFRLElBQUk7QUFDMUQsV0FBTyx5QkFBSyxNQUFNO0FBQUEsTUFDaEIsU0FBUztBQUFBLFFBQ1AsY0FBYyxNQUFNLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFJeEMsU0FBTztBQUFBO0FBS0EsSUFBSSxRQUFPLE1BQU07QUFDdEIsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBO0FBQUE7QUFLRixrQkFBaUI7QUFsQ2hDO0FBbUNFLFFBQU0sT0FBTztBQUNiLE1BQUksV0FBVyxvQ0FBTSxTQUFOLG1CQUFZLFNBQVEsS0FBSyxLQUFLLFFBQVE7QUFDckQsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUFJLFlBQVMsVUFBUyxrQ0FDdEIsb0NBQUMsTUFBRCxNQUFJLDZCQUF5QixvQ0FBQyxVQUFELE1BQVEsb0JBQ3JDLG9DQUFDLEtBQUQsTUFBRywwRkFFTCxvQ0FBQyxTQUFELE1BQ0Esb0NBQUMsTUFBRCxNQUFJLG1CQUNKLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQUksb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLElBQTRELFFBQU87QUFBQSxLQUFTLFlBQ3hGLG9DQUFDLE1BQUQsTUFBSSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsSUFBK0IsUUFBTztBQUFBLEtBQVM7QUFBQTs7O0FDaERuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQTJDO0FBQzNDLHFCQUEwRDtBQUtuRCxJQUFJLFNBQVEsTUFBTTtBQUNyQixTQUFPLENBQUMsRUFBQyxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR3RDLHVCQUE2QixFQUFFLFdBQVc7QUFDdEMsUUFBTSxVQUFVLE1BQU0sV0FDcEIsUUFBUSxRQUFRLElBQUk7QUFHdEIsTUFBSSxRQUFRLElBQUksaUJBQWlCO0FBRy9CLFdBQU8sNkJBQVM7QUFBQTtBQUdsQixRQUFNLE9BQU8sRUFBRSxPQUFPLFFBQVEsSUFBSTtBQUVsQyxTQUFPLHlCQUFLLE1BQU07QUFBQSxJQUNoQixTQUFTO0FBQUEsTUFDUCxjQUFjLE1BQU0sY0FBYztBQUFBO0FBQUE7QUFBQTtBQU8vQixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDdkMsTUFBSSxXQUFXLE1BQU0sUUFBUTtBQUM3QixNQUFJLFFBQVEsU0FBUyxJQUFJO0FBQ3pCLE1BQUksV0FBVyxTQUFTLElBQUk7QUFDeEIsUUFBTSxFQUFDLE1BQU0sVUFBUyxNQUFNLDZDQUEyQixNQUFNLE9BQU87QUFFcEUsTUFBSyxNQUFPO0FBRVIsUUFBSSxVQUFVLE1BQU0sV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUNuRCxZQUFRLElBQUksZ0JBQWdCLE1BQU0sS0FBSztBQUV2QyxXQUFPLDZCQUFTLFVBQVU7QUFBQSxNQUN0QixTQUFTO0FBQUEsUUFDTCxjQUFjLE1BQU0sY0FBYztBQUFBO0FBQUE7QUFBQTtBQUk5QyxTQUFPLEVBQUUsTUFBTTtBQUFBO0FBR1Isa0JBQWdCO0FBckRuQztBQXVEUSxRQUFNLGFBQWE7QUFDdkIsU0FDSSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxNQUFELE1BQUksV0FFSixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQVEsVUFDdkIsb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLElBQWEsTUFBSztBQUFBLElBQVEsTUFBSztBQUFBLElBQVEsYUFBWTtBQUFBLElBQWtCLFVBQVE7QUFBQSxNQUM5RixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBVyxhQUMxQixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsSUFBYSxNQUFLO0FBQUEsSUFBVyxNQUFLO0FBQUEsSUFBVyxVQUFRO0FBQUEsTUFDdEUsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLElBQWMsTUFBSztBQUFBLEtBQVMsV0FFbEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Ysb0NBQUMscUJBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFpQixhQUMxQixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQWUsc0JBRXhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNWLDBDQUFZLFNBQVEsK0NBQVksVUFBWixtQkFBbUIsVUFBUztBQUFBOzs7QXZCcERqRSxvQkFBa0M7QUFDM0IsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHdCQUF3QjtBQUFBLElBQ3RCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsd0JBQXdCO0FBQUEsSUFDdEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVix3QkFBd0I7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHVCQUF1QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsNkJBQTZCO0FBQUEsSUFDM0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFViwyQkFBMkI7QUFBQSxJQUN6QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHNCQUFzQjtBQUFBLElBQ3BCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsc0JBQXNCO0FBQUEsSUFDcEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixzQkFBc0I7QUFBQSxJQUNwQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHNCQUFzQjtBQUFBLElBQ3BCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsNEJBQTRCO0FBQUEsSUFDMUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFViwyQkFBMkI7QUFBQSxJQUN6QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixzQkFBc0I7QUFBQSxJQUNwQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHNCQUFzQjtBQUFBLElBQ3BCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsb0JBQW9CO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
