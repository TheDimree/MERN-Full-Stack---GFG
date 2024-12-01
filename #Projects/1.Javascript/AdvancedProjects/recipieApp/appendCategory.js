const createElement = (element) => document.createElement(element);
export default function appendCategory(category , parentContainer){
    category.forEach(element => {
        const label = createElement('label');
        label.setAttribute('for' , element);
        label.setAttribute('name' , element);
        label.classList.add('filterItem');
            const checkBox = createElement('input');
            checkBox.classList.add('checkBox');
            checkBox.setAttribute('type' , 'checkbox');
            checkBox.setAttribute('id' , element);
            checkBox.setAttribute('name', element);
            const text = createElement('span');
            text.innerText = element ; 
        label.appendChild(checkBox);
        label.appendChild(text);
        parentContainer.appendChild(label);
    });

}