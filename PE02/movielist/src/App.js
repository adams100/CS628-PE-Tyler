import React, { useState } from 'react';
import './styles.css';

const mymovies = [
  // Drama
  { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
  { title: 'Fight Club', genre: 'Drama', releaseYear: 1999 },
  { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
  { title: 'The Social Network', genre: 'Drama', releaseYear: 2010 },
  { title: 'The Departed', genre: 'Drama', releaseYear: 2006 },

  // Action
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  { title: 'Inception', genre: 'Action', releaseYear: 2010 },
  { title: 'The Matrix', genre: 'Action', releaseYear: 1999 },
  { title: 'The Avengers', genre: 'Action', releaseYear: 2012 },
  { title: 'Interstellar', genre: 'Action', releaseYear: 2014 },

  // Crime
  { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
  { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
  { title: 'Goodfellas', genre: 'Crime', releaseYear: 1990 },
  { title: 'Seven', genre: 'Crime', releaseYear: 1995 },
  { title: 'Gone Girl', genre: 'Crime', releaseYear: 2014 },

  // Comedy
  { title: 'The Grand Budapest Hotel', genre: 'Comedy', releaseYear: 2014 },
  { title: 'Anchorman: The Legend of Ron Burgundy', genre: 'Comedy', releaseYear: 2004 },
  { title: 'Superbad', genre: 'Comedy', releaseYear: 2007 },
  { title: 'Bridesmaids', genre: 'Comedy', releaseYear: 2011 },
  { title: 'The Hangover', genre: 'Comedy', releaseYear: 2009 },

  // Fantasy
  { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', releaseYear: 2001 },
  { title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'Fantasy', releaseYear: 2001 },
  { title: 'Pan\'s Labyrinth', genre: 'Fantasy', releaseYear: 2006 },
  { title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', genre: 'Fantasy', releaseYear: 2005 },
  { title: 'Stardust', genre: 'Fantasy', releaseYear: 2007 },

  // Thriller
  { title: 'The Silence of the Lambs', genre: 'Thriller', releaseYear: 1991 },
  { title: 'Se7en', genre: 'Thriller', releaseYear: 1995 },
  { title: 'Prisoners', genre: 'Thriller', releaseYear: 2013 },
  { title: 'Gone Baby Gone', genre: 'Thriller', releaseYear: 2007 },
  { title: 'Shutter Island', genre: 'Thriller', releaseYear: 2010 },
];
const genreList = ["Drama", "Action", "Crime", "Comedy", "Fantasy", "Thriller"]

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleSelectChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`Selected Movie: ${title}`);
  };

  var filteredMovies = []
  if (selectedGenre === 'All Genres') {
    filteredMovies = mymovies;
  }
  else {
    filteredMovies = mymovies.filter((movie) => movie.genre === selectedGenre);
  }


  return (
    <div className="MovieBlock">
      <select value={selectedGenre} onChange={handleSelectChange}>
        <option value="All Genres">All Genres</option>
        {genreList.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {filteredMovies.map((movie) => (
        <div className="tile" key={movie.title} onClick={() => handleMovieClick(movie.title)}>
          <h3>{movie.title}</h3>
          <p>{`Genre: ${movie.genre}`}</p>
          <p>{`Release Year: ${movie.releaseYear}`}</p>
        </div>
      ))}
    </div>
  );
};



function App() {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="MainDiv">
      
        <MovieList />
      </div>
    </div>
  );
}

export default App;
