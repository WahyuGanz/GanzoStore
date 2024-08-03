document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: "Aerostreet Massive Low Hitam Natural",
            description: "Rp159.000",
            image: "images/product1.jpg"
        },
        {
            name: "Aerostreet T-Shirt Miko Hitam",
            description: "Rp69.000.00",
            image: "images/product2.jpg"
        },
        {
            name: "Aerostreet Army Hitam",
            description: "Rp79.000",
            image: "images/product3.jpg"
        },
        {
            name: "Aerostreet Jogger Long Pants Nathan Krem",
            description: "Rp139.900",
            image: "images/product4.jpg"
        },
        {
            name: "Scarlett Whitening Body Lotion",
            description: "Rp57.200",
            image: "images/product5.jpg"
        },
        {
            name: "Kahf Skin Energizing and Brightening Face Wash 100 ml",
            description: "Rp42.500",
            image: "images/product6.jpg"
        },
        {
            name: "KAHF Gentle Exfoliating Face Scrub 100 ml",
            description: "Rp35.400",
            image: "images/product7.jpg"
        },
        {
            name: "SKINTIFIC 5X Ceramide Barrier Repair Moisturize",
            description: "Rp230.000",
            image: "images/product8.jpg"
        },
        {
            name: "Hooligans Bag Gullit Black",
            description: "Rp105.000",
            image: "images/product9.jpg"
        },
        {
            name: "Rexus HX20 RGB Light Mic",
            description: "Rp419.000",
            image: "images/product10.jpg"
        },
        {
            name: "PlayStation 5",
            description: "Rp10.563.420",
            image: "images/product11.jpg"
        },
        {
            name: "Nike Air Max 270",
            description: "Rp2.300.000",
            image: "images/product12.jpg"
        },
        {
            name: "Adidas Ultraboost 21",
            description: "Rp3.000.000",
            image: "images/product13.jpg"
        },
        {
            name: "Samsung Galaxy S21",
            description: "Rp12.000.000",
            image: "images/product14.jpg"
        },
        {
            name: "Apple MacBook Pro 13",
            description: "Rp25.000.000",
            image: "images/product15.jpg"
        },
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
        }, 2000);
    }
    // Tambahkan JavaScript untuk menampilkan pop-up secara otomatis
    var popupMobile = document.getElementById('popup-mobile');
    popupMobile.style.display = 'block';
    setTimeout(function() {
        popupMobile.style.display = 'none';
    }, 5000); // Pop-up akan menghilang setelah 5 detik
});
