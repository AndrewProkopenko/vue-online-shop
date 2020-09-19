<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <MainWrapper/>
  </div>
</template>

<script> 
import MainWrapper from './components/v-main-wrapper'
export default {
  components: {
    MainWrapper
  }
}
</script>

 
