#!/usr/bin/env node

import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'

const pkg = await fs.readFile(join(cwd(), 'package.json'), 'utf8')
  .then(data => JSON.parse(data))

if (pkg.type !== 'module') {
  // eslint-disable-next-line no-console
  console.error('Please add `"type": "module"` to your package.json.')
  process.exit(1)
}
