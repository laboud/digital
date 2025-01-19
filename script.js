function buyProduct(productName, price) {
    alert(`You have selected "${productName}" for $${price}.`);
  }
  
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    form.reset();
  });