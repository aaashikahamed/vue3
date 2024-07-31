const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image : './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 0,
            // onSale : true
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})
