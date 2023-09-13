

function handleHeaderColorChange() {
    const scrollPosition = (window.scrollY / window.innerHeight) * 100;
    const header = document.querySelector('.nav-bar');
    if (scrollPosition > 90) {
      header.classList.add('header-dark'); // Přidá třídu pro tmavý režim
    } else {
      header.classList.remove('header-dark'); // Odebere třídu pro tmavý režim
    }
  }
  
  // Nasloucháme události scroll pro změnu barvy headeru
  window.addEventListener('scroll', handleHeaderColorChange);
  console.log('Hello world!')


