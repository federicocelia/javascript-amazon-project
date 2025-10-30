const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

function addToCart(productId) {
  let matchingItem; // Variable to track if the product is already in the cart

  cart.forEach((cartItem) => {
    // Loop through each item in the cart
    if (productId === cartItem.productId) {
      // Check if the product ID matches the current cart item's product ID
    }
    matchingItem = cartItem; // If a match is found, assign the cart item to matchingItem
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
}

export { cart, addToCart };
