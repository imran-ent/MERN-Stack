const red = document.getElementById('Box-1');
const blue = document.getElementById('Box-2');
const green = document.getElementById('Box-3');
const yellow = document.getElementById('Box-4');

red.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'red';
    e.target.style.color='white';
});

blue.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'blue';
    e.target.style.color='white';

});

green.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'green';
    e.target.style.color='white';

});

yellow.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'yellow';
    e.target.style.color='black';

});

const username = document.getElementById('username');
const welcomeMsg = document.getElementById('welcomeMsg');
const greet = document.getElementById('button');

function welcomeMsgOn(){
    if(username.value){    
        welcomeMsg.textContent += ', ' ;
    }
    welcomeMsg.textContent += username.value; 
};

greet.addEventListener('click',welcomeMsgOn);

const dark = document.getElementById('Dark');

dark.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'black';
    document.body.style.color='white';
    let Boxes = document.getElementsByClassName('box');
    for(i=0;i<Boxes.length;i++){
        Boxes[i].style.borderColor = 'white';
    }
    
})

