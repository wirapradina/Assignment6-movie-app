const Movie = ({ allMovie }) => {
    return (
      <div className="container" style={{ paddingTop: '70px' }}>
        <h3 className="my-4" style={{ color: 'blue' }}>Show Your Favorite Movies</h3>
        <div className="row">
          {allMovie.allMovie && allMovie.allMovie.map((movie, index) => (
            <div style={{ width: '20%', padding: '15px' }} key={index}>
              <div className="card" style={{ height: '350px' }}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ height: '250px', objectFit: 'cover' }}
                  className="card-img-top"
                  onError={(event) => {
                    event.target.src = "https://via.placeholder.com/150";
                  }}
                />
                <div
                  className="card-body text-center d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: '#EC8305', color: 'white' }}
                >
                  <div className="card-text">{movie.Title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Movie;
  