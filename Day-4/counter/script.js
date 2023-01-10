const counter = document.querySelector('.counter');

let count = 0;

function CounterFunc() {
    setInterval(() => {
        count++;
        if(count <= 1000){
            counter.innerHTML = count;
        }
        else{
            clearInterval();
        }
    }, 1000);
};

window.onload = CounterFunc;