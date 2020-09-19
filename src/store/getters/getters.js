export default { 
    PRODUCTS(state) { 
        return state.products
      }, 
      CART(state) { 
        return state.cart
      } , 
      COMPUTED_TOTAL_CART(state) { 
          let result = 0
          state.cart.map ( item => { 
              let preResult = item.price * item.quantity 
              result += preResult
          })
          return result 
      }
}