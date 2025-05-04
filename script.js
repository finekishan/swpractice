const products = [
    { name: "Smartphone", price: 699 },
    { name: "T-shirt", price: 19 },
    { name: "Book", price: 12 },
    { name: "Shoes", price: 49 }
  ];
  
  const productList = document.getElementById("product-list");
  const cartItems = [];
  const cartCount = document.getElementById("cart-count");
  const cartModal = document.getElementById("cart-modal");
  const cartList = document.getElementById("cart-items");
  
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
  
  function addToCart(name, price) {
    cartItems.push({ name, price });
    cartCount.textContent = cartItems.length;
  }
  
  function showCart() {
    cartList.innerHTML = "";
    if (cartItems.length === 0) {
      cartList.innerHTML = "<li>No items in cart.</li>";
    } else {
      cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
      });
    }
    cartModal.classList.remove("hidden");
  }
  
  function closeCart() {
    cartModal.classList.add("hidden");
  }
  