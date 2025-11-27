class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .nav-link {
          transition: all 0.3s ease;
          position: relative;
          padding: 0.75rem 1rem;
          margin: 0 0.25rem;
          border-radius: 0.5rem;
          color: #374151;
          font-weight: 500;
        }
        .nav-link:hover {
          color: #16a34a;
          background-color: #f0fdf4;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0.25rem;
          left: 1rem;
          right: 1rem;
          background-color: #16a34a;
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: calc(100% - 2rem);
        }
        .active-link {
          color: #16a34a;
          background-color: #f0fdf4;
        }
        .active-link::after {
          content: '';
          position: absolute;
          width: calc(100% - 2rem);
          height: 2px;
          bottom: 0.25rem;
          left: 1rem;
          right: 1rem;
          background-color: #16a34a;
          border-radius: 2px;
        }
.mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .mobile-menu.open {
          max-height: 500px;
        }
      </style>
      <nav class="navbar sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <div class="hidden md:flex items-center space-x-8">
              <a href="index.html" class="nav-link text-gray-700 font-medium active-link">Home</a>
              <a href="about.html" class="nav-link text-gray-700 font-medium">About</a>
              <a href="about.html#team" class="nav-link text-gray-700 font-medium">Our Team</a>
              <a href="policies.html" class="nav-link text-gray-700 font-medium">Policies</a>
              <a href="press.html" class="nav-link text-gray-700 font-medium">Press</a>
</div>
<button id="mobile-menu-button" class="md:hidden text-gray-700">
              <i data-feather="menu"></i>
            </button>
          </div>
          
          <div id="mobile-menu" class="mobile-menu md:hidden">
            <div class="pt-4 pb-2 space-y-3">
              <a href="index.html" class="block nav-link text-gray-700 font-medium py-2 active-link">Home</a>
              <a href="about.html" class="block nav-link text-gray-700 font-medium py-2">About</a>
              <a href="policies.html" class="block nav-link text-gray-700 font-medium py-2">Policies</a>
              <a href="press.html" class="block nav-link text-gray-700 font-medium py-2">Press</a>
</div>
          </div>
        </div>
      </nav>
    `;
    
    // Mobile menu toggle functionality
    const menuButton = this.shadowRoot.getElementById('mobile-menu-button');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
