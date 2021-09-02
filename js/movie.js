const loadMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e140374410191c1ec6e6352c6fa856c9')
        .then(res => res.json())
        .then(data => setMovies(data.results))
}
loadMovies();

const setMovies = (movies) => {
    const first12Movies = movies.slice(0, 12);
    const movieSpinner = document.getElementById('spinner');
    movieSpinner.style.display = 'none';
    for (const movie of first12Movies) {
        const movieContainer = document.getElementById("movie-container");
        const movieBox = document.createElement("div");
        movieBox.classList.add("col-md-3");
        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
        movieBox.innerHTML = `
        <div class="shadow rounded p-3 m-2 h-100"
                    <br>
                    <img class="img-fluid" src="${imageUrl}">
                    <h4>${movie.title}</h4>
                    <p>${movie.overview.slice(0, 100)}</p>
                    <button onclick="loadMovieDetails('${movie.id}')" type="button" class="btn btn-primary">See More</button>
                    </div>
        </div>
        `;
        movieContainer.appendChild(movieBox);
    }
}
const loadMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e140374410191c1ec6e6352c6fa856c9`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
}

const setMovieDetails = (movie) => {
    const movieRoom = document.getElementById('movie-details');
    movieRoom.textContent = '';
    const movieDiv = document.createElement("div");
    movieDiv.innerHTML = `
    <h5>${movie.original_title}</h5>
    `;
    movieRoom.appendChild(movieDiv);
}