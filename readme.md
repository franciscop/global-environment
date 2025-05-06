# Environment variables across packages

Load the environment variables, no matter the runtime you are at:

```js
import "global-environment";

const secret = process.env.SECRET;
console.log(secret);
```

It basically makes the `process.env` have the environment variables filled in Netlify Edge Functions and in Vite (we are open for contributions for other setups).

If you want them to load from your environment, make sure to call `dotenv` before `global-environment`:

```js
import "dotenv/config";
import "global-environment";
```

## Configuration

There's no configuration possible, it's just loading the variables from strange places into `process`. Basically this, but you don't need to type it in every project ([or have a nightmare import setup]()):

```js
if (typeof process === "undefined") {
  globalThis.process = {};
}
if (typeof globalThis.Netlify !== "undefined") {
  Object.assign(globalThis.process.env, globalThis.Netlify.env.toObject());
}
if (typeof import.meta.env !== "undefined") {
  Object.assign(globalThis.process.env, import.meta.env);
}
```
