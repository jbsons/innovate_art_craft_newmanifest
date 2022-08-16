self.addEventListener('install', (event) => {
    console.log('ðŸ‘·', 'install', event);
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('ðŸ‘·', 'activate', event);
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // console.log('ðŸ‘·', 'fetch', event);
    event.respondWith(fetch(event.request));
});