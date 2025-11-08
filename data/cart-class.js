class Cart {
  cartItems; // short for cartItems = undefined;
  localStorageKey; // short for localStorageKey = undefined;

  constructor(localStrorageKey) {
    this.localStorageKey = localStrorageKey;

    this.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem; // Variable to track if the product is already in the cart

    this.cartItems.forEach((cartItem) => {
      // Loop through each item in the cart
      if (productId === cartItem.productId) {
        // Check if the product ID matches the current cart item's product ID
        matchingItem = cartItem; // If a match is found, assign the cart item to matchingItem
      }
    });

    if (matchingItem) {
      // If the product is already in the cart
      matchingItem.quantity += 1; // Increment the quantity of the existing cart item
    } else {
      // If the product is not in the cart
      this.cartItems.push({
        // Add a new item to the cart
        productId: productId, // Set the product ID
        quantity: 1, // Set the initial quantity to 1
        deliveryOptionId: "1",
      });
    }
    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItemsrt = newCart;
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem; // Variable to track if the product is already in the cart

    this.cartItems.forEach((cartItem) => {
      // Loop through each item in the cart
      if (productId === cartItem.productId) {
        // Check if the product ID matches the current cart item's product ID
        matchingItem = cartItem; // If a match is found, assign the cart item to matchingItem
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
}

const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

console.log(cart);
console.log(businessCart);
