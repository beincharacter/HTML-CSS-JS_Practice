// const toggleBtn = document.querySelector('.toggle');
// const para = document.querySelector('.para');
// const MAX_WORDS = 20;
// let currentText;
// let isCollapsed = true;

// toggleBtn.addEventListener('click', () => {
//     if (isCollapsed) {
//         currentText = para.innerHTML;
//         const shortText = currentText.split(" ").slice(0,MAX_WORDS).join(" ");
//         para.innerHTML = shortText;
//         toggleBtn.innerHTML = 'Show More';
//     } else {
//         para.innerHTML = currentText;
//         toggleBtn.innerHTML = 'Show Less';
//     }
//     isCollapsed = !isCollapsed;
// });

const toggleBtn = document.querySelector('.toggle');
const para = document.querySelector('.para');
const MAX_WORDS = 20;
let currentText;
let shortText;
let isCollapsed = true;

function toggleText() {
    currentText = para.innerHTML;
    shortText = currentText.split(" ").slice(0,MAX_WORDS).join(" ");
    para.innerHTML = shortText;
    toggleBtn.innerHTML = 'Show More';
    isCollapsed = true;
}

toggleBtn.addEventListener('click', () => {
    if (isCollapsed) {
        para.innerHTML = currentText;
        toggleBtn.innerHTML = 'Show Less';
    } 
    else {
        para.innerHTML = shortText;
        toggleBtn.innerHTML = 'Show Less';
        isCollapsed = false;
    }
    isCollapsed = !isCollapsed;
});

window.onload = toggleText;
