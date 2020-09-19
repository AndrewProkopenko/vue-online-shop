import axios from 'axios'
export default { 
    GET_PRODUCTS: function (context) {
        return axios('http://localhost:3000/products' , {
            method: "GET"
        })
            .then( response => {
                context.commit('GET_PRODUCTS_MUT', response.data)
            })
}
}