import { builtinModules } from 'node:module'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'

import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
      name: 'index',
    },
    rollupOptions: {
      external: [
        ...builtinModules,
        ...builtinModules.map(m => `node:${m}`),
        ...Object.keys(pkg.dependencies),
      ],
    },
    target: 'es2022',
  },
  plugins: [dts()],
})
