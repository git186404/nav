/**
 * WebNav Hub - Main JavaScript
 * Ukraine Theme Navigation System
 * 🇺🇦 Blue & Yellow Theme
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initSmoothScrolling();
  initHashChangeHandler();
});

/**
 * Initialize navigation functionality
 * Handles click events on navigation links
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Prevent default anchor behavior
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));

      // Add active class to clicked link
      this.classList.add('active');

      // Get target section ID
      const targetId = this.getAttribute('href').split('#')[1];
      const targetElement = document.getElementById(targetId);

      // Smooth scroll to target element
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Update URL without page reload
        const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${targetId}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
      }
    });
  });
}

/**
 * Initialize smooth scrolling
 * Handles navigation through browser history
 */
function initSmoothScrolling() {
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function(event) {
    if (event.state && event.state.path) {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          updateActiveNavLink(hash);
        }
      }
    }
  });
}

/**
 * Initialize hash change handler
 * Updates active navigation state when URL hash changes
 */
function initHashChangeHandler() {
  // Handle hash changes
  window.addEventListener('hashchange', handleHashChange);

  // Check hash on initial page load
  handleHashChange();
}

/**
 * Handle URL hash changes
 * Updates scroll position and active navigation state
 */
function handleHashChange() {
  const hash = window.location.hash;

  if (hash) {
    // Get target element
    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Smooth scroll to element
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Update active navigation link
      updateActiveNavLink(hash);
    }
  } else {
    // Remove active class if no hash
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(l => l.classList.remove('active'));
  }
}

/**
 * Update active navigation link based on current hash
 * @param {string} hash - The current URL hash
 */
function updateActiveNavLink(hash) {
  const activeLink = document.querySelector(`nav a[href="${hash}"]`);

  if (activeLink) {
    // Remove active class from all links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(l => l.classList.remove('active'));

    // Add active class to matching link
    activeLink.classList.add('active');
  }
}

/**
 * Scroll spy - Update active link based on scroll position
 * Automatically highlights the current section in viewport
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('.category-title[id]');
  const navLinks = document.querySelectorAll('nav a');

  // Intersection Observer for better performance
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);

        if (activeLink) {
          navLinks.forEach(l => l.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach(function(section) {
    observer.observe(section);
  });
}

// Initialize scroll spy after a short delay
setTimeout(initScrollSpy, 100);

/**
 * Utility function to animate elements on scroll
 * Can be extended for more animations
 */
function initScrollAnimations() {
  const cards = document.querySelectorAll('.link-card');

  // Simple animation when cards come into view
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(function(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Initialize scroll animations
initScrollAnimations();

/**
 * Add keyboard navigation support
 * Improve accessibility
 */
document.addEventListener('keydown', function(e) {
  // Press '1'-'6' to navigate to corresponding category
  if (e.key >= '1' && e.key <= '6') {
    const navLinks = document.querySelectorAll('nav a');
    const index = parseInt(e.key) - 1;
    if (navLinks[index]) {
      navLinks[index].click();
    }
  }

  // Press 'Home' to scroll to top
  if (e.key === 'Home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

/**
 * Console welcome message
 */
console.log('%c🇺🇦 WebNav Hub - Ukraine Theme', 'color: #FFDD00; font-size: 20px; font-weight: bold;');
console.log('%cBlue & Yellow Navigation System', 'color: #0057B7; font-size: 14px;');
console.log('%cPress 1-6 to navigate to categories', 'color: #888; font-size: 12px;');
