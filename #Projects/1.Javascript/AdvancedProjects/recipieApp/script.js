import {
    getAllCuisineData
} from "./api.js";
import appendcard from "./appendCard.js";
import appendCategory from "./appendCategory.js";
const cardContainer = document.querySelector('.container');
const filterContainer = document.querySelector('.filterContainer');
const searchBox = document.getElementById('searchBox');
const {
    result,
    category
} = await getAllCuisineData();
let searchValue = '';
let filterArrayByOrigin = [];

function getFilterData() {
    let filteredArray = [];
    filteredArray = searchValue.length > 0 ? result.filter((value) => {
        return value.strMeal.toLowerCase().includes(searchValue);
    }) : result;
    console.log(filterArrayByOrigin);
    if (filterArrayByOrigin.length > 0) {
        searchValue.length > 0 ? filteredArray = filteredArray : filteredArray = result;
        filteredArray = filteredArray.filter(value => {
            for (let origin of filterArrayByOrigin) {
                if (value.country == origin) {
                    return true;
                }
            }
            return false;
        })
    }

    console.log(filteredArray);
    cardContainer.innerHTML = "";
    appendcard(filteredArray, cardContainer);

}

function handleSearch(event) {
    searchValue = event.target.value;
    let filteredArray = getFilterData();
}
const debounce = (callback, delay) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

const handleFilter = (event) => {
    filterArrayByOrigin = Array.from(document.querySelectorAll('.checkBox')).filter(value => {
        return value.checked;
    }).map((value) => value.name);
    getFilterData();
}

const handleClick = (event) => {
    const id = event.target.dataset.id;
    if (id) {
        window.location.href = './details.html';
        localStorage.clear();
        localStorage.setItem('id', id);
    }
}






const debounceInput = debounce(handleSearch, 500);
appendcard(result, cardContainer);
appendCategory(category, filterContainer);

searchBox.addEventListener('keyup', debounceInput);
filterContainer.addEventListener('click', handleFilter);
cardContainer.addEventListener('click', handleClick);