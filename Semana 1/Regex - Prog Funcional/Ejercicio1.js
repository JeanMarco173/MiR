const recipe = {
    name: "",
    ingredients: [
        { name: "Pan", quantity: 2 },
        { name: "Jamón", quantity: 1 },
        { name: "Queso", quantity: 1 },
    ]
}

//Imprimir la cantidad del primer ingrediente.

console.log(recipe.ingredients[0].quantity);

//Imprimir los ingredientes con el siguiente formato:

const printIngredients = () => {
    for ( let ingredient of recipe.ingredients ){
        console.log(`${ingredient.quantity} de ${ingredient.name}`);
    }
}
printIngredients();