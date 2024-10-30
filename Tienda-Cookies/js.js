let cart = JSON.parse(localStorage.getItem("cart")) || {};

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});

function addToCart(productId) {
  const product = document.querySelector(`.product[id="${productId}"]`);
  const name = product.getAttribute("name");
  const price = parseFloat(product.getAttribute("price"));

  if (cart[productId]) {
    cart[productId].quantity += 1;
  } else {
    cart[productId] = { name, price, quantity: 1 };
  }
  
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  if (cart[productId]) {
    cart[productId].quantity -= 1;
    if (cart[productId].quantity <= 0) {
      delete cart[productId];
    }
    saveCart();
    renderCart();
  }
}

function emptyCart() {
  cart = {};
  saveCart();
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  
  Object.keys(cart).forEach(productId => {
    const { name, price, quantity } = cart[productId];
    const item = document.createElement("li");
    item.innerHTML = `
      ${name} - $${price} x ${quantity}
      <button onclick="removeFromCart(${productId})">Eliminar</button>
    `;
    cartItems.appendChild(item);
  });
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}