# Unplugin REQUIRE_ESM

An interesting Unplugin that does its best to make your code run only in an ES Modules.

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

WTFPL
