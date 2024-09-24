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
        {
            name: "Samsung 970 EVO Plus",
            description: "Rp2.500.000",
            image: "images/ssd1.png"
        },
        {
            name: "WD Black SN750",
            description: "Rp3.000.000",
            image: "images/ssd2.png"
        },
        {
            name: "Corsair Force MP510",
            description: "Rp2.000.000",
            image: "images/ssd3.png"
        },
        {
            name: "ADATA XPG SX8200",
            description: "Rp1.800.000",
            image: "images/ssd4.jpg"
        },
        {
            name: "Kingston A2000",
            description: "Rp1.500.000",
            image: "images/ssd5.jpg"
        },
        {
            name: "ASUS RT-AC86U",
            description: "Rp3.500.000",
            image: "images/router1.png"
        },
        {
            name: "TP-Link Archer AX6000",
            description: "Rp2.500.000",
            image: "images/router2.jpg"
        },
        {
            name: "Netgear Nighthawk RAX80",
            description: "Rp4.000.000",
            image: "images/router3.jpg"
        },
        {
            name: "Linksys EA8300",
            description: "Rp2.000.000",
            image: "images/router4.png"
        },
        {
            name: "D-Link DIR-882",
            description: "Rp1.800.000",
            image: "images/router5.jpg"
        },
        {
            name: "Samsung QLED 4K",
            description: "Rp15.000.000",
            image: "images/tv1.png"
        },
        {
            name: "LG OLED C9",
            description: "Rp20.000.000",
            image: "images/tv2.jpg"
        },
        {
            name: "Sony Bravia 4K",
            description: "Rp12.000.000",
            image: "images/tv3.png"
        },
        {
            name: "TCL 4K UHD",
            description: "Rp8.000.000",
            image: "images/tv4.jpg"
        },
        {
            name: "Hisense Laser TV",
            description: "Rp18.000.000",
            image: "images/tv5.png"
        },
        {
            name: "ASUS PRIME Z390-A",
            description: "Rp3.500.000",
            image: "images/motherboard1.png"
        },
        {
            name: "MSI MPG Z390 GAMING PLUS",
            description: "Rp3.000.000",
            image: "images/motherboard2.jpg"
        },
        {
            name: "GIGABYTE Z390 AORUS MASTER",
            description: "Rp4.000.000",
            image: "images/motherboard3.jpg"
        },
        {
            name: "ASROCK Z390 EXTREME",
            description: "Rp2.500.000",
            image: "images/motherboard4.jpg"
        },
        {
            name: "ASUS PRIME X570-UD",
            description: "Rp4.500.000",
            image: "images/motherboard5.jpg"
        },
        {
            name: "AMD Ryzen 9 5900X",
            description: "Rp15.000.000",
            image: "images/cpu1.jpg"
        },
        {
            name: "Intel Core i9-11900K",
            description: "Rp18.000.000",
            image: "images/cpu2.jpg"
        },
        {
            name: "AMD Ryzen 7 5800X",
            description: "Rp10.000.000",
            image: "images/cpu3.jpg"
        },
        {
            name: "Intel Core i7-11700K",
            description: "Rp12.000.000",
            image: "images/cpu4.jpg"
        },
        {
            name: "AMD Ryzen 5 5600X",
            description: "Rp8.000.000",
            image: "images/cpu5.jpg"
        },
        {
            name: "Western Digital Caviar Blue 1TB",
            description: "Rp1.500.000",
            image: "images/hdd1.jpg"
        },
        {
            name: "Seagate BarraCuda 2TB",
            description: "Rp2.500.000",
            image: "images/hdd2.jpg"
        },
        {
            name: "Toshiba X300 12TB",
            description: "Rp3.500.000",
            image: "images/hdd3.jpg"
        },
        {
            name: "WD Black 4TB",
            description: "Rp4.500.000",
            image: "images/hdd4.jpg"
        },
        {
            name: "Seagate IronWolf 6TB",
            description: "Rp6.000.000",
            image: "images/hdd5.jpg"
        },
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('a');
        productImage.href = `informasi-produk/${product.name}.html`;
        productImage.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

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
