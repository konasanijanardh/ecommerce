// Sample product data (you should replace this with your actual product data)
const products = [
  { id: 1, name: "Chain bucket bag", price: 150 },
  // Add more product data here...
];

const cart = []; // Array to store added products

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
      cart.push(product);
      updateCartDisplay();
  }
}

// Function to update cart display on the cart page
function updateCartDisplay() {
  const cartTable = document.getElementById("cart").getElementsByTagName("tbody")[0];
  cartTable.innerHTML = "";

  cart.forEach(product => {
      const row = cartTable.insertRow();
      row.innerHTML = `
          <td class="cart__product__item">${product.name}</td>
          <td class="cart__price">$ ${product.price}</td>
          <td class="cart__quantity">
              <div class="pro-qty">
                  <input type="text" value="1">
              </div>
          </td>
          <td class="cart__total">$ ${product.price}</td>
          <td class="cart__close"><span class="icon_close"></span></td>
      `;
  });

  // Update cart total and other details here...
}

// Example usage: Add to cart button click event
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
      const productId = parseInt(button.getAttribute("data-product-id"));
      addToCart(productId);
  });
});
