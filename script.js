// Mobile menu 
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.add('hidden');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobile-menu');
  const menuButton = document.getElementById('menu-toggle');
  
  if (!menu.contains(event.target) && !menuButton.contains(event.target) && !menu.classList.contains('hidden')) {
      closeMenu();
  }
});




// Email protection function
function revealEmail(element) {
  const name = element.getAttribute('data-name');
  const domain = element.getAttribute('data-domain');
  const tld = element.getAttribute('data-tld');
  
  const email = `${name}@${domain}.${tld}`;
  element.innerHTML = email;
  element.setAttribute('href', `mailto:${email}`);
  element.className = 'hover:text-primary';
  element.removeAttribute('onclick');
}

// Phone protection function
function revealPhone(element) {
  const phone = element.getAttribute('data-phone');
  element.innerHTML = phone;
  
  // Create a new anchor element
  const link = document.createElement('a');
  link.href = `tel:${phone.replace(/[\s\-\u2011]/g, '')}`;
  link.className = 'hover:text-primary';
  link.textContent = phone;
  
  // Replace the span with the anchor
  element.parentNode.replaceChild(link, element);
}

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('backToTop');
  
  // Initially hide the button
  backToTopButton.style.opacity = '0';
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.style.opacity = '1';
    } else {
      backToTopButton.style.opacity = '0';
    }
  });
  
  // Scroll to top when clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
