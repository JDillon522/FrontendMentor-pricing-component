export class CardList extends HTMLElement {
    cards = []

    shadow;

    constructor() {
        super();

        this.shadow = this.attachShadow({
            mode: 'open'
        });

        this.render();
    }

    set data(val) {
        this.cards = val;
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/card-list/card-list.css">
            <main>
            ${
                this.cards.map((card, index) => {
                    return `
                        <app-card
                                class="card-${index}"
                                title="${card.title}"
                                price_m="${card.price_m}"
                                price_a="${card.price_a}"
                                storage="${card.storage}"
                                num_users="${card.numUsers}"
                                transfer_amount="${card.transferAmount}">
                        </app-card>
                    `
                }).join('')
            }
            </main>
        `;
    }

}

customElements.define('app-card-list', CardList);
