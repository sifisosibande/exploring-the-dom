console.log(document)

const myMessage = document.querySelector('.myMessage');
const inputBox = document.querySelector('.theInputValue');

console.log(myMessage);

setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 )


const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
        
     }
     myMessage.classList.toggle('darkmode');
});
const theClearButton = document.querySelector('.theClearButton');
theClearButton.addEventListener('click', function() {
    myMessage.innerText= "";
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}