const navbar = document.getElementsByTagName('dynamo-navbar')[0];

console.log(navbar);

const products = [
    { "id": "IEHKOOBLXC", "name": "Logo piccolo", "description": "", "price": "Da 2 a 10", "discountPrice": "3", "category": "logo", "fields": [{ "emoji": "⬇️", "name": "Costo basso"}, { "emoji": "📁", "name": "File PSD"}] },
    { "id": "YKSOWLXJKA", "name": "Banner piccolo", "description": "", "price": "0", "discountPrice": "", "category": "banner" },
    { "id": "ODNODKADMD", "name": "Server", "description": "", "price": "0", "discountPrice": "", "category": "discord" },
    { "id": "PVBEIGBFUW", "name": "Background", "description": "", "price": "0", "discountPrice": "", "category": "twitch" },
    { "id": "WUKNMTDIVH", "name": "Emoji", "description": "", "price": "0", "discountPrice": "", "category": "emoji" },
    { "id": "OHRFLLGXKN", "name": "Facecam", "description": "", "price": "12", "discountPrice": "", "category": "banner" },
    { "id": "WMBLWCSXGN", "name": "Info panel", "description": "", "price": "0", "discountPrice": "", "category": "twitch" },
    { "id": "AJRHETLJGX", "name": "icon", "description": "", "price": "0", "discountPrice": "", "category": "youtube" },
    { "id": "YLUXNGYNOP", "name": "Banner", "description": "", "price": "0", "discountPrice": "", "category": "youtube" },
    { "id": "FJGHFUGHUFIG", "name": "TEST2", "description": "", "price": "0", "discountPrice": "", "category": "youtube" }
];

const productsTest = [
    { 
        "id": "IEHKOOBLXC",
        "name": "Logo piccolo",
        "description": "Logo perfetto per chi non vuole esagerare", 
        "price": "2", 
        "discountPrice": "1", 
        "category": "logo", 
        "fields": [
            {
                "emoji": "⬇️",
                "name": "Costo basso"
            }, 
            {
                "emoji": "📁",
                "name": "File PSD"
            }
        ]
    },
    { 
        "id": "IDJFIJDIFHUD",
        "name": "Logo grande",
        "description": "Logo perfetto per chi non vuole esagerare", 
        "price": "5", 
        "discountPrice": "3", 
        "category": "discord", 
        "fields": [
            {
                "emoji": "⬇️",
                "name": "Costo basso"
            }, 
            {
                "emoji": "📁",
                "name": "File PSD"
            }
        ]
    }
];