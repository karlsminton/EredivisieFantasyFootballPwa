const staticEredivisie = 'eredivisie-fantasy-football-v1'
const assets = [
	'/',
	'/index.html',
	'/style.css',
	'/app.js',
	'/font/Oswald/Oswald-Light.ttf'
]

self.addEventListener('install', installEvent => {
	installEvent.waitUntil(
		caches.open(staticEredivisie).then(cache => {
			cache.addAll(assets)
		})
	)
})

self.addEventListener('fetch', fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})
