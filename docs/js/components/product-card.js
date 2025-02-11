class ProductCard extends HTMLElement {
    constructor() {
        super();
        const selectedProduct = this.getAttribute("productid") ? products.find(product => product.id === this.getAttribute("productid")) : null;
        if (selectedProduct)
            this.innerHTML = `
                <div class="p-4 border-2 bg-[#2F2F2F] border-white rounded-md">
                    <h2 class="font-bold text-4xl text-white text-center">
                        ${selectedProduct.name}
                    </h2>
                    <p class="text-white text-center text-2xl">
                        ${selectedProduct.discountPrice ? `<span class="text-[#d15988] line-through">${selectedProduct.price}€</span> ${selectedProduct.discountPrice}€` : `${selectedProduct.price}€`}
                    </p>
                    <hr class="border-white text-3xl my-1 w-[50%] mx-auto">
                    <div class="text-white font-semibold">
                        ${selectedProduct.fields ? this.insertFields(selectedProduct.fields) : `<p class="text-center">Nessuna caratteristica<p/>`}
                    </div>
                </div>
                `;
    }
    insertFields(fields) {
        return fields.map(field => `<p>${field.emoji} ${field.name}</p><hr class="border-white my-1 mx-auto">`).join("");
    }
}

customElements.define('product-card', ProductCard);