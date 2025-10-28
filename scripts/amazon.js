let productsHTML = ""; // Initialize an empty string to hold the HTML for products

products.forEach((product) => {
  // Loop through each product in the products array
  productsHTML += `
            <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${(product.priceCents / 100).toFixed(
            2
          )}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">Add to Cart</button>
        </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML; // Insert the products HTML into the products grid container

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  // Select all "Add to Cart" buttons and loop through each
  button.addEventListener("click", () => {
    // Add a click event listener to each button
    const productId = button.dataset.productId; // Get the product ID from the button's data attribute

    let matchingItem; // Variable to track if the product is already in the cart

    cart.forEach((item) => {
      // Loop through each item in the cart
      if (productId === item.productId) {
        // Check if the product ID matches the current cart item's product ID
      }
      matchingItem = item; // If a match is found, assign the cart item to matchingItem
    });

    if (matchingItem) {
      // If the product is already in the cart
      matchingItem.quantity += 1; // Increment the quantity of the existing cart item
    } else {
      // If the product is not in the cart
      cart.push({
        // Add a new item to the cart
        productId: productId, // Set the product ID
        quantity: 1, // Set the initial quantity to 1
      });
    }

    let cartQuantity = 0; // Initialize cart quantity

    cart.forEach((item) => {
      // Loop through each item in the cart
      cartQuantity += item.quantity;
    }); // Calculate total quantity in cart

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity; // Update cart quantity display
  });
});
