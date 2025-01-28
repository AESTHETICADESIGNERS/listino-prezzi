class ProductCard extends HTMLElement {
    constructor() {
        super();
        const selectedProduct = this.getAttribute("productid") ? products.find(product => product.id === this.getAttribute("productid")) : null;
        if (selectedProduct)
            this.innerHTML = `
                <div class="p-4 border-2 bg-[#2F2F2F] border-white rounded-md">
                    <div class=""></div>
                    <h2 class="font-bold text-white">
                        ${selectedProduct.name}
                    </h2>
                </div>
                `;
    }
}

customElements.define('product-card', ProductCard);