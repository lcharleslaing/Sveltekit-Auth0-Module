// @ts-ignore
import { build, files, timestamp } from 'service-worker';

const worker = self;

const CACHE_NAME = `static-cache-timestamp`;

const to_cache = build.concat(files);

worker.addEventListener('install', (event) => {
	console.log('[ServiceWorker] Install');

	// @ts-ignore
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('[ServiceWorker] Pre-caching offline page');

			return cache.addAll(to_cache).then(() => {
				// @ts-ignore
				worker.skipWaiting();
			});
		})
	);
});

worker.addEventListener('activate', (event) => {
	console.log('[ServiceWorker] Activate');

	// Remove previous cached data from disk

	// @ts-ignore
	event.waitUntil(
		caches.keys().then(async (keys) =>
			Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) {
						console.log('[ServiceWorker] Removing old cache', key);

						return caches.delete(key);
					}
				})
			)
		)
	);

	// @ts-ignore
	worker.clients.claim();
});

self.addEventListener('fetch', (event) => {
	// @ts-ignore
	console.log('[ServiceWorker] Fetch', event.request.url);

	// @ts-ignore
	if (event.request.mode !== 'navigate') {
		return;
	}

	// @ts-ignore
	event.respondWith(
		// @ts-ignore
		fetch(event.request).catch(() => {
			return caches.open(CACHE_NAME).then((cache) => {
				return cache.match('offline.html');
			});
		})
	);
});
