const Initalstate= {
   category:  [

]}
const Category_Reducer = (state = Initalstate , {type , payload})=>{
    switch (type) {
        case "SET_Category":
            return{
                ...state , category: payload
            }
            
    
        default:
           return state
    }

}
export default Category_Reducer