// const URL = "https://movies-app.prakashsakari.repl.co/api/movies"
// const URL = "https://dummyjson.com/products";
const URL = "http://localhost:8008/movies"
const parentElement = document.querySelector(".main");
const createElement = (element) => document.createElement(element);
const searchInput = document.querySelector(".input")

let searchValue ="", movies, filteredArrayOfMovies = [];

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
    "gap-6", "my-2"
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
})();



function handleSearch(event) {
    searchValue = event.target.value.toLowerCase();
    // console.log(searchValue)

    filteredArrayOfMovies = searchValue?.length > 0 ? movies.filter(movie => (typeof movie.name === 'string' && movie.name.toLowerCase().includes(searchValue)) || (typeof movie.director_name === 'string' && movie.director_name.toLowerCase().includes(searchValue)) || (typeof movie.cast_name === 'string' && movie.cast_name.toLowerCase().includes(searchValue))) : movies;
    // console.log(filteredArrayOfMovies)
     
    parentElement.innerHTML = ""
    createMovieCard(filteredArrayOfMovies)

}

searchInput.addEventListener("keyup", handleSearch) // check for "change"=> you have to wait and click outside or enter.

// -46:23
