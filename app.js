// 1. User clicks on the button
// 2. We capture the text in the input field
// 3. display that text on the screen
    // create the element
    // add the userTEXT to the element
    // ADD the element as a child to UL
// 4. When delete is clicked, delete the item

const addButton = document.querySelector('#addButton');
const itemToAdd = document.querySelector('#itemToAdd');
const ul = document.querySelector('.todo');

addButton.addEventListener('click', function(){
  const newItem = createItem(itemToAdd.value);
  ul.appendChild(newItem);
});

function createItem(val){
  const item = document.createElement('li');
  item.textContent = val;

  return item;
}