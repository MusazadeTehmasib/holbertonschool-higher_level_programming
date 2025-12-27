const addDiv = document.getElementById('add_item');
const ulList = document.querySelector('.my_list');

addDiv.addEventListener('click', () => {
  const i = document.createElement('i');
  i.textContent = 'Item';
  ulList.appendChild(i);
});