export default function Header({ totalFavorites }) {
  return (
    <header>
      <h1>Catálogo de Filmes</h1>
      <h2>Favoritos: {totalFavorites}</h2>
    </header>
  );
}