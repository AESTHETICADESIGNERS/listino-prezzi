class ProductsCards extends HTMLElement {
    constructor() {
        super();
        this.loadProducts(this.getAttribute("category"));
    }
    loadProducts(category) {
        console.log(category);
        const selectedProducts = category ? products.filter(product => product.category === category) : products;
        selectedProducts.forEach(product => {
            const productCard = document.createElement('product-card');
            productCard.setAttribute("productid", product.id);
            this.appendChild(productCard);
        });
    }
}

customElements.define('products-cards', ProductsCards);