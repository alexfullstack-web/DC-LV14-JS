export default function MovieCard({
  movie,
  toggleFavorite,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "250px",
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        width="200"
      />

      <h2>{movie.title}</h2>

      <p>
        Categoria: {movie.category}
      </p>

      <p>
        Nota: {movie.rating}
      </p>

      <button
        onClick={() =>
          toggleFavorite(movie.id)
        }
      >
        {movie.favorite
          ? "Remover Favorito"
          : "Favoritar"}
      </button>
    </div>
  );
}