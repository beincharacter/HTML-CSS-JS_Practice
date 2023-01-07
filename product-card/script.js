const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('mouseenter', () => {
    const productId = card.querySelector('.product-id');
    const productDetails = card.querySelector('.product-details');

    productId.style.display = 'none';
    productDetails.classList.remove('hide');
  });

  card.addEventListener('mouseleave', () => {
    const productId = card.querySelector('.product-id');
    const productDetails = card.querySelector('.product-details');

    productId.style.display = 'block';
    productDetails.classList.add('hide');
  });
}
