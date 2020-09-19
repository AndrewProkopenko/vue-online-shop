<template>
  <div class="v-cart-item"> 
        <img  :src=" require('../../assets/images/' + product_cart.image)" class="v-cart-item_image" alt="img"> 
        <div class="v-cart-item_title">{{ product_cart.name }}</div> 
        <div class="v-cart-item_price">{{ product_cart.price * product_cart.quantity}} P.</div>   
        <div class="v-cart-item_qit">
            <div class="v-cart-item_qit__text">
                Qty: {{ product_cart.quantity }}
            </div> 
            <div class="v-cart-item_qit__actions">
                <button @click="isIncrement(false, product_cart.article)">-</button>
                <button @click="isIncrement(true, product_cart.article)">&plus;</button>
            </div>
        </div>   
        <div class="v-cart-item_actions">
            <button @click="deleteFromCart" class="btn btn-danger">
                &times;
            </button>
        </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CartItem', 
    props: { 
        product_cart: { 
            type: Object, 
            default() {  
                return {}
            }
        }
    },  
    methods: { 
        ...mapActions([
            'CHANGE_QUANTITY'
        ]),
        isIncrement : function( isIncrem , article) {   
            this.CHANGE_QUANTITY({isIncrem , article})
        }, 
        deleteFromCart: function() {
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style lang="scss">
    .v-cart-item { 
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(153, 153, 153, 0.465);

        &:last-child{ 
            margin-bottom: 0;
            border: 0;
        }
        &_image {
            max-height: 150px;
         }
        &_title { 
            font-size: 1.2rem;
            font-weight: 600;
         }
        &_price { 
            font-size: 1.5rem;
            font-weight: 100;
         }
        &_qit {
            display: flex;
            flex-direction: column; 
            
            &__text { 
                font-size: 1.2rem;
                font-weight: 300;
                text-align: center;
            }
            &__actions {  
                display: flex;
                margin-top: 10px;
                >button { 
                    width: 50%;
                    padding: 10px 12px 14px 10px;
                    text-align: center;
                    display: block;
                    border: 1px solid rgba(153, 153, 153, 0.465);
                    background: #fff;
                    line-height: 0;
                    
                    &:first-child{
                        border-radius: 3px 0 0 3px;
                        border-right: 0 ;
                        &:active {  
                            background:#feffc2;
                        }
                    }
                    &:last-child{
                        
                        // border-left-color: #ffffff ;
                        border-radius: 0 3px 3px 0;
                        &:active {  
                            background:#d6ffc2;
                        }
                    }
                    &:focus { 
                        user-select: none;
                        outline: none; 
                    }
                    
                }
            }
         }
        &_image { }
    }
</style>