
function handleHeaderColorChange() {
    const header = document.querySelector('.nav-bar');
    if (window.scrollY > 780) {
      header.classList.add('header-dark'); // Přidá třídu pro tmavý režim
    } else {
      header.classList.remove('header-dark'); // Odebere třídu pro tmavý režim
    }
  }
  
  // Nasloucháme události scroll pro změnu barvy headeru
  window.addEventListener('scroll', handleHeaderColorChange);
  console.log('Hello world!')


