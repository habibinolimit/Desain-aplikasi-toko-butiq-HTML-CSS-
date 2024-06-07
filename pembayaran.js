let cartItems = [];
let totalItems = 0;
let totalPrice = 0;

function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price,
        quantity: 1
    };

    const existingItem = cartItems.find(cartItem => cartItem.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push(item);
    }

    updateCart();
}

function updateCart() {
    totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    updateUI();
}

function updateUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');

    // Hapus semua elemen di dalam cart-items sebelum menambah yang baru
    cartItemsElement.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="path/to/product-image.jpg" alt="Product Image">
            <div class="item-details">
                <h2>${item.name}</h2>
                <p>Harga: Rp. ${item.price}</p>
                <p>Jumlah: ${item.quantity}</p>
                <p>Total: Rp. ${item.price * item.quantity}</p>
            </div>
        `;
        cartItemsElement.appendChild(cartItemElement);
    });

    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice;
}

function processPayment() {
    // Logika untuk proses pembayaran
    console.log('Proses pembayaran...');
}
