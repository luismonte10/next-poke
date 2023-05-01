import styles from '../styles/Home.module.css';

import Image from 'next/image';

import Card from '../components/Card';

export type pokemonProps = {
  id: number;
  name: string;
  url: string;
};

export async function getPokemons() {
  const maxPokemons = 251;
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const data = await fetch(`${url}/?limit=${maxPokemons}`);
  const pokemons = await data.json();

  pokemons.results.forEach((item: pokemonProps, index: number) => {
    item.id = index + 1;
  });

  return pokemons.results;
}

export default async function Home() {
  const pokemons: pokemonProps[] = await getPokemons();

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poké<span>Next</span>
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
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
