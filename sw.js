// Service Worker ringkas - diperlukan supaya notification boleh keluar
// pada Android Chrome (mobile browser tak benarkan notification terus
// dari page tanpa service worker)

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
