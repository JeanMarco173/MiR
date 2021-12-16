import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
    const [characters, setCharacters] = useState({
        info: {
        prev: false,
        next: false
        },
        results: []
    });

    function getCharacters(url) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setCharacters(data));
    }

    useEffect(() => {
        getCharacters("https://rickandmortyapi.com/api/character");
    }, []);

    const handleChangePage = (url) => {
        getCharacters(url);
    };

    return (
        <div className="App">
        <h1>Rick And Morty</h1>
        <div className="Pagination">
            <button
            className={
                characters.info.prev
                ? "Pagination__Button"
                : "Pagination__Button__Disable"
            }
            onClick={() => handleChangePage(characters.info.prev)}
            disabled={characters.info.prev ? false : true}
            >
            Prev
            </button>
            <button
            lassName={
                characters.info.next
                ? "Pagination__Button"
                : "Pagination__Button__Disable"
            }
            className="Pagination__Button"
            onClick={() => handleChangePage(characters.info.next)}
            disabled={characters.info.next ? false : true}
            >
            Next
            </button>
        </div>
        <div className="Characters">
            {characters
            ? characters.results.map((item) => (
                <div key={item.id} className="Character__Container">
                    <div className="Chacater__Photo">
                    <img src={item.image} className="Photo" alt={item.name} />
                    </div>
                    <div className="Chacater__Info">
                    <p className="Info">Nombre: {item.name}</p>
                    <p className="Info">
                        Status:{" "}
                        {item.status !== "unknown" ? item.status : "Desconocido"}
                    </p>
                    <p className="Info">Especie: {item.species}</p>
                    <p className="Info">Ubicacion: {item.location.name}</p>
                    <p className="Info">
                        Origen:{" "}
                        {item.origin.name === "unknown"
                        ? item.origin.name
                        : "Desconocido"}
                    </p>
                    </div>
                </div>
                ))
            : null}
        </div>
        </div>
    );
    }
