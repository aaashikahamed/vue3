const app = Vue.createApp({
    data() {
        return {
            cart : 0,
            product: 'Socks',
            brand : "Brand Name",
            selectedVariant : 0,
            // inStock: true,
            inventory: 10,
            // onSale : true
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' , quantity: 0 },
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
        updateVariant(index){
            this.selectedVariant = index
            // console.log(this.selectedVariant)
        }
    },
    computed : {
        title () {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping (){
            if(this.premium){
                return "Free"
            }
                return "2.99"
            
        },

    }

})
