export default function FilterButtons({
  filter,
  setFilter,
}) {
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
      >
        Todos
      </button>

      <button
        onClick={() => setFilter("favorites")}
      >
        Favoritos
      </button>
    </div>
  );
}