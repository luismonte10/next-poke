import Image from 'next/image';
import styles from '../../styles/About.module.css';

export const metadata = {
  title: 'Sobre',
  description: 'Página Sobre'
};

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        PokéNext é uma aplicação que apresenta uma lista de todos os Pokémons da
        primeira geração, funcionando como uma Pokédex digital. O projeto foi
        desenvolvido com o objetivo de aplicar conhecimentos em tecnologias como
        NextJs, React e TypeScript.
      </p>
      <Image
        src="/images/charizard.png"
        width="400"
        height="400"
        alt="Charizard image"
      />
    </div>
  );
}
