export const getRecipeCard = (recipes, parentElement, createElement) => {
    for (let recipe of recipes) {
        /** Card Parent Container */
        const cardContainer = createElement("div");
        cardContainer.classList.add("card", "shadow");

        /** Card Image Container */
        const cardImageContainer = createElement("div");
        cardImageContainer.classList.add("card-image-container");

        /** Card Image Element */
        const imageElement = createElement("img");
        imageElement.classList.add("card-image");
        imageElement.setAttribute("src", recipe.strMealThumb);
        imageElement.setAttribute("alt", recipe.strMeal);
        imageElement.setAttribute("data-id", recipe.idMeal);
        cardImageContainer.appendChild(imageElement);

        cardContainer.appendChild(cardImageContainer);

        /** Card Details Container */
        const cardDetailsContainer = createElement("div");
        cardDetailsContainer.classList.add("recipe-details");

        /** Card Title Container */
        const cardTitleElement = createElement("div");
        cardTitleElement.classList.add("title");
        cardTitleElement.innerText = recipe.strMeal;
        cardDetailsContainer.appendChild(cardTitleElement);

        /** Card Rating & Duration Container */
        const cardRatingAndLength = createElement("div");
        cardRatingAndLength.classList.add("ratings");

        /** Rating Element */
        const cardRatingContainer = createElement("div");

        const ratingValueElement = createElement("span");
        ratingValueElement.innerText = `${recipe.strArea}`;
        cardRatingContainer.appendChild(ratingValueElement);

        cardRatingAndLength.appendChild(cardRatingContainer);

        /** Duration */
        const lengthElement = createElement("div");
        lengthElement.classList.add("star-rating");

        const ratingIconElement = createElement("span");
        // ratingIconElement.classList.add("time", "material-icons-outlined");
        ratingIconElement.innerText = "Youtube";
        lengthElement.appendChild(ratingIconElement);
        const duration = createElement("span");
        // duration.innerText = `${recipe.TotalTimeInMins} mins`;
        // duration.innerText = `${recipe.strYoutube} mins`;
        lengthElement.appendChild(duration);
        // lengthElement.innerText = `${recipe.TotalTimeInMins} mins`;
        cardRatingAndLength.appendChild(lengthElement);

        cardDetailsContainer.appendChild(cardRatingAndLength);

        cardContainer.appendChild(cardDetailsContainer);

        parentElement.appendChild(cardContainer);
    }
};