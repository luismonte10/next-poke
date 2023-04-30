import Image from 'next/image';

import styles from '../styles/Home.module.css';

type pokemonsProps = {
  id: number;
  name: string;
  url: string;
};

export async function getPokemons() {
  const maxPokemons = 251;
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const data = await fetch(`${url}/?limit=${maxPokemons}`);
  const pokemons = await data.json();

  pokemons.results.forEach((item: pokemonsProps, index: number) => {
    item.id = index + 1;
  });

  return pokemons.results;
}

export default async function Home() {
  const pokemons: pokemonsProps[] = await getPokemons();

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  );
}
