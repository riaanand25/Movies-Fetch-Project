const Api_key = "6b16d69c1ed9d2166d76db0f12c8f72c";
const form = document.querySelector("#searchForm")
const Input = document.querySelector("#Input");
const Container = document.querySelector("#container");
const image_base_path = "https://image.tmdb.org/t/p/original";

form.addEventListener("submit", SearchMovie);
function SearchMovie(e) {
    e.preventDefault();
    const query = Input.value;
    if (Input.value === "") {
        alert("Please Search Anything!")
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${Api_key}`;

    fetch(url)
        .then(response => response.json())
        .then(moviesData => {
            Container.innerHTML = "";

            moviesData.results.forEach(movie => {

                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                const img = document.createElement("img");
                img.classList.add("Movie_Image");
                img.src = image_base_path + movie.poster_path;

                const title = document.createElement("h3");
                title.innerHTML = movie.original_title;

                movieCard.append(img, title);
                Container.append(movieCard);
            });
        })
}