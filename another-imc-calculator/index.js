addEventListener("fetch", (event) => {
    const response = new Response('E agora jose, vai dar bug tambem?', {
        headers: {
            'cotent-type': 'text/plain'
        }
    });

    event.respondWith(response);
});