const URL = "https://dummyjson.com/products";
const parentElement = document.querySelector(".main");
const createElement = (element) => document.createElement(element);
let movies;
const getMovies = async (url) => {
  // * Traditional Way: Fetch method
  // fetch(URL)
  // .then(res=> res.json())
  // .then(data=> console.log(data))
  // .catch(err => console.log(err))
  // console.log("Hi from getMOvies")
  // * Modern way is more cleaner
  try {
    const { data } = await axios.get(url);
    console.log(data.products);
    createMovieCard(data.products);
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
    "gap-4", "my-2"
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
    imageElement.setAttribute("src", movie.thumbnail);
    imageElement.setAttribute("alt", movie.title);

    imageContainer.appendChild(imageElement);
    card.appendChild(imageContainer);

    // Card details container
    const cardDetailsContainer = createElement("div");
    cardDetailsContainer.classList.add("movie-details");

    // Card title
    const titleElement = createElement("p");
    titleElement.classList.add("title");
    titleElement.innerText = movie.title;
    cardDetailsContainer.appendChild(titleElement);

    // Card genre
    const genreElement = createElement("p");
    genreElement.classList.add("genre");
    genreElement.innerText = `Genre: ${movie.category}`;
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
    ratingValueElement.innerText = movie.rating;
    starRatingContainer.appendChild(ratingValueElement);

    ratingsContainer.appendChild(starRatingContainer);

    // Price
    const priceElement = createElement("span");
    priceElement.innerText = `${movie.price} USD`;
    ratingsContainer.appendChild(priceElement);

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
