self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('snake-game-cache-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json', // Voeg manifest.json toe aan de cache
                'https://cdn.tailwindcss.com',
                'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
                'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
                // Voeg hier andere assets toe die gecached moeten worden
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
