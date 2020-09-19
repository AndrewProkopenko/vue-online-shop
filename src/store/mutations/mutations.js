export default { 
    GET_PRODUCTS_MUT: function(state, products) {
        state.products = products
      }, 
      SET_CART: function(state, product) { 
        if(state.cart.length) { 
          let cartFlag = false
          state.cart.map( function(item) { 
            if(item.article === product.article) { 
              cartFlag = true
              console.log(item.quantity)
              item.quantity++
            } 
          })
          if(!cartFlag) {  
            state.cart.push(product) 
          }
        } else {
            state.cart.push(product) 
        }
      },  
      REMOVE_FROM_CART: function( state, index) { 
        state.cart.splice(index, 1)
      },
      CHANGE_PRODUCT_QUANTITY_CART: function (state, {isIncrem, article}) {  
        const paramData = {isIncrem, article} 
        state.cart.map( (item) => {
            if(item.article === paramData.article) { 
                if(paramData.isIncrem){
                      item.quantity++ 
                      console.log(true)
                }
                else {
                  console.log(false) 
                  if( item.quantity > 1) item.quantity--
                }  
            } 
        })
      }
}