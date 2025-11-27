class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background-color: #f8fafc;
        }
        .footer-link {
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #16a34a;
        }
      </style>
      <footer class="footer border-t border-gray-200 mt-24">
        <div class="container mx-auto px-4 py-12">
<div class="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-600 mb-4 md:mb-0">© 2023 TrueLink. All rights reserved.</p>
</div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
