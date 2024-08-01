const app = Vue.createApp({
    data() {
        return {
            cart : [],
            premium : true
        }
    },
    methods : {
        updateCart(id){
            if(typeof this.cart =="string" || this.cart < 0){
                this.cart = 0
            }
            this.cart.push(id)
        },
        decCart(){
            if(this.cart.length > 0){
                this.cart.pop()
            }
        },
        resetCart(){
            this.cart = []
        }

    },

       
})
