# Unplugin REQUIRE_ESM

An interesting Unplugin that does its best to make your code run only in an ES Modules. [WIP]

## Install

```bash
npm i -D unplugin-require-esm

```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginRequireEsm from 'unplugin-require-esm'

export default defineConfig({
  plugins: [UnpluginRequireEsm.vite()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginRequireEsm from 'unplugin-require-esm'

export default {
  plugins: [UnpluginRequireEsm.rollup()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginRequireEsm from 'unplugin-require-esm'

build({
  plugins: [UnpluginRequireEsm.esbuild()],
})
```

<br></details>

## License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
