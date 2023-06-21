console.log(document)
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);
myMessage.innerText = 'This is a message in the DOM!'
setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 )
const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = inputBox.value
});

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});
myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})