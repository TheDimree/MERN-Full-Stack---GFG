const createElement = (element)=> document.createElement(element);
export default function appendDetail(data , parentElement){
    // const parentElement = createElement('main');
    // parentElement.classList.add('details-main-container');
        //title
        const mainTitle =createElement('h1');
        mainTitle.innerText = data.title ;
        mainTitle.classList.add('title');
        parentElement.appendChild(mainTitle);
        //ingredients
        const ingredientsContainer = createElement('div');
        ingredientsContainer.classList.add('details-main-container__ingredients');
            //mainImage 
            const mainImage = createElement('img');
            mainImage.setAttribute('src' , data.image);
            mainImage.setAttribute('alt' , data.title);
        ingredientsContainer.appendChild(mainImage);
            //ingredients
            const ingredientsDetailContainer = createElement('div');
            ingredientsDetailContainer.classList.add('ingredients-container');
                //ingredients title
                const ingreTitle = createElement('h1');
                ingreTitle.classList.add('indgredient-title');
                ingreTitle.innerText = 'Ingredients';
                ingredientsDetailContainer.appendChild(ingreTitle);
                //ingre ul
                const ingreUl = createElement('ul');
                for(let element in data.indgredient){
                    const li = createElement('li');
                    const name = createElement('span');
                    name.innerText = element ; 
                    const quantity = createElement('span');
                    quantity.innerText = data.indgredient[element];
                    li.appendChild(name);
                    li.appendChild(quantity);
                   ingreUl.appendChild(li);
                }
                ingredientsDetailContainer.appendChild(ingreUl);
            ingredientsContainer.appendChild(ingredientsDetailContainer);
        parentElement.appendChild(ingredientsContainer);
        //instruction       
        const instructionContainer = createElement('div');
        instructionContainer.classList.add('details-main-container__instruction');
                //instruction title
                const instructionTitle = createElement('h1');
                instructionTitle.innerText = 'Instruction' ; 
                const instruction = createElement('p');
                instruction.innerText = data.instruction ;
                instructionContainer.appendChild(ingreTitle);
                instructionContainer.appendChild(instruction);
    parentElement.appendChild(instructionContainer);

}