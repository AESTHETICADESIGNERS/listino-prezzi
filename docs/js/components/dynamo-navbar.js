class DynamoNavbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="bg-[#2F2F2F] h-[60px] w-full flex items-center justify-center sticky top-0">
            <div class="h-[50px] w-[150px] md:ml-[60px]"><img src="./images/logo+scritta.png"></div>
            <ul class="hidden md:flex mx-auto text-white font-bold uppercase gap-[35px]">
                <li><a class="" href="#home">home</a></li>
                <li><a class="" href="#grafiche">grafiche</a></li>
                <li><a class="" href="#scripts">scripts</a></li>
                <li><a class="" href="#offerte">offerte</a></li>
            </ul>
        </div>
        `;
        this.activatedLinkColor = "text-[#ff6900]";
        this.links = Array.from(this.getElementsByTagName("li"));
        this.activateLink("home");
        // Aggiungo l'evento onclick per tutti i li
        this.links.forEach((link) => {
            link.addEventListener("click", (e) => {
                this.resetLinksColor();
                this.activateLink(link.innerText);
            });
        })
    }
    activateLink(name) {
        const linkToActivate = this.links.find(link => link.innerText.toLowerCase() === name.toLowerCase());
        linkToActivate.classList.add(this.activatedLinkColor);
    }
    resetLinksColor() {
        this.links.forEach((link) => {
            link.classList.remove(this.activatedLinkColor);
        });
    }
}

customElements.define('dynamo-navbar', DynamoNavbar);