import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

function getMovie() {
  const movieid = Math.floor(Math.random() * 1000 + 1);
  console.log(movieid);

  axios
    .get(`${BASE_URL}${movieid}?api_key=${API_KEY}&${language}`)
    .then(function (response) {
      const dataMovie = response.data;
      const posterMovie = response.data.poster_path;
      showMovie(dataMovie, posterMovie);
    })
    .catch(function () {
      const movieContent = document.querySelector("#movie-content");

      movieContent.innerHTML = `
      <img src="./assets/coding.jpg" alt="" />
      <div class="description-movie coding">
        <p class="movie-description-coding">Ops, hoje não é dia de assistir filme.
        Bora codar! 🚀</p>
      </div>
      `;
    });
}

function handleClickFindMovie() {
  const findMovies = document.querySelector(".find-movies");
  findMovies.addEventListener("click", getMovie);
}

handleClickFindMovie();

function showMovie(movie, poster) {
  const movieContent = document.querySelector("#movie-content");
  const movieTitle = movie.original_title;
  const movieSynopsis = movie.overview;

  const contentMovie = `
  <img src="${IMG_URL}${poster}" alt="" />
        <div class="description-movie">
          <h1 class="movie-title">${movieTitle}</h1>
          <p class="movie-description">${movieSynopsis}</p>
        </div>
`;

  movieContent.innerHTML = contentMovie;
}
