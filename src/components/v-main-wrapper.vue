<template>
    <div class="v-main-wrapper container "> 
        <Header/>
        <div class="v-margin-header">
            <!-- <keep-alive></keep-alive> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import Catalog from './v-catalog'
// import Cart from './v-cart'

import Header from '../views/Header'

import { mapActions } from 'vuex' 

export default {
    name: 'MainWrapper', 
    components: {
        Header,  
    }, 
    
    methods: {  
         ...mapActions([
            // 'GET_LOCAL_STORAGE_CART'

        ]), 
        getStorage() { 
        // console.log('object') 
        // console.log('local main wrap ', localStorage.getItem('v-cart-list'))
        }
    } 
}
</script>

<style>

</style>