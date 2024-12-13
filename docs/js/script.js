function filterByCategory(category) {
    if (!category) {
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

            const productModal = new ProductModal(product);

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
    { "id": "IEHKOOBLXC", "name": "Logo personalizzato", "description": "", "price": "Da 2 a 10", "category": "logo" },
    { "id": "YKSOWLXJKA", "name": "Banner Personalizzato", "description": "", "price": "0", "category": "grafiche" },
    { "id": "ODNODKADMD", "name": "Server Discord", "description": "", "price": "0", "category": "grafiche" },
    { "id": "PVBEIGBFUW", "name": "Twitch Banner", "description": "", "price": "0", "category": "grafiche" },
    { "id": "WUKNMTDIVH", "name": "Emoji", "description": "", "price": "0", "category": "grafiche" },
    { "id": "OHRFLLGXKN", "name": "Facecam Banner", "description": "", "price": "0", "category": "grafiche" },
    { "id": "WMBLWCSXGN", "name": "Info panel Twitch", "description": "", "price": "0", "category": "grafiche" },
    { "id": "AJRHETLJGX", "name": "Youtube icon", "description": "", "price": "0", "category": "grafiche" },
    { "id": "YLUXNGYNOP", "name": "Youtube Banner", "description": "", "price": "0", "category": "grafiche" }
];

const productsCards = productsList.map((product) => new ProductCard(product));

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

const categoriesDiv = document.getElementById("categories");
const categoriesButtons = Array.from(categoriesDiv.getElementsByTagName("button"));

// Aggiungo event listener per ogni bottone in modo da aggiungere il colore alla categoria selezionata

categoriesButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Elimino la classe "bg-[#913c3c]" a tutti i pulsanti e aggiungo l'hover
        categoriesButtons.forEach(btn => {
            // Rimuovo lo sfondo attivo
            btn.classList.remove("bg-[#913c3c]");
            // Aggiungo quello di default
            btn.classList.add("hover:bg-gray-700");
            btn.classList.add("bg-gray-600");
        });
        // Aggiungo la classe al pulsante che è stato cliccato e rimuovo l'hover
        e.target.classList.add("bg-[#913c3c]");
        e.target.classList.remove("hover:bg-gray-700");
    });
});

/*
    PRODUCTS CATEGORIES
*/