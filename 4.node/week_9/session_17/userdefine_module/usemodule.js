import {API_URL,getData} from './mymodule.js';
console.log(API_URL);
getData().forEach(element => {
    console.log(element.name+" is "+element.age+" year old")
});