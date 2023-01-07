const orderSubmit = document.querySelector('.submit');
const paymentBox = document.querySelector('.payment-box');
const removeCard = document.querySelector('.remove-card');
const back = document.querySelector('.back-msg');
const confirmOrder = document.querySelector('.confirm');
const sucessMsg = document.querySelector('.success-msg');
const invoice = document.querySelector('.invoice');


orderSubmit.addEventListener('click', () => {
    paymentBox.style.display = 'none';
    removeCard.style.display = 'block';
})

back.addEventListener('click', () => {
    paymentBox.style.display = 'block';
    removeCard.style.display = 'none';
})

confirmOrder.addEventListener('click', () => {
    removeCard.style.display = 'none';
    sucessMsg.style.display = 'block';

    setInterval(() => {
        sucessMsg.style.display = 'none';
        invoice.style.display = 'block';
    }, 2000)
})