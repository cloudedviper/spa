// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
  
    function loadContent(page) {
      fetch(page + '.html')
        .then(response => response.text())
        .then(html => {
          mainContent.innerHTML = html;
        })
        .catch(error => console.error('Error fetching content:', error));
    }
  
    function navigate(event) {
      event.preventDefault();
      const page = event.target.getAttribute('href').substring(1);
      history.pushState(null, null, '#' + page);
      loadContent(page);
    }
  
    // Initial content load based on URL hash
    const initialPage = location.hash ? location.hash.substring(1) : 'home';
    loadContent(initialPage);
  
    // Event listeners for navigation
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', navigate);
    });
  
    // Event listener for back/forward navigation
    window.addEventListener('popstate', () => {
      const page = location.hash ? location.hash.substring(1) : 'home';
      loadContent(page);
    });
  });
  