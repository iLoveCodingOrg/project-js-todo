// 1. User clicks on the button
// 2. We capture the text in the input field
// 3. display that text on the screen
    // create the element
    // add the userTEXT to the element
    // ADD the element as a child to UL
// 4. When delete is clicked, delete the item
    // add a delete button
    // delete button on click, should remove the item
      // add an event listener
      // delete the parent
// 5. After Item is added, clear the text field
// 6. Auto focus after add.
// 7. Enable Enter-to-submit functionality

const addButton = document.querySelector('#addButton');
const itemToAdd = document.querySelector('#itemToAdd');
const ul = document.querySelector('.todo');

addButton.addEventListener('click', function(){
  const newItem = createItem(itemToAdd.value);
  ul.appendChild(newItem);
  itemToAdd.value = '';
  itemToAdd.focus();
});

function createItem(val){
  const item = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  
  span.textContent = val;
  delBtn.textContent = 'Delete';
  delBtn.classList.add('btn-link');

  item.appendChild(span);
  item.appendChild(delBtn);
  
  delBtn.addEventListener('click', function(){
    item.parentNode.removeChild(item);
  })

  return item;
}