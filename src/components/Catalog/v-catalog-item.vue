<template>
  <div class="d-flex flex-column mt-3 hover-shadow">
      <img :src=" require('../../assets/images/' + product.image) " alt="image" class="card-image-top pt-3">
      <div class="d-flex flex-column align-items-center p-3">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-price">Price: {{ product.price }} P. </p>
            <button 
                @click="addToCart"
                class="btn btn-v-custom ">
                Add to Cart
            </button>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default { 
    name: 'CatalogItem', 
    props: {
        product: {
            type: Object
        }
    },  
    methods: { 
        ...mapActions([
            'ADD_TO_CART',  
        ]), 
        addToCart: function() {
            this.ADD_TO_CART(this.product) 
        }
    }
}
</script>

<style lang='scss'>
    .card { 
        &-image-top { 
            // height: 220px;
            width: 100px;
            margin: 0 auto;
        }
        &-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: rgb(42, 42, 42);
            margin-bottom: 5px !important;
        }
        &-price{
             font-size: .9rem;
            font-weight: 400;
            color: rgb(42, 42, 42);
            margin-bottom: 10px !important;
        }
    }
    .hover-shadow {
        box-shadow: 0 5px 10px 3px rgba(0, 0, 0, 0.09);
        transition: 300ms ease;
        &:hover {  
            box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.12);
        }
    }

    
</style>