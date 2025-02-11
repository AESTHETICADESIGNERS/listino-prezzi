const navbar = document.getElementsByTagName('dynamo-navbar')[0];

console.log(navbar);

const products = [
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
        ],
        "recommended": 0
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
        ],
        "recommended": 2
    }
];