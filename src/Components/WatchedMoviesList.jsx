import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";
function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
WatchedMoviesList.propTypes = {
  watched: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteWatched: PropTypes.func.isRequired,
};

export default WatchedMoviesList;
