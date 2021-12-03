const characters = [
{
    id: 1,
    name: "Rick Sanchez",
    episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",,
    "https://rickandmortyapi.com/api/episode/51"
    ]
},
{
    id: 2,
    name: "Morty Smith",
    episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51"
    ],
},
{
    id: 3,
    name: "Summer Smith",
    episode: [
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/51"
    ]
},
{
    id: 4,
    name: "Beth Smith",
    episode: [
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/51"
    ]
},
{
    id: 5,
    name: "Jerry Smith",
    episode: [
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51"
    ]
},
{
    id: 6,
    name: "Abadango Cluster Princess",
    episode: [
    "https://rickandmortyapi.com/api/episode/27"
    ]
},
{
    id: 7,
    name: "Abradolf Lincler",
    episode: [
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11"
    ]
},
{
    id: 8,
    name: "Adjudicator Rick",
    episode: [
    "https://rickandmortyapi.com/api/episode/28"
    ]
},
{
    id: 9,
    name: "Agency Director",
    episode: [
    "https://rickandmortyapi.com/api/episode/24"
    ]
},
{
    id: 10,
    name: "Alan Rails",
    episode: [
    "https://rickandmortyapi.com/api/episode/25"
    ]
}
]

// Versión mutable: Extraer los id's de los episodios de cada personaje, concatenarlos en un string separados por coma
// eliminar la propiedad `episode` de cada personaje y agregar una propiedad `episodesId` que contenga el string con los ids

const getIdMutable = () => {
    characters.forEach(character => {
        let ids = []
        character.episode.forEach(episode => ids.push(episode.split('/')[5]))
        character.episodesId = ids.join(',')
        delete character.episode
    })
}

// Ahora hacer toda la operación inmutable

const getIdInmutable = () => {
    return characters.map(character => {
        let ids = character.episode.map(episode => episode.split('/')[5]).join(',')
        console.log('ids', ids);
        character.episodesId = ids
        delete character.episode
        return character;
    })
}