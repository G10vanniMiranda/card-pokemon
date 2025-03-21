import Card from "./components/card";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header titulo="Pokedex" subTitulo="Starter" />

      <div className="flex gap-3 flex-wrap justify-center">
        <Card codigo="001" name="Bulbasaur" img="/bulbasaur.png" imgAlt="Bulbasaur" types="Grass" />
        <Card codigo="002" name="Ivysaur" img="/Ivysaur.png" imgAlt="Ivysaur" types="Grass" />
        <Card codigo="003" name="Venusaur" img="/venusaur.png" imgAlt="Venusaur" types="Grass" />
        <Card codigo="004" name="Charmander" img="/charmander.png" imgAlt="Charmander" types="Fire" />
        <Card codigo="005" name="Charmeleon" img="/charmeleon.png" imgAlt="Charmeleon" types="Fire" />
        <Card codigo="006" name="Charizard" img="/charizard.png" imgAlt="Charizard" types="Fire" />
        <Card codigo="007" name="Squirtle" img="/squirtle.png" imgAlt="Squirtle" types="Water" />
        <Card codigo="008" name="Wartortle" img="/wartortle.png" imgAlt="Wartortle" types="Water" />
        <Card codigo="009" name="Blastoise" img="/blastoise.png" imgAlt="Blastoise" types="Water" />
        <Card codigo="010" name="Pikachu" img="/pikachu.png" imgAlt="Pikachu" types="Electric" />
      </div>
    </main>
  );
}
