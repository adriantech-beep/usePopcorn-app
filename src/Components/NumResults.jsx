import PropTypes from "prop-types";

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

NumResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default NumResults;
