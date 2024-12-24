class ImageCard extends HTMLElement {
  constructor() {
    super();
    this.properties = Array.from(this.attributes).reduce((obj, attribute) => {
      return Object.assign(obj, { [attribute.name]: attribute.value });
    }, {});
    this.innerHTML = `<h1 id="header" class="text-red-700">${this.properties.text}<h1>`;
    this.shadow = this.attachShadow({ mode: "open" });
    this.addEventListener("click", (e) => {
      console.log(this.shadow.getElementById("header"));
    });
  }
}

customElements.define("image-card", ImageCard);
