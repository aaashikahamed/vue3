app.component('product-display', {
    props:{
        premium : {
            type: Boolean,
            required: true
        },
    },

    template :
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- image goes here -->
             <img :class="{'out-of-stock-img ': !inStock}" v-bind:src="image">
            
          </div>
          <div class="product-info h1" >
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <!-- <p v-show="inStock"> Testing Visibility </p> -->

            <p>Shipping: {{ shipping }}</p>
            <!-- Creating chained conditional logic  -->
             <p style="color: blue;"> <u>Creating chained conditional login</u> </p>
             <p v-if="inventory > 10">In stock</p>
             <p v-else-if="inventory < 10 && inventory > 0" >Almost Sold Out</p>
             <p v-else>Sold Out</p>

             <ul>
              <li v-for="detail in details">{{detail}}</li>
             </ul>

             <div v-for="variant, index in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" v-bind:style="{ backgroundColor: variant.color}"></div>
             <!-- <button class="button" v-on:click="cart += 1">Add to Cart</button>
             <button class="button" v-on:click="cart = 0">Reset</button> -->

             <!-- click event Method -->
             <button class="button" v-on:click="addtoCart" 
             :class="{disabledButton: !inStock}"
             :disabled="!inStock"> Add to Cart</button>
             <button class="button" v-on:click="decrementCart" > Decrement 1</button>
             <button class="button" v-on:click="resetCart"> Reset </button>


             <!-- <div v-for="size in sizes">Size : <strong>  {{size.size}} </strong></div> -->

             <!-- OnSale -->
             <!-- <p v-if="onSale" style="border: 1px solid red; width: 80px; background-color: aqua; text-align: center;">On Sale</p> -->
          </div>
        </div>
      </div>`,

      data() {
        return {
            // cart : 0,
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
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
        },
        resetCart(){
            this.$emit("reset-cart")
        },
        decrementCart(){
            this.$emit('dec-from-cart')
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