export const SET_Products = (value ,products) =>{
    return{
        type : value,
        payload : products
       
}}
export const SET_Single_Product = (products) =>{
    return{
        type : "SET_Single_Product",
        payload : products
        
    }
}

export const SET_Category = (category) =>{
    return{
        type : "SET_Category",
        payload : category
        
    }
}
export const Category_Type = (category) =>{
    return{
        type : category
    }
}
export const Lood= (status) =>{
    return{
        type : "Looding",
        payload: status
    }
}
export const Remove_Product= () =>{
    return{
        type : "Remove_Product"
    }
}