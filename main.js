console.log('this worked');
// global var

let counter = 0;

// document selection vars

const h2text = document.querySelector('h2');
const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const input = document.querySelector('#text');
console.log(input.value);

btn1.addEventListener("click", function(){
    counter += parseInt(input.value);
    h2text.textContent = counter;
    if (counter < 0){
        h2text.style.color = 'red';
    } else {
        h2text.style.color = 'black';
    }
});

btn2.addEventListener("click", function(){
    counter -= parseInt(input.value);
    h2text.textContent = counter;
    if (counter < 0){
        h2text.style.color = 'red';
    } else {
        h2text.style.color = 'black';
    }
});

