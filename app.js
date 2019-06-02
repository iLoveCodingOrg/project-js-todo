// 1. User clicks on the button
// 2. We capture the text in the input field
// 3. display that text on the screen
// 4. When delete is clicked, delete the item

const addButton = document.querySelector('#addButton');
const itemToAdd = document.querySelector('#itemToAdd');

addButton.addEventListener('click', function(){
  console.log('I was clicked', itemToAdd.value);
});
