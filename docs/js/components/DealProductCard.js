class DealProductCard {
    constructor({id, name, description, price, discountPrice, category}) {
        this.template =
        `<div class="product flex flex-col p-4 justify-between bg-[#913c3c] rounded-md border-2 border-red-600">
            <b>{name}</b>
            <p class="text-gray-300">{description}</p>
            <p><span class="text-gray-300 text-lg line-through">{price}€</span><span class="text-white ml-4 text-xl font-semibold">{discountPrice}€</span></p>
            <button productid={productId} class="productInfo bg-red-500 p-2 rounded-lg text-white font-medium">Informativa</button>
        </div>`;
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discountPrice = discountPrice;
        this.category = category;
    }
    render() {
        return this.template.replace("{productId}", this.id).replace("{name}", this.name).replace("{description}", this.description || "Nessuna descrizione presente").replace("{price}", this.price).replace("{discountPrice}", this.discountPrice);
    }
}