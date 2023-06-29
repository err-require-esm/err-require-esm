import { type FilterPattern, createFilter } from '@rollup/pluginutils'
import MagicString from 'magic-string'
import { createUnplugin } from 'unplugin'

export interface Options {
  exclude?: FilterPattern
  include?: FilterPattern,
  options?: {
    topLevelAwait?: boolean
  }
}

export default createUnplugin<Options | undefined>(({ exclude, include, options } = {}) => {
  const filter = createFilter(
    include ?? [/\.[jt]s$/],
    exclude,
  )

  return {
    name: 'unplugin-require-esm',
    transform: (code, filename) => {
      const s = new MagicString(code, { filename })

      if (options?.topLevelAwait !== false)
        s.append('\n await 42;')

      return s.toString()
    },
    transformInclude: id => filter(id),
  }
})
