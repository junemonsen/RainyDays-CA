// Add this code to your cart.js file

document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cart');
    const totalSpan = document.getElementById('total');
  
    // Event delegation for "Remove" buttons in the cart
    cartContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('remove-item')) {
        removeCartItem(event.target.parentElement);
      }
    });
  
    // Remove item from the cart
    function removeCartItem(cartItem) {
      cartItem.remove();
      updateTotal();
    }
  
    // Update the total based on cart contents
    function updateTotal() {
      let total = 0;
      const cartItems = cartContainer.querySelectorAll('li');
  
      cartItems.forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
        total += price * quantity;
      });
  
      totalSpan.textContent = total.toFixed(2);
    }
  
    // Example: Add an item to the cart
    // You should modify this function based on your specific product details
    function addToCart(productId, productName, productPrice) {
      const existingItem = document.querySelector(`#cart li[data-id="${productId}"]`);
  
      if (existingItem) {
        // Increment quantity if item is already in the cart
        const quantitySpan = existingItem.querySelector('.quantity');
        const quantity = parseInt(quantitySpan.textContent, 10) + 1;
        quantitySpan.textContent = quantity;
  
      } else {
        // Add new item to the cart
        const cartItem = document.createElement('li');
        cartItem.dataset.id = productId;
        cartItem.dataset.price = productPrice;
  
        cartItem.innerHTML = `
          ${productName} - $${productPrice.toFixed(2)}
          <span class="quantity">1</span>
          <button class="remove-item">Remove</button>
        `;
  
        cartContainer.appendChild(cartItem);
      }
  
      // Update the total
      updateTotal();
    }
  
    // Example: Add a sample item to the cart on page load
    addToCart('1', 'Sample Product', 20.00);
  });
  