const poundsIn = document.querySelector('.pounds');
const grams  = document.querySelector('.grams-val');
const kilos = document.querySelector('.kilograms-val');
const ounces = document.querySelector('.ounces-val');

poundsIn.addEventListener('input', () => {
    poundsVal = poundsIn.value;
    grams.innerHTML = poundsVal * 453.59237;
    kilos.innerHTML = poundsVal * 0.45359237;
    ounces.innerHTML = poundsVal * 16;
}); 


// 1 pound = 453.59237 grams
// 1 pound = 0.45359237 kilograms
// 1 pound = 16 ounces