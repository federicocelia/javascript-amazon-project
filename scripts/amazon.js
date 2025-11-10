import { products, loadProducts } from "../data/products.js"; // Import the products array from the products data file
import { cart, addToCart } from "../data/cart.js"; // Import the cart array from the cart data file
import { formatCurrency } from "./utils/money.js"; // Import the formatCurrency utility function from the money file

loadProducts(renderProductsGrid); // Load products data

function renderProductsGrid() {
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
              src="${product.getStarsUrl()}"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">${product.getPrice()}</div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector" data-product-id="${
              product.id
            }">
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

          ${product.extraInfoHTML()}  

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

  function updateCartQuantity() {
    let cartQuantity = 0; // Initialize cart quantity

    cart.forEach((cartItem) => {
      // Loop through each item in the cart
      cartQuantity += cartItem.quantity;
    }); // Calculate total quantity in cart

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity; // Update cart quantity display
  }

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    // Select all "Add to Cart" buttons and loop through each
    button.addEventListener("click", () => {
      // Add a click event listener to each button
      const productId = button.dataset.productId; // Get the product ID from the button's data attribute
      // Find the corresponding quantity selector
      const quantitySelector = document.querySelector(
        `.js-quantity-selector[data-product-id="${productId}"]`
      );

      const selectedQuantity = parseInt(quantitySelector.value);

      addToCart(productId, selectedQuantity);
      updateCartQuantity();
    });
  });
}
