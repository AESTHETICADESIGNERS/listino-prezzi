function caricaProdotti(category, offerte) {
    console.log(offerte);
    if (offerte) {
        productsDiv.innerHTML = productsCards.filter(pc => pc?.discountPrice).map(pc => pc.render()).join("");
    } else if (!category) {
        productsDiv.innerHTML = productsCards.map(pc => pc.render()).join("");
    } else {
        productsDiv.innerHTML = productsCards.filter(pc => pc.category === category).map(pc => pc.render()).join("");
    }
    addEventListenerProductsInfoButtons();
}

function filterByName(name) {
    if (!name) {
        productsDiv.innerHTML = productsCards.map(pc => pc.render()).join("");
    } else {
        productsDiv.innerHTML = productsCards.filter(pc => pc.name.toLowerCase().includes(name.toLowerCase())).map(pc => pc.render()).join("");
    }
    addEventListenerProductsInfoButtons();
}

const randomID = (len) => {
    let id = "";
    for (let i = 0; i < len; i++) {
        const charCode = 65 + Math.floor(Math.random() * (90 - 65));// 65 - 90
        id += String.fromCharCode(charCode);
    }
    return id;
}

const addEventListenerProductsInfoButtons = () => {
    // Aggiungo l'evento on click sul bottone info per ogni prodotto
    const productsInfoButtons = Array.from(document.getElementsByClassName("productInfo"));
    productsInfoButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const productId = e.target.getAttribute("productid");
            const product = productsList.find(product => product.id == productId);

            const productModal = product?.discountPrice ? new DealProductModal(product) : new ProductModal(product);

            productModalDiv.innerHTML = productModal.render();

            // Aggiungo l'azione close al bottone con la X
            const modalCloseButton = document.getElementById("closeProductModal");

            modalCloseButton.addEventListener("click", (e) => {
                productModalDiv.innerHTML = "";
            });
        });
    });
}
/*
    PRODUCTS CARDS
*/

const productsList = [
    { "id": "IEHKOOBLXC", "name": "Logo piccolo", "description": "", "price": "Da 2 a 10", "discountPrice": "3", "category": "logo" },
    { "id": "YKSOWLXJKA", "name": "Banner piccolo", "description": "", "price": "0", "discountPrice": "", "category": "banner" },
    { "id": "ODNODKADMD", "name": "Server", "description": "", "price": "0", "discountPrice": "", "category": "discord" },
    { "id": "PVBEIGBFUW", "name": "Background", "description": "", "price": "0", "discountPrice": "", "category": "twitch" },
    { "id": "WUKNMTDIVH", "name": "Emoji", "description": "", "price": "0", "discountPrice": "", "category": "emoji" },
    { "id": "OHRFLLGXKN", "name": "Facecam", "description": "", "price": "12", "discountPrice": "", "category": "banner" },
    { "id": "WMBLWCSXGN", "name": "Info panel", "description": "", "price": "0", "discountPrice": "", "category": "twitch" },
    { "id": "AJRHETLJGX", "name": "icon", "description": "", "price": "0", "discountPrice": "", "category": "youtube" },
    { "id": "YLUXNGYNOP", "name": "Banner", "description": "", "price": "0", "discountPrice": "", "category": "youtube" }
];

const productsCards = productsList.map((product) => product?.discountPrice ? new DealProductCard(product) : new ProductCard(product));
const productsDiv = document.getElementById("products");

const searchProducts = document.getElementById("searchproducts");
searchProducts.addEventListener("input", (e) => {
    filterByName(e.target.value);
});

productsDiv.innerHTML = productsCards.map(pc => pc.render()).join("");

/*
    PRODUCTS CARDS
*/

/*
    PRODUCTS MODAL
*/

const productModalDiv = document.getElementById("productModalDiv");

addEventListenerProductsInfoButtons();

/*
    PRODUCTS MODAL
*/

/*
    PRODUCTS CATEGORIES
*/

const categoriesButtons = Array.from(document.getElementById("categories").getElementsByTagName("button"));

categoriesButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Per tutti i bottoni imposto il colore di sfondo di default e l'hover
        categoriesButtons.forEach(btn => {
            if (btn.getAttribute("alwaysActive")==="true") return;
            // Tolgo le classi del bottone attivo
            btn.classList.remove("bg-[#913c3c]");
            // Aggiungo le classi del bottone di default
            btn.classList.add("bg-gray-600");
            btn.classList.add("hover:bg-gray-700");
        });
        // Aggiungo il colore attivo al bottone appena cliccato
        button.classList.add("bg-[#913c3c]");
        // Rimuovo il colore non attivo
        button.classList.remove("bg-gray-600");
        // Rimuovo l'hover
        button.classList.remove("hover:bg-gray-700");
    });
});

/*
    PRODUCTS CATEGORIES
*/