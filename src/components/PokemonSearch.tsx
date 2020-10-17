import React from "react";

interface User {
  name?: string;
  numberOfPokemon?: number;
}

function PokemonSearch({ name, numberOfPokemon }: User) {
  const onSearch = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <div>
      {name} {numberOfPokemon}
      <button
        onClick={() => {
          onSearch(1, 2.4);
        }}
      >
        ClickMe
      </button>
    </div>
  );
}

export default PokemonSearch;
