import { CardList } from "./components/card-list/card-list.mjs";
import { Card } from "./components/card/card.mjs";


const cardList = document.querySelector('app-card-list');
cardList.data = [
    {
        title: 'Basic',
        price_m: '&dollar;19.99',
        price_a: '&dollar;199.99',
        storage: '500 GB Storage',
        numUsers: '2 Users Allowed',
        transferAmount: 'Send up to 3 GB'
    },
    {
        title: 'Professional',
        price_m: '&dollar;24.99',
        price_a: '&dollar;249.99',
        storage: '1 TB Storage',
        numUsers: '5 Users Allowed',
        transferAmount: 'Send up to 10 GB'
    },
    {
        title: 'Master',
        price_m: '&dollar;39.99',
        price_a: '&dollar;399.99',
        storage: '2 TB Storage',
        numUsers: '10 Users Allowed',
        transferAmount: 'Send up to 20 GB'
    }
]