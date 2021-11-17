function capitalizar(text){
    let textAux = text.split(" ")
    textAux = textAux.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
    return textAux.join(" ")
}

console.log(capitalizar("   hola    mundo  "))