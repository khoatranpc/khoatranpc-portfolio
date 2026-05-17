/** Ảnh demo trong `src/assets/showcase/{imageFolder}/` — Vite gom lúc build. */
const showcaseAssetUrls = import.meta.glob<string>(
  '../assets/showcase/**/*.{png,jpg,jpeg,webp,gif}',
  { eager: true, query: '?url', import: 'default' },
)

const urlByRelativePath = new Map<string, string>()

for (const [modulePath, url] of Object.entries(showcaseAssetUrls)) {
  const marker = '/assets/showcase/'
  const idx = modulePath.indexOf(marker)
  if (idx === -1) continue
  urlByRelativePath.set(modulePath.slice(idx + marker.length), url)
}

export function resolveShowcaseAssetPath(imageFolder: string, file: string): string {
  const folder = imageFolder.trim()
  const name = file.trim()
  if (!folder || !name) return ''
  return urlByRelativePath.get(`${folder}/${name}`) ?? ''
}
