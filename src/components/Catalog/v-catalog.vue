<template>
  <div class="v-catalog container heading"> 
      <h3>Catalog</h3> 

        <Select/>

      <div class="row">
          <div v-for="(product, index) in PRODUCTS" :key='index' class="col-12 col-sm-6 col-lg-4">
                <CatalogItem 
                    :product='product'
                /> 
          </div> 
      </div>
  </div>
</template>

<script>
import CatalogItem from './v-catalog-item'
import Select from '../Select/v-select'

import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'Catalog', 
        components: { 
            CatalogItem, 
            Select
        }, 
        data() {
            return {
                 option: [
                     {
                        name: 'Option 1', 
                        value: 1
                    }, 
                    {
                        name: 'Option 2', 
                        value: 2
                    }, 
                    {
                        name: 'Option 3', 
                        value: 3
                    }, 
                 ]                  
            }
        }, 
        methods: {
            ...mapActions([
                'GET_PRODUCTS'
            ])
        }, 
        created() {
            this.GET_PRODUCTS() 
        }, 
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        }
    }
</script>

<style lang='scss' >
    .v-catalog{  
        padding-bottom: 30px;   
    }
</style>