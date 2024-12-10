class Product {
    constructor(name, description, price, category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}

class ProductCard {
    constructor(product, template) {
        this.product = product;
        this.template = template;
    }
    render() {
        return this.template.replace("{name}", this.product.name).replace("{description}", this.product.description || "Nessuna descrizione presente").replace("{price}", this.product.price);
    }
}

function filterByCategory(category) {
    if (!category) {
        productsDiv.innerHTML = productsCards.map(pc => pc.render()).join("");
        return;
    }
    productsDiv.innerHTML = productsCards.filter(pc => pc.product.category === category).map(pc => pc.render()).join("");
}

function filterByName(name) {
    if (!name) {
        productsDiv.innerHTML = productsCards.map(pc => pc.render()).join("");
        return;
    }
    productsDiv.innerHTML = productsCards.filter(pc => pc.product.name.toLowerCase().includes(name.toLowerCase())).map(pc => pc.render()).join("");
}

const productsList = [
    {
        "name": "Logo personalizzato",
        "description": "",
        "price": "Da 2 a 10",
        "category": "grafiche"
    },
    {
        "name": "Banner Personalizzato",
        "description": "",
        "price": "0",
        "category": "grafiche"
    },
    {
        "name": "Server Discord",
        "description": "",
        "price": "0",
        "category": "grafiche"
    },
    {
        "name": "Twitch Banner",
        "description": "",
        "price": "0",
        "category": "grafiche"
    },
    {
        "name": "Emoji",
        "description": "",
        "price": "0",
        "category": "grafiche"
    },
    {
        "name": "Facecam Banner",
        "description": "",
        "price": "0",
        "category": "grafiche"
    },
    {
        "name": "Info panel Twitch",
        "description": "",
        "price": "0",
        "category": "grafiche"
    },
    {
        "name": "Youtube icon",
        "description": "",
        "price": "0",
        "category": "grafiche"
    },
    {
        "name": "Youtube Banner",
        "description": "",
        "price": "0",
        "category": "grafiche"
    }
];

const evosProductList = [
    {
        "id": 8,
        "name": "Pack divise formali Polizia di Stato",
        "price": "32.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "35.50",
        "description": null
    },
    {
        "id": 9,
        "name": "Divisa reparto mobile Polizia di Stato",
        "price": "18.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "93.00",
        "description": null
    },
    {
        "id": 10,
        "name": "Polo maniche corte Polizia di Stato reparto Stradale",
        "price": "17.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 11,
        "name": "Divisa invernale Polizia di Stato V3",
        "price": "16.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 12,
        "name": "Polo Lunga Polizia di Stato",
        "price": "12.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 13,
        "name": "Divisa estiva Polizia di Stato V3",
        "price": "14.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 14,
        "name": "Divisa drop ispettore in su Polizia di Stato",
        "price": "10.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 15,
        "name": "Cinturone Polizia di Stato V3 - adattato per le vostre divise",
        "price": "5.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 16,
        "name": "Fondina Polizia di Stato",
        "price": "3.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 17,
        "name": "Divisa baschi verdi - G.A.P. Sempre incluso",
        "price": "16.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 18,
        "name": "Divisa Generale Guardia di Finanza",
        "price": "13.50",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 19,
        "name": "Drop Guardia di Finanza",
        "price": "8.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 20,
        "name": "Divisa GUS",
        "price": "39.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 21,
        "name": "Divisa cacciatori",
        "price": "15.50",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 22,
        "name": "Divisa cinofili",
        "price": "17.50",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 23,
        "name": "Divisa impermeabile - Arma dei Carabinieri",
        "price": "16.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 24,
        "name": "Divisa C.I.O - Arma dei Carabinieri",
        "price": "19.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 25,
        "name": "Divisa Forestale - Arma dei Carabinieri",
        "price": "16.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 26,
        "name": "Divisa Stazione Carabinieri - con gradi inclusi - add-on",
        "price": "16.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 27,
        "name": "Divisa NORM V3",
        "price": "15.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 28,
        "name": "Divisa Generale Arma dei Carabinieri",
        "price": "12.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 29,
        "name": "Camicia estiva",
        "price": "12.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 30,
        "name": "Divisa Comandante di stazione",
        "price": "8.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 31,
        "name": "Drop Arma dei Carabinieri [Truppa e Marescialli]",
        "price": "10.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 32,
        "name": "Drop Arma dei Carabinieri Ufficiali",
        "price": "10.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 33,
        "name": "Divisa BLACK GIS",
        "price": "5.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 34,
        "name": "Divisa vegecam GIS",
        "price": "5.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 35,
        "name": "Divisa Od green GIS",
        "price": "5.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 36,
        "name": "Polo negoziatore",
        "price": "0.00",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 37,
        "name": "Divisa operativa Vigili del Fuoco",
        "price": "9.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 38,
        "name": "Divisa formale Vigili del Fuoco",
        "price": "10.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 39,
        "name": "Divisa formale dirigenti Vigili del Fuoco",
        "price": "12.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 40,
        "name": "Divisa estiva polizia locale - comune di Milano",
        "price": "9.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 41,
        "name": "Divisa estiva polizia locale UOMO e DONNA - comune di Roma",
        "price": "22.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 42,
        "name": "Pack divise drop Polizia Locale - comune di Milano",
        "price": "14.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 43,
        "name": "Divisa Elisoccorso Tecnico",
        "price": "12.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 44,
        "name": "Divisa CRI v1",
        "price": "4.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 45,
        "name": "Polo N.U.E - Regione Lazio",
        "price": "2.50",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 46,
        "name": "Divisa Folgore EI",
        "price": "8.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 47,
        "name": "Divisa Formale EI - Folgore",
        "price": "10.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 48,
        "name": "Pack Maglioni",
        "price": "10.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 49,
        "name": "Patch operatori taser F.D.O",
        "price": "7.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 50,
        "name": "Pack Cappelli generali",
        "price": "6.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 51,
        "name": "Pack divise LVIRP",
        "price": "49.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 52,
        "name": "Ospedale Umberto Primo",
        "price": "19.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 53,
        "name": "Ospedale Niguarda Ca'Granda | altre configurazioni",
        "price": "18.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 54,
        "name": "Ospedale HUMANITAS",
        "price": "19.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 55,
        "name": "ASST Santi Paolo e Carlo",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 56,
        "name": "ASL Roma 1",
        "price": "8.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 57,
        "name": "Rimessa ambulanze Croce Rossa Italiana",
        "price": "2.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 58,
        "name": "Farmacia Comunale",
        "price": "4.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 59,
        "name": "Questura Polizia di Stato - Roma",
        "price": "19.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 60,
        "name": "Questura Polizia di Stato - Generica",
        "price": "14.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 61,
        "name": "Questura Polizia di Stato - Milano",
        "price": "13.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 62,
        "name": "Commissariato Polizia Stradale",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 63,
        "name": "Caserma Arma dei Carabinieri - Pillbox",
        "price": "23.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 64,
        "name": "Caserma Arma dei Carabinieri - tutte regioni disponibili",
        "price": "19.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 65,
        "name": "Stazione Guardia di Finanza - Generica",
        "price": "18.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 66,
        "name": "MLO Vigili de fuoco - Milano",
        "price": "24.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 67,
        "name": "Caserma Vigili del Fuoco - Generica",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 68,
        "name": "Hard Rock Cafe",
        "price": "14.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 69,
        "name": "Museo della cultura Greca e Romana",
        "price": "24.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 70,
        "name": "Concessionaria AutoScout24 - Generico",
        "price": "12.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 71,
        "name": "Concessionario Auto & Moto Cerutti Gino",
        "price": "12.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 72,
        "name": "Piazza Sempione - Arco della Pace",
        "price": "24.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 73,
        "name": "L.O.V.E. - P.zz degli Affari",
        "price": "69.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 74,
        "name": "Parco Margherita - Bar - Armeria XGun",
        "price": "89.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 75,
        "name": "Zona residenziale Roma - RomalPol - Allianz - Bar",
        "price": "134.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 76,
        "name": "Autosalone Milano",
        "price": "5.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 77,
        "name": "Armeria TopGun | solo esterno",
        "price": "4.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 78,
        "name": "Armeria Franco Magrioli | solo esterno",
        "price": "4.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 79,
        "name": "Armeria Franco Magrioli since 1899 | MLO",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 80,
        "name": "MLO Battistoli",
        "price": "14.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 81,
        "name": "Comando Polizia Locale - Milano",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 82,
        "name": "Comando Polizia Locale - Roma",
        "price": "13.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 83,
        "name": "Comando Polizia Locale - Torino",
        "price": "13.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 84,
        "name": "Comando Polizia Locale - Milano",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 85,
        "name": "Aci Global - ogni singola tipologia",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 86,
        "name": "Officina - Laurentina Aci Global",
        "price": "12.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 87,
        "name": "Centro commerciale Bennet",
        "price": "9.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 88,
        "name": "Rotonde x4 centro cittá",
        "price": "2.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 89,
        "name": "Fontanella Milano + 0,10cent per ogni fontanella piazzata su richiesta",
        "price": "0.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 90,
        "name": "Pack Velocar | Defibrillatore",
        "price": "6.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 91,
        "name": "Cantiere FTTH",
        "price": "3.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 92,
        "name": "Polveriera Brigata specialistica logistica “Granatieri di sardegna”",
        "price": "19.99",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 93,
        "name": "Corso Mapper [LIFEITEM]",
        "price": "19.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 94,
        "name": "Patreon 64 slot [Prezzo mensile]",
        "price": "8.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 95,
        "name": "Evos Lamp",
        "price": "14.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 96,
        "name": "Evos Scuola guida",
        "price": "12.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 97,
        "name": "Pack Evos Scuola guida",
        "price": "18.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 98,
        "name": "Pack Arma dei Carabinieri",
        "price": "109.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 99,
        "name": "Pack Guardia di Finanza",
        "price": "69.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 100,
        "name": "EUP Pack Arma dei Carabinieri",
        "price": "99.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 101,
        "name": "Pack Cinofili",
        "price": "34.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 102,
        "name": "Pack Vigili del Fuoco",
        "price": "59.99",
        "category": "Other",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 103,
        "name": "Silvio Berlusconi - Ped",
        "price": "11.99",
        "category": "Ped",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 104,
        "name": "Sergio Mattarella - Ped",
        "price": "16.99",
        "category": "Ped",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 105,
        "name": "Sylvester Stallone - Ped",
        "price": "44.99",
        "category": "Ped",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 106,
        "name": "Skoda Superb - Polizia di Stato Strdale",
        "price": "12.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 107,
        "name": "Skoda Octavia - Polizia di Stato Strdale",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 108,
        "name": "Tesla Model X - Polizia di Stato",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 109,
        "name": "Land Rover Defender 110 - Polizia di Stato Reparto Mobile",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 110,
        "name": "Citroen C3 Polizia di Stato",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 111,
        "name": "Tonale Polizia di Stato",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 112,
        "name": "Giulia Polizia di Stato",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 113,
        "name": "Giulia Polizia di Stato Reparto Stradale",
        "price": "19.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 114,
        "name": "Fiat Tipo Polizia di Stato - 2022",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 115,
        "name": "Fiat Tipo Polizia di Stato - 2016",
        "price": "7.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 116,
        "name": "Alfa Romeo 159 SW Polizia di Stato",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 117,
        "name": "Defender 110 Polizia di Stato",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 118,
        "name": "Fiat Punto Polizia di Stato",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 119,
        "name": "F31 Polizia di Stato",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 120,
        "name": "Ducato Trasporto Personale",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 121,
        "name": "BMW X5 NOCS",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 122,
        "name": "AW139 Polizia di Stato",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 123,
        "name": "Giulietta Polizia Penitenziaria",
        "price": "8.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 124,
        "name": "Yaris Polizia Penitenziaria",
        "price": "8.50",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 125,
        "name": "Tonale Guardia di Finanza",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 126,
        "name": "Jeep Renegade Latitude 2.0 GDF",
        "price": "12.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 127,
        "name": "Fiat Tipo Guardia di Finanza - 2016",
        "price": "12.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 128,
        "name": "Land Rover Defender 110 - Guardia Di Finanza",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 129,
        "name": "Fiat Punto Guardia di Finanza",
        "price": "9.90",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 130,
        "name": "Giulietta Guardia di Finanza",
        "price": "8.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 131,
        "name": "AW139 Guardia di Finanza",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 132,
        "name": "Alfa Romeo Tonale Arma dei Carabinieri",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 133,
        "name": "Mitsubishi i-MIEV Arma dei Carabinieri",
        "price": "8.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 134,
        "name": "Fiat Ducato Arma dei Carabinieri",
        "price": "23.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 135,
        "name": "Fiat Tipo Arma dei Carabinieri - 2022",
        "price": "14.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 136,
        "name": "GIULIA CARABINIERI N.O.R.M",
        "price": "14.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 137,
        "name": "Fiat Tipo Arma dei Carabinieri - 2016",
        "price": "12.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 138,
        "name": "JEEP RENEGADE LATITUDE 2.0 Arma dei Carabinieri",
        "price": "12.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 139,
        "name": "ALFA ROMEO 159 SW CARABINIERI",
        "price": "11.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 140,
        "name": "159 CARABINIERI 2.0",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 141,
        "name": "FIAT PANDA 4X4 CARABINIERI",
        "price": "8.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 142,
        "name": "FIAT PUNTO CARABINIERI v2",
        "price": "5.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 143,
        "name": "Fiat Ducato Arma dei Carabinieri concept | Trasporto personale",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 144,
        "name": "AW139 Arma dei Carabinieri",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 145,
        "name": "DUCATI MULTISTRADA 1200 2.0",
        "price": "3.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 146,
        "name": "RG-12 [Blindato]",
        "price": "2.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 147,
        "name": "Fiat IVECO 190 APS",
        "price": "14.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 148,
        "name": "Fiat Tipo Vigili del Fuoco - 2022",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 149,
        "name": "Isuzu D-Max Vigili del fuoco",
        "price": "8.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 150,
        "name": "AW139 Vigili del fuoco",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 151,
        "name": "Fiat Ducato CRI V5",
        "price": "29.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 152,
        "name": "Fiat Ducato CRI V4",
        "price": "24.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 153,
        "name": "Fiat Ducato CRI V3",
        "price": "20.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 154,
        "name": "Fiat Ducato CRI V2",
        "price": "18.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 155,
        "name": "Fiat Ducato ARES V1",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 156,
        "name": "Fiat Ducato CRI V1",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 157,
        "name": "PANDA 4X4 CROCE ROSSA ITALIANA",
        "price": "5.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 158,
        "name": "Fiat Ducato L2H2 - Croce Rossa Italiana [Logistica]",
        "price": "13.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 159,
        "name": "Fiat Tipo - Polizia Locale Comune di Milano",
        "price": "5.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 160,
        "name": "Fiat Punto nuova - Polizia Locale Milano",
        "price": "5.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 161,
        "name": "Porsche Macan - Polizia Locale Comune di Milano",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 162,
        "name": "Fiat Punto - Polizia Locale Comune di Milano",
        "price": "3.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 163,
        "name": "Fiat Tipo Polizia Municipale comune di Napoli",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 164,
        "name": "Fiat Punto Polizia Municipale comune di Napoli",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 165,
        "name": "Seat Leon Polizia Locale",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 166,
        "name": "Fiat Ducato Stazione Mobile",
        "price": "14.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 167,
        "name": "159 Sport Wagon POLIZIA LOCALE DI MILANO",
        "price": "5.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 168,
        "name": "Fiat 500e",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 169,
        "name": "Fiat Punto Guardia costiera",
        "price": "3.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 170,
        "name": "Fiat Panda Guardia costiera",
        "price": "3.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 171,
        "name": "Pack Tonale [CC, GdiF, PDS] anziché 60 eur",
        "price": "24.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 172,
        "name": "Ducato mediaset - Speciale Silvio",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 173,
        "name": "Pack aw139",
        "price": "15.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 174,
        "name": "Volkswagen e-up scuola guida",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 175,
        "name": "Jeep Cherokee - Civetta",
        "price": "7.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 176,
        "name": "Fiat Tipo 2016 Civetta",
        "price": "9.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 177,
        "name": "Fiat Tipo 2022 Civetta",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 178,
        "name": "Fiat Punto Civetta",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": null,
        "description": null
    },
    {
        "id": 180,
        "name": "G.A.P. Forze dell'ordine",
        "price": "6.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 184,
        "name": "Divisa Motociclista - Polizia di Stato",
        "price": "24.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "Inclusi 21 qualifiche reali Polizia di Stato, torso, pantalone nuovo modello stivali moto, nuovo casco moto, cinturone V4, e pack add-on [2802]."
    },
    {
        "id": 185,
        "name": "Pack Polo - Polizia di Stato",
        "price": "32.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "Inclusi 21 qualifiche reali Polizia di Stato, 20 patch di vari reparti (alcune doppie in plastica e stoffa), torso polo muscolosa, 3 pantaloni (operativi, formali, stivali attillati), cappello, cinturone V4, e pack add-on [2802]."
    },
    {
        "id": 186,
        "name": "Divisa estiva polo - Marina Militare",
        "price": "5.99",
        "category": "Divise",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "24 gradi, pantaloni, pack add-on 2802"
    },
    {
        "id": 196,
        "name": "Fiat Punto - RomalPol",
        "price": "4.99",
        "category": "Veicoli",
        "imageUrl": "uploads/5.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "Add-on | Ottimizzata"
    },
    {
        "id": 197,
        "name": "Fiat Tipo - RomalPol",
        "price": "6.99",
        "category": "Veicoli",
        "imageUrl": "uploads/2t.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "Add-on | Ottimizzata"
    },
    {
        "id": 198,
        "name": "Pack RomalPol",
        "price": "11.98",
        "category": "Veicoli",
        "imageUrl": null,
        "is_on_sale": 1,
        "discount_price": "10.00",
        "description": "Include: Fiat Tipo RomalPol, Fiat Punto Romalpol"
    },
    {
        "id": 199,
        "name": "Armeria xGun",
        "price": "44.99",
        "category": "MLO",
        "imageUrl": "uploads/1_xgun.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 200,
        "name": "Evos Rockstar Editor Service",
        "price": "6.99",
        "category": "Other",
        "imageUrl": "uploads/editor.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "A partire da soli 6,99€"
    },
    {
        "id": 201,
        "name": "Evos Discord Create Service",
        "price": "2.99",
        "category": "Other",
        "imageUrl": "uploads/serverds.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "Crea il tuo server Discord FiveM a partire da 2,99€"
    },
    {
        "id": 202,
        "name": "Evos Debadge Service",
        "price": "2.50",
        "category": "Other",
        "imageUrl": "uploads/deb.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "A partire da 2,50€/veicolo"
    },
    {
        "id": 203,
        "name": "Pack auto civili",
        "price": "130.00",
        "category": "Veicoli",
        "imageUrl": "uploads/PACK copia.png",
        "is_on_sale": 1,
        "discount_price": "70.00",
        "description": "INCLUDE: Seat Leon 2020, Giulia 2024, Peugeot 308 Hybrid 2024, Toyota Yaris 2022, Alfa Romeo Tonale, Renault Clio, Fiat Punto 2016, Peugeot 208"
    },
    {
        "id": 204,
        "name": "Bunde Pack Banche - Banca Sella & Intesa Sanpaolo",
        "price": "32.99",
        "category": "MLO",
        "imageUrl": "uploads/Uscita.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "Include entrambe le banche, distribuite su tutta la mappa di Los Santos. Le texture e i modelli 3D sono ottimizzati, con un peso totale inferiore ai 23 MB. Nel nostro Discord (discord.evosmodding.it) puoi trovare la lista completa delle YMAP utilizzate, per identificare in anticipo eventuali conflitti e discuterne direttamente con il nostro staff."
    },
    {
        "id": 205,
        "name": "DeniCar Concessionario",
        "price": "7.99",
        "category": "MLO",
        "imageUrl": "uploads/1.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "La mappa \"DeniCar\" per FiveM offre un moderno concessionario di automobili con interni eleganti, spazi espositivi di lusso e dettagli realistici. Perfetta per creare scenari urbani immersivi, questa mappa è ideale per server roleplay che cercano un ambiente professionale e curato."
    },
    {
        "id": 206,
        "name": "test",
        "price": "13.00",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": "testtest"
    },
    {
        "id": 207,
        "name": "Banca Sella sede Centrale",
        "price": "18.90",
        "category": "MLO",
        "imageUrl": null,
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    },
    {
        "id": 208,
        "name": "Peugeot 208 2021 Polizia di Stato",
        "price": "13.99",
        "category": "Veicoli",
        "imageUrl": "uploads/peeeeg.png",
        "is_on_sale": 0,
        "discount_price": "0.00",
        "description": null
    }
];

const cardTemplate = `<div class="product p-4 bg-slate-900 rounded-md border-2 border-gray-500">
                <b>{name}</b>
                <p class="text-gray-300 my-2">{description}</p>
                <p class="text-gray-300 text-lg my-2">{price}€</p>
                <button class="bg-gray-600 p-2 rounded-lg text-white font-medium">Informazioni</button>
              </div>`;

const productsCards = productsList.map(product => new ProductCard(product, cardTemplate));

const productsDiv = document.getElementById("products");

const searchProducts = document.getElementById("searchproducts");

searchProducts.addEventListener("input", (e) => {
    filterByName(e.target.value);
});

productsDiv.innerHTML = productsCards.map(pc => pc.render()).join("");