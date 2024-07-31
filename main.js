const app = Vue.createApp({
    data() {
        return {
            cart : 0,
            product: 'Socks',
            image : './assets/images/socks_green.jpg',
            inStock: false,
            inventory: 10,
            // onSale : true
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
              ],
            sizes : [
                {id:123, size: 'sm'},
                {id:124, size: 'M'},
                {id:125, size: 'L'},
                {id:126, size: 'XL'},
            ]
        }
    },
    methods : {
        addtoCart(){
            if(typeof this.cart =="string"){
                this.cart = 0
            }
            this.cart += 1
        },
        resetCart(){
            this.cart = 0
        },
        decrementCart(){
            if(this.cart > 0){
                this.cart -= 1
            }else{
                this.cart = "No Items in the cart"
            }
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
