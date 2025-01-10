class SimpleCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="p-4 border-2 bg-[#2F2F2F] border-white rounded-md">
                <div class=""></div>
                <h2 class="font-bold">
                ${this.getAttribute("text") ? this.getAttribute("text")
                    .replace("{coloredtext}", `<span style="color: ${this.getAttribute("color")}">${this.getAttribute("coloredtext")}</span>`) : ""}
                </h2>
                <div class="text-[#c7c7c7]">
                    <p>Lorem ipsum dolor sit amet,</p>
                    <p>consectetur adipisicing elit.</p>
                    <p>Assumenda eligendi dolor</p>
                    <p>quibusdam cupiditate voluptatum</p>
                </div>
            </div>
            `;
    }
}

customElements.define('simple-card', SimpleCard);