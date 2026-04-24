let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - R" + item.price;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = "Total: R" + total;
}

function placeOrder(e) {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

displayCart();

const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});