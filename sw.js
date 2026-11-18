// A anamnese mudou para anabtech.github.io/anamnese. Este service worker apaga a cópia antiga e se desliga.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys(); await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const cs = await self.clients.matchAll({ type: 'window' }); cs.forEach((c) => c.navigate(c.url));
  })());
});
