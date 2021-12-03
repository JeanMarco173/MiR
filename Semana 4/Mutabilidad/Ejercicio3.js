const fetchA = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hola"), 4000)
    })
}

const fetchB = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Mundo"), 4000)
        //setTimeout(() => reject(new Error('Error con sto')), 2000)
    })
}

// Llamar `fetchA` de forma asincrónica, cuando resuelva llamar `fetchB` e imprimir los dos resultados concatenados separados por espacio

const getFetch = () => {
    fetchA()
    .then( resultA => {
        fetchB()
        .then( resultB => {
            console.log(`${resultA} ${resultB}`);
        })
    })
    .catch( error => console.log(error))
}

const getFetchII = () => {
    Promise.all([fetchA(), fetchB()])
    .then( results => console.log(`FetchII: ${results[0]} ${results[1]}`))
    .catch( error => console.log('error', error))
}
getFetch();
getFetchII();

// Refactorizar a async/await

const getAsyncFetch = async () => {
    const responseA = await fetchA();
    const responseB = await fetchB();
    console.log(`Async: ${responseA} ${responseB}`)
}

getAsyncFetch();