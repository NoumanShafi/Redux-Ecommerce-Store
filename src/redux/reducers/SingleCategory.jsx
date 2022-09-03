const InitialValue = "AllProducts"

const Single_Category_Reducer = (state = InitialValue ,action) =>{
switch (action.type) {
    case "All1":
        return state= "AllProducts"
    case "electronics1":
        return state= "electronics"
    case "jewelery1":
        return state= "jewelery"
    case "men's clothing1":
        return state= "men's clothing"
    case "women's clothing1":
        return state= "women's clothing"
    default:
       return state
}
}
export default Single_Category_Reducer