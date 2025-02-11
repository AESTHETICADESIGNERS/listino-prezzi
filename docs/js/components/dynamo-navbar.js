class DynamoNavbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="z-10 bg-[#2F2F2F] h-[60px] w-full flex items-center justify-center md:justify-start sticky top-0">
            <div class="menu-toggle h-[50px] w-[150px] md:ml-[60px] md:mr-[60px]"><img src="./images/logo+scritta.png"></div>
            <ul class="hidden md:flex text-white font-bold uppercase gap-[35px]">
                <li><a class="desktop-link" href="./index.html">home</a></li>
                <li><a class="desktop-link" href="./grafiche.html">grafiche</a></li>
                <li><a class="desktop-link"href="./scripts.html">scripts</a></li>
                <li><a class="desktop-link" href="./offerte.html">offerte</a></li>
            </ul>
        </div>
        <div class="menu-mobile -translate-x-full transition-all duration-[1.5s] md:hidden fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#3f3f40]">
            <ul class="text-center text-6xl font-semibold flex flex-col gap-8 text-white uppercase">
                <li><a class="mobile-link" href="./index.html">home</a></li>
                <li><a class="mobile-link" href="./grafiche.html">grafiche</a></li>
                <li><a class="mobile-link" href="./scripts.html">scripts</a></li>
                <li><a class="mobile-link" href="./offerte.html">offerte</a></li>
            </ul>
        </div>
        `;
        this.linkActivatedColor = "text-[#d15988]";
        this.linkHoverColor = "hover:text-[#de87a8]";

        // Aggiungo a tutti i link a la classe per l'hover
        Array.from(this.getElementsByTagName("a")).forEach(link => link.classList.add(this.linkHoverColor));

        this.desktopLinks = Array.from(this.getElementsByClassName("desktop-link"));
        this.mobileLinks = Array.from(this.getElementsByClassName("mobile-link"));
        // Aggiungo il link attivo di default
        this.activateLink(this.desktopLinks, this.getAttribute("selected"));
        this.activateLink(this.mobileLinks, this.getAttribute("selected"));
        // Aggiungo l'evento onclick per tutti i li
        this.addEventListenerToLinks(this.desktopLinks);
        this.addEventListenerToLinks(this.mobileLinks);
        this.mobileMenuVisible = false;
        // Aggiungo l'event listener al div per aprire il menu
        this.getElementsByClassName("menu-toggle")[0].addEventListener("click", () => {
            const mobileMenu = this.getElementsByClassName("menu-mobile")[0];
            if (!this.mobileMenuVisible) {
                mobileMenu.classList.remove("-translate-x-full");
                this.mobileMenuVisible = !this.mobileMenuVisible;
            } else {
                mobileMenu.classList.add("-translate-x-full");
                this.mobileMenuVisible = !this.mobileMenuVisible;
            }
        });
    }
    addEventListenerToLinks(links) {
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                // Resetto i colori di tutti i link sia desktop che mobile
                this.resetLinksColor(this.desktopLinks);
                this.resetLinksColor(this.mobileLinks);
                // Attivo lo stesso link con lo stesso nome sia su desktop che mobile
                this.activateLink(this.desktopLinks, link.innerText);
                this.activateLink(this.mobileLinks, link.innerText);
            });
        });
    }
    activateLink(links, name) {
        const linkToActivate = links.find(link => link.innerText.toLowerCase() === name.toLowerCase());
        // Tolgo la classe hover
        linkToActivate.classList.remove(this.linkHoverColor);
        // Aggiungo la classe per il colore attivo
        linkToActivate.classList.add(this.linkActivatedColor);
    }
    resetLinksColor(links) {
        links.forEach((link) => {
            link.classList.remove(this.linkActivatedColor);
            link.classList.add(this.linkHoverColor);
        });
    }
}

customElements.define('dynamo-navbar', DynamoNavbar);