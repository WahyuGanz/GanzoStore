document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: "Aerostreet Massive Low Hitam Natural",
            description: "Rp159.000.00",
            image: "images/product1.jpg"
        },
        {
            name: "Aerostreet T-Shirt Miko Hitam",
            description: "Rp69.000.00",
            image: "images/product2.jpg"
        },
        {
            name: "Aerostreet Army Hitam",
            description: "Rp79.000.00",
            image: "images/product3.jpg"
        }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productButton = document.createElement('button');
        productButton.textContent = "Tambah ke Keranjang";
        productButton.addEventListener('click', function() {
            showPopup(`${product.name} telah ditambahkan ke keranjang.`);
        });

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productButton);

        productList.appendChild(productDiv);
    });

    function showPopup(message) {
        const popup = document.getElementById('popup');
        popup.textContent = message;
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1000);
    }
    // Tambahkan JavaScript untuk menampilkan pop-up secara otomatis
    var popupMobile = document.getElementById('popup-mobile');
    popupMobile.style.display = 'block';
    setTimeout(function() {
        popupMobile.style.display = 'none';
    }, 5000); // Pop-up akan menghilang setelah 5 detik
});
