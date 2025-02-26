async function getRickAndMortyCharacters() {
    const characterNames = [
      "Rick Sanchez",
      "Morty Smith",
      "Summer Smith",
      "Beth Smith",
      "Jerry Smith",
    ];
    
    const response = await fetch("https://rickandmortyapi.com/api/character/?name=" + characterNames.join(","));
    const data = await response.json();
    
    return data.results
      .filter((character) => characterNames.includes(character.name))
      .map((character) => ({
        nome: character.name,
        genero: character.gender === "Male" ? "Homem" : "Mulher",
        avatar: character.image,
        especie: character.species === "Human" ? "Humano" : character.species,
      }));
  }
  
  export default getRickAndMortyCharacters;
  