// const URL = "https://movies-app.prakashsakari.repl.co/api/movies"
// const URL = "https://dummyjson.com/products";
const URL = "http://localhost:8008/movies";
const parentElement = document.querySelector(".main");
const createElement = (element) => document.createElement(element);
const searchInput = document.querySelector(".input");
const movieRatings = document.querySelector("#rating-select");
const moviesGenre = document.querySelector("#genre-select");

let searchValue = "",
  movies,
  filteredArrayOfMovies = [],
  ratings = 0,
  genres = [],
  genre = ""; //selected on the dropdown

const getMovies = async (url) => {
  // * Traditional Way: Fetch method
  // fetch(URL)
  // .then(res=> res.json())
  // .then(data=> console.log(data))
  // .catch(err => console.log(err))
  // console.log("Hi from getMOvies")
  // * Modern way is more cleaner
  try {
    const response = await axios.get(url);
    movies = response.data;
    console.log(movies);
    createMovieCard(movies);
    // return data.products;
  } catch (error) {
    console.log(error);
  }
};

//function to create movie card
const createMovieCard = (movies) => {
  // Creating the grid parent container
  const cardContainer = createElement("div");
  cardContainer.classList.add(
    "card-container",
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "lg:grid-cols-4",
    "gap-6",
    "my-2"
  );

  for (let movie of movies) {
    // Creating each card
    const card = createElement("div");
    card.classList.add("card");

    // Image container
    const imageContainer = createElement("div");
    imageContainer.classList.add("card-image-container");

    // Image element
    const imageElement = createElement("img");
    imageElement.classList.add("card-image");
    imageElement.setAttribute("src", movie.img_link);
    imageElement.setAttribute("alt", movie.name);

    imageContainer.appendChild(imageElement);
    card.appendChild(imageContainer);

    // Card details container
    const cardDetailsContainer = createElement("div");
    cardDetailsContainer.classList.add("movie-details");

    // Card title
    const titleElement = createElement("p");
    titleElement.classList.add("title");
    titleElement.innerText = movie.name;
    cardDetailsContainer.appendChild(titleElement);

    // Card genre
    const genreElement = createElement("p");
    genreElement.classList.add("genre");
    genreElement.innerText = `Genre: ${movie.genre}`;
    cardDetailsContainer.appendChild(genreElement);

    // Ratings and length container
    const ratingsContainer = createElement("div");
    ratingsContainer.classList.add("ratings");

    const starRatingContainer = createElement("div");
    starRatingContainer.classList.add("star-rating");

    // Star icon
    const starIconElement = createElement("span");
    starIconElement.classList.add("material-symbols-outlined");
    starIconElement.innerText = "Star";
    starRatingContainer.appendChild(starIconElement);

    // Rating value
    const ratingValueElement = createElement("span");
    ratingValueElement.innerText = movie.imdb_rating;
    starRatingContainer.appendChild(ratingValueElement);

    ratingsContainer.appendChild(starRatingContainer);

    // Duration
    const durationElement = createElement("span");
    durationElement.innerText = `${movie.duration} mins`;
    ratingsContainer.appendChild(durationElement);

    cardDetailsContainer.appendChild(ratingsContainer);
    card.appendChild(cardDetailsContainer);
    cardContainer.appendChild(card);
  }

  // Append the cardContainer to the main parent element
  parentElement.appendChild(cardContainer);
};

(async () => {
  await getMovies(URL);

  // getting all unique genres from api's genre variable
  genres = movies.reduce((accumulator, current) => {
    let genreArr = []; // will store finally unique genres
    let tempGenreArr = current.genre.split(",");
    // console.log(tempGenreArr);
    accumulator = [...accumulator, ...tempGenreArr];
    for (let genre of accumulator) {
      if (!genreArr.includes(genre)) {
        // genreArr.push(genre) // * directly mutates the original array by adding genre to the end
        genreArr = [...genreArr, genre]; // * creates a new array each time with the contents of genreArr plus the new genre
      }
    }
    return genreArr;
  }, []); // accumulator  is this array and current will be the every single object, [] is also the initial value as we will return the array.
  // console.log(genres);

  // Listing Genres in dropdown
  for (let genre of genres) {
    const option = createElement("option");
    option.classList.add("option");
    option.setAttribute("value", genre);
    option.innerText = genre;
    moviesGenre.appendChild(option);
  }
})();

function getFilteredData(searchValue) {
  filteredArrayOfMovies =
    searchValue?.length > 0
      ? movies.filter(
        (movie) =>
          (typeof movie.name === "string" &&
            movie.name.toLowerCase().includes(searchValue)) ||
          (typeof movie.director_name === "string" &&
            movie.director_name.toLowerCase().includes(searchValue)) ||
          (typeof movie.cast_name === "string" &&
            movie.cast_name.toLowerCase().includes(searchValue))
      )
      : movies;
  if (ratings > 0) {
    filteredArrayOfMovies =
      searchValue?.length > 0 || genre != "" ? filteredArrayOfMovies : movies;
    filteredArrayOfMovies = filteredArrayOfMovies.filter(
      (movie) => movie.imdb_rating >= ratings
    );
  }

  if (genre?.length > 0) {
    filteredArrayOfMovies =
      searchValue?.length > 0 || ratings > 7 ? filteredArrayOfMovies : movies;
    filteredArrayOfMovies = filteredArrayOfMovies.filter((movie) =>
      movie.genre.includes(genre)
    );
  }
  console.log("Filtered movies: ", filteredArrayOfMovies);
  console.log("searchValue: ", searchValue);
  console.log("ratings: ", ratings);
  console.log("genre: ", genre);
  return filteredArrayOfMovies;
}

function handleSearch(event) {
  searchValue = event.target.value.toLowerCase();
  // console.log(searchValue)
  let filteredBySearch = getFilteredData(searchValue);
  parentElement.innerHTML = "";
  createMovieCard(filteredBySearch);
}

function debounce(callback, delay) {
  let timerId;

  return (...args) => { // ...args is a rest parameter; It collects all arguments in an args array.
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debounceInput = debounce(handleSearch, 500);

function handleRatingSelector(event) {
  ratings = event.target.value;
  console.log("ratings=", ratings);
  let filterByRating = getFilteredData(searchValue);
  parentElement.innerHTML = "";
  createMovieCard(ratings ? filterByRating : movies);
}

function handleGenreSelect(event) {
  genre = event.target.value;
  console.log("Genre selected: ", genre);
  const filterByGenre = getFilteredData(searchValue);
  console.log("Genre total: ", filterByGenre.length);
  parentElement.innerHTML = "";
  createMovieCard(genre ? filterByGenre : movies);
}

searchInput.addEventListener("keyup", debounceInput); // check for "change"=> you have to wait and click outside or enter.
movieRatings.addEventListener("change", handleRatingSelector); // check for "change"=> you have to wait and click outside or enter.
moviesGenre.addEventListener("change", handleGenreSelect);