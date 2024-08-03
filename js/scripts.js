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
        {
            name: "Erigo Oversized T-Shirt",
            description: "Rp150.000",
            image: "images/product16.jpg"
        },
        {
            name: "3Second Hoodie",
            description: "Rp350.000",
            image: "images/product17.jpg"
        },
        {
            name: "Roughneck 1991 Denim Jacket",
            description: "Rp500.000",
            image: "images/product18.jpg"
        },
        {
            name: "Brodo Derby Shoes",
            description: "Rp700.000",
            image: "images/product19.jpg"
        },
        {
            name: "Eiger Adventure Backpack",
            description: "Rp450.000",
            image: "images/product20.jpg"
        },
        {
            name: "Samsung Galaxy S24",
            description: "Rp15.000.000",
            image: "images/product21.jpg"
        },
        {
            name: "Apple iPhone 15",
            description: "Rp20.000.000",
            image: "images/product22.jpg"
        },
        {
            name: "Google Pixel 8",
            description: "Rp12.000.000",
            image: "images/product23.jpg"
        },
        {
            name: "OnePlus 12",
            description: "Rp10.000.000",
            image: "images/product24.jpg"
        },
        {
            name: "Xiaomi Mi 14",
            description: "Rp8.000.000",
            image: "images/product25.png"
        },
        {
            name: "MacBook Pro 2024",
            description: "Rp30.000.000",
            image: "images/product26.jpg"
        },
        {
            name: "Dell XPS 15 2024",
            description: "Rp25.000.000",
            image: "images/product27.jpg"
        },
        {
            name: "HP Spectre x360 2024",
            description: "Rp22.000.000",
            image: "images/product28.jpg"
        },
        {
            name: "Asus ROG Zephyrus G14 2024",
            description: "Free",
            image: "images/product29.png"
        },
        {
            name: "Lenovo ThinkPad X1 Carbon 2024",
            description: "Rp27.000.000",
            image: "images/product30.jpg"
        },
        {
            name: "LG UltraGear 27GN950",
            description: "Rp10.000.000",
            image: "images/product31.jpg"
        },
        {
            name: "Samsung Odyssey G9",
            description: "Rp20.000.000",
            image: "images/product32.jpg"
        },
        {
            name: "ASUS ROG Swift PG259QN",
            description: "Rp15.000.000",
            image: "images/product33.jpg"
        },
        {
            name: "Dell Alienware AW3420DW",
            description: "Rp18.000.000",
            image: "images/product34.jpg"
        },
        {
            name: "Acer Predator X27",
            description: "Rp25.000.000",
            image: "images/product35.jpg"
        },
        {
            name: "DJI Mavic Air 2",
            description: "Rp15.000.000",
            image: "images/product36.jpg"
        },
        {
            name: "DJI Phantom 4 Pro",
            description: "Rp20.000.000",
            image: "images/product37.jpg"
        },
        {
            name: "Parrot Anafi",
            description: "Rp10.000.000",
            image: "images/product38.jpg"
        },
        {
            name: "Autel Robotics EVO II",
            description: "Rp18.000.000",
            image: "images/product39.jpg"
        },
        {
            name: "Skydio 2",
            description: "Rp12.000.000",
            image: "images/product40.jpg"
        },
        {
            name: "Canon EOS R5",
            description: "Rp50.000.000",
            image: "images/product41.png"
        },
        {
            name: "Nikon Z7 II",
            description: "Rp45.000.000",
            image: "images/product42.jpg"
        },
        {
            name: "Sony Alpha 7R IV",
            description: "Rp55.000.000",
            image: "images/product43.png"
        },
        {
            name: "Fujifilm X-T4",
            description: "Rp30.000.000",
            image: "images/product44.jpg"
        },
        {
            name: "Panasonic Lumix S1R",
            description: "Rp40.000.000",
            image: "images/product45.jpg"
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
