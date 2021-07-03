addEventListener("fetch", (event) => {

    if (event.request.method !== "GET") {
        return event.respondWith(
            new Response(null, {
                status: 405,
                statusText: "Method Not Allowed",
            })
        );
    }

    const urlParams = event.request.url.split('?');
    const params = new URLSearchParams(urlParams[1]);

    if (!params.has('peso') || !params.has('altura')) {
        return event.respondWith(
            new Response("Informe um peso e uma altura", {
                status: 400,
                statusText: "Invalid query params"
            })
        );
    }

    let peso = parseFloat(params.get('peso').replace(',', '.'))
    let altura = parseFloat(params.get('altura').replace(',', '.'))

    let imc = peso / (altura * altura);

    const response = new Response(imc, {
        headers: {
            'cotent-type': 'text/plain'
        }
    });

    event.respondWith(response);
});