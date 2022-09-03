const Initial_Value = {
    
}
const Products_Details_Reducer= (state =  Initial_Value ,{type , payload} )=>{
    switch (type) {
        case "SET_Single_Product":
            return{
                ...state , ...payload
            }
        case "Remove_Product":
            return Initial_Value
        default:
           return state
    }

}
export default Products_Details_Reducer