<template>
  <div>
        <div class="v-cart-header heading">
            <h3 class=" text-left">Cart</h3>
            <h5>Total: {{COMPUTED_TOTAL_CART}} P</h5>
        </div>
        <div class="v-cart container bg-white shadow-sm pl-5 pr-5 pb-3 pt-3 ">
            <CartItem 
                v-for="(product, index) in CART"
                :key = index
                :product_cart = product
                @deleteFromCart = "deleteFromCart(index)"
            />

            <div v-if="!CART.length" class="v-cart-empty" >       
                <h4>
                    Cart list is empty ... 
                </h4>

                <router-link :to='{name: "home"}' class=" btn btn-v-custom mt-5" >
                    Back to shopping 
                </router-link> 
            </div>
        </div>
        
  </div>
</template>

<script>
import CartItem from './v-cart-item'


import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'Cart', 
    components: { 
        CartItem
    },
    computed: {
        ...mapGetters([
            'CART', 
            'COMPUTED_TOTAL_CART'
        ]),  
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART', 
            'TOTAL_CART'
        ]),
        deleteFromCart: function(index) { 
            this.DELETE_FROM_CART(index)
        }, 
       
    },  
}
</script>


<style lang="scss">
    .v-cart-header { 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .v-cart-empty { 
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        h4 { 
            text-align: center;
        }
    }
</style>
 