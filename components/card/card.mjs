export class Card extends HTMLElement {
    title = '';
    price_m = '';
    price_a = '';
    storage = '';
    num_users = '';
    transfer_amount = '';
    class = '';

    shadow;

    constructor() {
        super();

        this.shadow = this.attachShadow({
            mode: 'open'
        });

        this.render();
    }

    static get observedAttributes() {
        return ['class', 'title', 'price_m', 'price_a', 'storage', 'num_users', 'transfer_amount'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;

        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/card/card.css">
            <section class="${this.class}">
                <h2>${this.title}</h2>
                <span class="price-m">${this.price_m}</span>
                <span class="price-a">${this.price_a}</span>
                <div class="details">
                    <div>${this.storage}</div>
                    <div>${this.num_users}</div>
                    <div>${this.transfer_amount}</div>
                </div>
                <button>Learn More</button>
            </section>
        `;
    }

}

customElements.define('app-card', Card);
