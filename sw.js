// CodeWisdom — Service Worker
// IMPORTANTE: sempre que atualizar o app, mude o número da versão abaixo (v1 -> v2 -> v3...)
// Isso força todos os usuários a baixarem a versão nova automaticamente, sem precisar desinstalar.
const VERSAO = 'cw-v5'

const ASSETS = [
  './',
  './index.html',
  './manifest.json'
]

self.addEventListener('install', e => {
  self.skipWaiting() // ativa o novo SW imediatamente, sem esperar
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ASSETS)))
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== VERSAO).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // assume controle imediato de todas as abas abertas
  )
})

self.addEventListener('fetch', e => {
  // network-first para HTML (sempre tenta buscar a versão mais nova primeiro)
  if (e.request.mode === 'navigate' || e.request.url.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const resClone = res.clone()
          caches.open(VERSAO).then(c => c.put(e.request, resClone))
          return res
        })
        .catch(() => caches.match(e.request))
    )
    return
  }
  // cache-first para outros assets
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  )
})
