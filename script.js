/* ===== PRODUCT DATA ===== */
const PRODUCTS = [
  { 
    id: 1, 
    title: 'Wireless Headphones', 
    price: 45, 
    msrp: 59, 
    category: 'electronics', 
    rating: 4.3, 
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Smart Watch', 
    price: 80, 
    msrp: 99, 
    category: 'electronics', 
    rating: 4.6, 
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop' 
  },
  { 
    id: 3, 
    title: "Men's T-Shirt", 
    price: 25, 
    msrp: 30, 
    category: 'clothing', 
    rating: 4.1, 
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop' 
  },
  { 
    id: 4, 
    title: "Women's Jacket", 
    price: 60, 
    msrp: 89, 
    category: 'clothing', 
    rating: 4.4, 
    img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop' 
  },
  { 
    id: 5, 
    title: 'Programming Book', 
    price: 35, 
    msrp: 49, 
    category: 'books', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=800&fit=crop' 
  },
  { 
    id: 6, 
    title: 'Fiction Novel', 
    price: 15, 
    msrp: 18, 
    category: 'books', 
    rating: 4.0, 
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=800&fit=crop' 
  },
  { 
    id: 7, 
    title: 'Coffee Maker', 
    price: 55, 
    msrp: 79, 
    category: 'home', 
    rating: 4.2, 
    img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&h=800&fit=crop' 
  },
  { 
    id: 8, 
    title: 'Bluetooth Speaker', 
    price: 40, 
    msrp: 59, 
    category: 'electronics', 
    rating: 4.5, 
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop' 
  },
  { 
    id: 9, 
    title: 'Ceramic Vase', 
    price: 28, 
    msrp: 35, 
    category: 'home', 
    rating: 4.0, 
    img: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=800&fit=crop' 
  },
  { 
    id: 10, 
    title: 'Cookbook - Easy Meals', 
    price: 22, 
    msrp: 29, 
    category: 'books', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&h=800&fit=crop' 
  },
  { 
    id: 11, 
    title: 'Lightweight Laptop (13")', 
    price: 699, 
    msrp: 899, 
    category: 'electronics', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop' 
  },
  { 
    id: 12, 
    title: 'Mirrorless Camera', 
    price: 549, 
    msrp: 699, 
    category: 'electronics', 
    rating: 4.5, 
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=800&fit=crop' 
  },
  { 
    id: 13, 
    title: 'Running Sneakers', 
    price: 79, 
    msrp: 119, 
    category: 'clothing', 
    rating: 4.4, 
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop' 
  },
  { 
    id: 14, 
    title: 'High-Speed Blender', 
    price: 120, 
    msrp: 159, 
    category: 'home', 
    rating: 4.6, 
    img: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&h=800&fit=crop' 
  },
  { 
    id: 15, 
    title: 'Classic Backpack', 
    price: 49, 
    msrp: 69, 
    category: 'accessories', 
    rating: 4.3, 
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop' 
  },
  { 
    id: 16, 
    title: 'Wireless Mouse', 
    price: 29, 
    msrp: 39, 
    category: 'electronics', 
    rating: 4.2, 
    img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop' 
  }
];

/* ===== STATE ===== */
const state = {
  query: '',
  categories: new Set(),
  priceRange: 'all',
  sortBy: 'featured',
  cart: {},
  theme: 'light'
};

