// Service Worker para Aula CAJU (PWA Offline com Atualização Automática Garantida)
const CACHE_NAME = 'aula-caju-v2.2';

const ASSETS_TO_PRECACHE = [
  './',
  './index.html',
  './favicon.svg',
  './manifest.json'
];

// Instalação: força o novo Service Worker a assumir imediatamente
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_PRECACHE);
    })
  );
});

// Ativação: apaga IMEDIATAMENTE todas as versões antigas do cache (como aula-caju-v1)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Apagando cache antigo obsoleto:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. REQUISIÇÕES DE NAVEGAÇÃO / HTML (index.html, raiz do app)
  // ESTRATÉGIA: NETWORK-FIRST (Sempre busca a versão mais recente na rede!)
  // Garante que qualquer atualização no GitHub Pages seja vista na hora em qualquer celular!
  const isNavigation = event.request.mode === 'navigate' || 
                       event.request.destination === 'document' ||
                       url.pathname.endsWith('/') || 
                       url.pathname.endsWith('index.html');

  if (isNavigation) {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' })
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put('./index.html', clone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Se estiver offline no meio do sertão, entrega o index.html salvo em cache
          return caches.match('./index.html') || caches.match('./');
        })
    );
    return;
  }

  // 2. OUTROS RECURSOS ESTÁTICOS (JS com hash do Vite, CSS, fontes, imagens)
  // ESTRATÉGIA: STALE-WHILE-REVALIDATE ou CACHE-FIRST com revalidação
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith('http')) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

// Mensagem para forçar atualização imediata
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
