class DealProductModal {
    constructor({id, name, description, price, discountPrice, category}) {
        this.template =
        `<div class="z-10 bg-gray-600/50 h-screen w-screen fixed flex flex-col justify-center items-center">
            <div class="w-fit p-4 bg-[#913c3c] rounded-md border-2 border-red-600">
                <svg id="closeProductModal" class="fill-white relative cursor-pointer ml-auto" width="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                <b class="text-white">{name}</b>
                <p class="text-white my-2">{description}</p>
                <p class="text-white text-lg my-2">Prezzo: <p><span class="text-gray-300 text-lg line-through">{price}€</span><span class="text-gray-300 ml-4 text-xl font-semibold">{discountPrice}€</span></p>
                <p class="text-white text-lg my-2">Categoria: {category}</p>
                <div class="flex justify-center">
                    <button productid={productId} class="productInfo bg-red-500 p-2 rounded-lg text-white font-medium"><a href="https://discord.gg/3jhpqBgB6d">Acquista</a></button>
                </div>
            </div>
         </div>`;
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discountPrice = discountPrice;
        this.category = category;
    }
    render() {
        return this.template.replace("{category}", this.category.toUpperCase()).replace("{name}", this.name).replace("{description}", this.description || "Nessuna descrizione presente").replace("{price}", this.price).replace("{discountPrice}", this.discountPrice);
    }
}