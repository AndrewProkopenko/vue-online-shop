<template>
    <nav  class=" v-header navbar navbar-expand-md bg-dark navbar-dark  shadow">
      <div class="container">
        <ul class=" navbar-nav flex-row">
          <li class="nav-item mr-2" :class="{ active: $route.path === '/' }">
            <router-link :to='{name: "home"}' class="nav-link">Home</router-link>
          </li>
          <li class="nav-item dropdown mr-2" :class="{ active: $route.path === '/category' }">
            <router-link :to='{name: "category"}' class="nav-link dropdown-toggle">
              Category
             
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  
            </router-link>
          </li>
          <li class="nav-item mr-2" :class="{ active: $route.path === '/cart' }">
            <router-link :to='{name: "cart"}' class="nav-link">Cart ({{this.$store.state.cart.length}}) </router-link>
          </li>
          <!-- <li class="nav-item ml-3" :class="{ active: $route.path === '/create' }">
            <router-link :to='{name: "create"}' class="nav-link">Create Post</router-link>
          </li> -->
        </ul>
      </div>
        
    </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  .v-header { 
    position: fixed !important;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw
  }
</style>