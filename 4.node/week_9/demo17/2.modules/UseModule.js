//* Using latest ES6 approoch = use "type" = "module" in package.json

import {URL, getData} from './MyModule.js'  // import with the extension is compulsory
console.log('Data is fetched from URL: ',URL)

getData().forEach((element)=> console.log(element))