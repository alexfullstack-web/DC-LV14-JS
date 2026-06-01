import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FilterButtons from './components/FilterButtons'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  const movies = [
    {
      id: 1,
      title: "Interestelar",
      category: "Ficção Científica",
      rating: 9.2,
      image: "https://placehold.co/300x400?text=Interestelar",
      favorite: false
    },
    {
      id: 2,
      title: "Batman Begins",
      category: "Ação",
      rating: 8.4,
      image: "https://placehold.co/300x400?text=Batman",
      favorite: false
    },
    {
      id: 3,
      title: "Toy Story",
      category: "Animação",
      rating: 8.0,
      image: "https://placehold.co/300x400?text=Toy+Story",
      favorite: false
    },
    {
      id: 4,
      title: "Vingadores",
      category: "Aventura",
      rating: 8.5,
      image: "https://placehold.co/300x400?text=Vingadores",
      favorite: false
    }
  ]
  
  const [movieList, setMovieList] =
      useState(movies);
  
    const [filter, setFilter] =
      useState("all");
  
    const toggleFavorite = (id) => {
      const updatedMovies =
        movieList.map((movie) => {
          if (movie.id === id) {
            return {
              ...movie,
              favorite: !movie.favorite,
            };
          }
  
          return movie;
        });
  
      setMovieList(updatedMovies);
    };
  
    const favoriteMovies =
      movieList.filter(
        (movie) => movie.favorite
      );
  
    const filteredMovies =
      filter === "favorites"
        ? favoriteMovies
        : movieList;
  
  
  return (
    <>
    <div id="desafio03">
             <Header
            totalFavorites={
              favoriteMovies.length
            }
          />
    
          <FilterButtons
            filter={filter}
            setFilter={setFilter}
          />
    
          {filter === "favorites" &&
          filteredMovies.length === 0 ? (
            <h2>
              Nenhum filme favoritado
            </h2>
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {filteredMovies.map(
                (movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    toggleFavorite={
                      toggleFavorite
                    }
                  />
                )
              )}
            </div>
          )}
          </div>
      </>
  )
}

export default App
