import { useState, useEffect } from "react";
import "./styles.css";

/*
Cuando inicia el juego, la aplicación piensa un número del 1 al 10. Hay un campo de texto donde el 
jugador ingresa su intento. Si lo adivina sale un mensaje de éxito con el número de intentos que hizo 
el jugador y comienza nuevamente (vuelve a pensar un número). De lo contrario (si no lo adivina) sale 
un mensaje diciendo que lo vuelva a intentar.

Bonus: a la derecha sale una tabla con el número de intentos de cada juego. Y debajo un total que 
sume los intentos.

*/
var id = 1;
export default function App() {
    const generateRandom = () => Math.floor(Math.random() * (10 - 1) + 1);

    const [random, setRandom] = useState(generateRandom);
    const [number, setNumber] = useState("");
    const [tries, setTries] = useState(0);
    const [games, setGames] = useState([]);
    const [countTries, setCountTries] = useState(0);

    useEffect(() => {
        function countTriesPerGame() {
        const triesPerGame = games
            .map((item) => item.tries)
            .reduce((acumulador, nextValue) => acumulador + nextValue, 0);
        setCountTries(triesPerGame);
        }
        countTriesPerGame();
    }, [games]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number && number > 0 && number < 11) {
        if (random === number) {
            alert(
            `Felicidades, adivinaste el numero.
            Nro de intentos: ${tries}`
            );
            let auxGames = [...games];
            const newGame = { id, tries };
            auxGames.push(newGame);
            resetGame(auxGames);
        } else {
            let newTries = tries + 1;
            setTries(newTries);
            setNumber("");
        }
        } else {
        alert("Debe ingresar un numero entre 1 y 10");
        setNumber("");
        }
    };

    const resetGame = (auxGames) => {
        id++;
        setGames(auxGames);
        setRandom(generateRandom);
        setNumber("");
        setTries(0);
    };

    return (
        <div className="App">
        <h1>Adivinador</h1>
        <div className="Game">
            <div>
            <form onSubmit={handleSubmit}>
                <label>Ingrea un numero entre el 1 - 10</label>
                <br />
                <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                />
            </form>
            </div>
            <div>
            <table>
                <thead>
                <tr>
                    <th>#Juego</th>
                    <th>Intentos</th>
                </tr>
                </thead>
                <tbody>
                {games.map((item, index) => (
                    <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>{item.tries}</th>
                    </tr>
                ))}
                {games.length > 0 ? (
                    <tr>
                    <th>Total de intentos</th>
                    <th>{countTries}</th>
                    </tr>
                ) : null}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}
