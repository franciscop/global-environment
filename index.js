if (typeof process === "undefined") {
  globalThis.process = {};
}
if (typeof globalThis.Netlify !== "undefined") {
  Object.assign(globalThis.process.env, globalThis.Netlify.env.toObject());
}
if (typeof import.meta.env !== "undefined") {
  Object.assign(globalThis.process.env, import.meta.env);
}
