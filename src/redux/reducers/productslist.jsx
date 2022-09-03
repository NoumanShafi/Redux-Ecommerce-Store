const InitialValue = {
    products: [{}]


}

const ProductsReducer = (state = InitialValue, { type, payload }) => {
    switch (type) {
        case "AllProducts": return {
            ...state, products: payload
        }
        case "electronics": return {
            ...state, products: payload
        }
        case "jewelery": return {
            ...state, products: payload
        }
        case "men's clothing": return {
            ...state, products: payload
        }
        case "women's clothing": return {
            ...state, products: payload
        }

        default:
            return state;
    }

}
export default ProductsReducer