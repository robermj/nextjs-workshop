import Link from 'next/link'

import styles from './Movies.module.css'

const MovieItem = ({ id, movie }) => (
  <Link href={`/movie/${id}`}>
    <a>
      <div className={styles.movieItem}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img className={styles.movieImg} src={movie.image} alt={movie.title} />
        <span className={styles.movieTitle}>{movie.title}</span>
      </div>
    </a>
  </Link>
)

const MoviesList = ({ movies = {} }) => (
  <div className={styles.grid}>
    {
      Object.keys(movies).map((movieId) => (
        <MovieItem key={movieId} id={movieId} movie={movies[movieId]} />
      ))
    }
  </div>
)

export default MoviesList