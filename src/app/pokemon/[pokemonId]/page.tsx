import Image from 'next/image';

import styles from '../../../styles/Pokemon.module.css';

export type pokemonProps = {
  id: number;
  name: string;
  url: string;
};

const getPokemon = async (id: number) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const pokemon = await data.json();

  return pokemon;
};

export default async function Pokemon({
  params
}: {
  params: { pokemonId: number };
}) {
  const pokemon = await getPokemon(params.pokemonId);

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map(
            ({ type }: { type: { name: string } }, index: number) => (
              <span
                key={index}
                className={`${styles.type} ${styles['type_' + type.name]}`}
              >
                {type.name}
              </span>
            )
          )}
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_heigth}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className={styles.data_weigth}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
