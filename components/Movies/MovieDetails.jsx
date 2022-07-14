import styles from "./Movies.module.css"

const MovieDeatils = ({ movie }) => {
  return (
    <div className={styles.movie}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.moviePoster} src={movie?.image} alt={movie?.title} />
      <div className={styles.movieInfo}>
        <h2 className={styles.movieInfoTitle}>{movie?.title}</h2>
        <p className={styles.movieInfoYear}>{`${movie?.year} | ${movie?.duration}`}</p>
        <p className={styles.movieInfoDescription}>{movie?.description}</p>
      </div>
    </div>
  )
}

export default MovieDeatils