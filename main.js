const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image : './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 0,
            // onSale : true
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
              ],
            sizes : [
                {id:123, size: 'sm'},
                {id:124, size: 'M'},
                {id:125, size: 'L'},
                {id:126, size: 'XL'},
            ]
        }
    }
})