/* ===== DOM ELEMENTS ===== */
const elements = {
  searchInput: document.getElementById('searchInput'),
  productsGrid: document.getElementById('productsGrid'),
  resultsTitle: document.getElementById('resultsTitle'),
  cartBtn: document.getElementById('cartBtn'),
  cartCount: document.getElementById('cartCount'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartOverlay: document.getElementById('cartOverlay'),
  closeCart: document.getElementById('closeCart'),
  cartItems: document.getElementById('cartItems'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  sortSelect: document.getElementById('sortSelect'),
  clearFilters: document.getElementById('clearFilters'),
  themeToggle: document.getElementById('themeToggle'),
  categoryCheckboxes: document.querySelectorAll('.filter-cat'),
  priceRadios: document.querySelectorAll('.filter-price')
};

/* ===== UTILITY FUNCTIONS ===== */
const escapeHtml = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

const formatPrice = (price) => `$${price.toFixed(2)}`;

/* ===== THEME ===== */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  state.theme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', state.theme);
  applyTheme();
}

/* ===== CART FUNCTIONS ===== */
function loadCart() {
  try {
    const saved = localStorage.getItem('mini-amazon-cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (error) {
    console.error('Failed to load cart:', error);
    state.cart = {};
  }
}

function saveCart() {
  localStorage.setItem('mini-amazon-cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const items = Object.values(state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  elements.cartCount.textContent = totalItems;
  elements.cartSubtotal.textContent = formatPrice(subtotal);
  
  if (items.length === 0) {
    elements.cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
  } else {
    elements.cartItems.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.product.id}">
        <img src="${item.product.img}" alt="${escapeHtml(item.product.title)}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-title">${escapeHtml(item.product.title)}</div>
          <div class="cart-item-controls">
            <div class="quantity-controls">
              <button class="qty-btn qty-dec" data-id="${item.product.id}">−</button>
              <div class="qty-value">${item.quantity}</div>
              <button class="qty-btn qty-inc" data-id="${item.product.id}">+</button>
            </div>
            <button class="btn-remove" data-id="${item.product.id}">Remove</button>
          </div>
          <div class="cart-item-price">${formatPrice(item.product.price * item.quantity)}</div>
        </div>
      </div>
    `).join('');
    
    // Attach event listeners
    document.querySelectorAll('.qty-inc').forEach(btn => {
      btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 1));
    });
    
    document.querySelectorAll('.qty-dec').forEach(btn => {
      btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), -1));
    });
    
    document.querySelectorAll('.btn-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
  }
  
  saveCart();
}

function addToCart(product) {
  if (state.cart[product.id]) {
    state.cart[product.id].quantity += 1;
  } else {
    state.cart[product.id] = { product, quantity: 1 };
  }
  updateCartUI();
  openCart();
  showNotification(`${product.title} added to cart!`);
}

function updateQuantity(productId, change) {
  if (state.cart[productId]) {
    state.cart[productId].quantity += change;
    if (state.cart[productId].quantity <= 0) {
      delete state.cart[productId];
    }
    updateCartUI();
  }
}

function removeFromCart(productId) {
  delete state.cart[productId];
  updateCartUI();
  showNotification('Item removed from cart');
}

function openCart() {
  elements.cartDrawer.classList.add('open');
  elements.cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  elements.cartDrawer.classList.remove('open');
  elements.cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== PRODUCT FILTERING & RENDERING ===== */
function filterAndRenderProducts() {
  let filtered = [...PRODUCTS];
  
  // Search filter
  if (state.query.trim()) {
    const query = state.query.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );
  }
  
  // Category filter
  if (state.categories.size > 0) {
    filtered = filtered.filter(p => state.categories.has(p.category));
  }
  
  // Price filter
  if (state.priceRange !== 'all') {
    const [min, max] = state.priceRange.split('-').map(Number);
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }
  
  // Sorting
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  }
  
  renderProducts(filtered);
}

function renderProducts(products) {
  elements.resultsTitle.textContent = `${products.length} Product${products.length !== 1 ? 's' : ''}`;
  
  if (products.length === 0) {
    elements.productsGrid.innerHTML = '<div class="empty-state">No products found matching your filters.</div>';
    return;
  }
  
  elements.productsGrid.innerHTML = products.map(product => {
    const hasDeal = product.msrp && product.price < product.msrp;
    return `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.img}" alt="${escapeHtml(product.title)}" loading="lazy">
          ${hasDeal ? '<div class="deal-badge">Deal</div>' : ''}
        </div>
        <div class="product-info">
          <h4 class="product-title">${escapeHtml(product.title)}</h4>
          <div class="product-rating">
            ⭐ <span>${product.rating.toFixed(1)}</span>
          </div>
          <div class="product-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.msrp ? `<span class="price-original">${formatPrice(product.msrp)}</span>` : ''}
          </div>
          <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </article>
    `;
  }).join('');
  
  // Attach event listeners to add to cart buttons
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = parseInt(btn.dataset.id);
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) addToCart(product);
    });
  });
}

/* ===== NOTIFICATION ===== */
function showNotification(message) {
  // Simple notification (you can enhance this)
  console.log('Notification:', message);
}

/* ===== EVENT LISTENERS ===== */
function initEventListeners() {
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Search
  let searchTimeout;
  elements.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.query = e.target.value;
      filterAndRenderProducts();
    }, 300);
  });
  
  // Category filters
  elements.categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        state.categories.add(e.target.value);
      } else {
        state.categories.delete(e.target.value);
      }
      filterAndRenderProducts();
    });
  });
  
  // Price filters
  elements.priceRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.priceRange = e.target.value;
      filterAndRenderProducts();
    });
  });
  
  // Sort
  elements.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    filterAndRenderProducts();
  });
  
  // Clear filters
  elements.clearFilters.addEventListener('click', () => {
    state.query = '';
    state.categories.clear();
    state.priceRange = 'all';
    state.sortBy = 'featured';
    
    elements.searchInput.value = '';
    elements.categoryCheckboxes.forEach(cb => cb.checked = false);
    elements.priceRadios.forEach(rb => rb.checked = rb.value === 'all');
    elements.sortSelect.value = 'featured';
    
    filterAndRenderProducts();
  });
  
  // Cart
  elements.cartBtn.addEventListener('click', openCart);
  elements.closeCart.addEventListener('click', closeCart);
  elements.cartOverlay.addEventListener('click', closeCart);
  
  elements.checkoutBtn.addEventListener('click', () => {
    alert('Checkout is demo only. In a real app, this would proceed to payment.');
  });
  
  // ESC key to close cart
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
}

/* ===== INITIALIZATION ===== */
function init() {
  initTheme();
  loadCart();
  updateCartUI();
  filterAndRenderProducts();
  initEventListeners();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}