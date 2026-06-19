import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const redirectsPath = resolve('dist', '_redirects')

if (existsSync(redirectsPath)) {
  console.error(`Unexpected Cloudflare redirect file: ${redirectsPath}`)
  process.exit(1)
}

console.log('Verified: dist/_redirects does not exist.')
