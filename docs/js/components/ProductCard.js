class ProductCard {
    constructor({id, name, description, price, category}) {
        this.template =
        `<div class="product flex flex-col p-4 justify-between bg-slate-900 rounded-md border-2 border-gray-500">
            <b>{name}</b>
            <p class="text-gray-300">{description}</p>
            <p class="text-gray-300 text-lg">{price}€</p>
            <button productid={productId} class="productInfo bg-gray-600 p-2 rounded-lg text-white font-medium">Informativa</button>
        </div>`;
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
    render() {
        return this.template.replace("{productId}", this.id).replace("{name}", this.name).replace("{description}", this.description || "Nessuna descrizione presente").replace("{price}", this.price);
    }
}