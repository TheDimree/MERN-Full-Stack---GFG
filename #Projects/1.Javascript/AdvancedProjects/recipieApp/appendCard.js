const createElement = (element) => document.createElement(element);
export default function appendcard(data , parentElement){


    data.forEach(element => {
        //main container 
        const mainCardContainer = createElement('div');
        mainCardContainer.classList.add('card');
        mainCardContainer.setAttribute('data-id' , element.idMeal);

            //card main Image
            const mainImage = createElement('img');
            mainImage.setAttribute('src' , element.strMealThumb);
            mainImage.setAttribute('loading' , 'lazy');
            mainImage.setAttribute('alt' , `${element.strMeal} image`);
            mainImage.setAttribute('data-id' , element.idMeal);
            //card title
            const cardTitle = createElement('p');
            cardTitle.classList.add('cuisineName') ;
            cardTitle.innerText = element.strMeal ; 
            cardTitle.setAttribute('data-id' , element.idMeal);
            //card origin
            const cardOrigin = createElement('p');
            cardOrigin.classList.add('origin');
            cardOrigin.innerText = element.country ;
            cardOrigin.setAttribute('data-id' , element.idMeal);
        mainCardContainer.appendChild(mainImage);
        mainCardContainer.appendChild(cardTitle);
        mainCardContainer.appendChild(cardOrigin);
        parentElement.appendChild(mainCardContainer);    
    });
}