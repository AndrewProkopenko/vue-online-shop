export default { 
      ADD_TO_CART: function(context, product) {  
        context.commit('SET_CART', product)
      }, 
  
      DELETE_FROM_CART: function(context, index) {  
        context.commit('REMOVE_FROM_CART', index)
      },
      CHANGE_QUANTITY: function(context, {isIncrem, article}) {   
        context.commit('CHANGE_PRODUCT_QUANTITY_CART',{ isIncrem, article})
      }, 
}