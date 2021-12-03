const fetchUrls = (quantity=10) => {
    return new Promise(resolve => {
        setTimeout(() => {
        const urls = []
        for (let i=0; i < quantity; i++) {
            urls.push(`http://${i}`)
        }
            resolve(urls)
        }, 3000)
    })
}

const fetchUrl = url => {
    const id = url.replace("http://", "")
    return new Promise(resolve => {
            setTimeout(() => resolve(`Hola ${id}`), 300)
        })
}

// llamar `fetchUrls` de forma asincrónica utilizando promesas. Por cada url retornada llamar `fetchUrl` de forma asincrónica y unir todos los
// resultados en una sola cadena separadas por coma.

const getUrls = () => {
    fetchUrls()
    .then( response => {
        console.log('response', response);
        Promise.all(response.map(item => fetchUrl(item)))
        .then( responses => console.log(responses.join(',')))
    })
}
// Refactorizar a async/await

const getAsyncUrls = async () => {
    const urls = await fetchUrls();
    const newUrls = []
    for (const url of urls) {
        const newUrl = await fetchUrl(url)
        newUrls.push(newUrl)
    }
    console.log(newUrls.join(','));
}
getAsyncUrls();