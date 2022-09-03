const Value=true
const Looding_Reducer = (state= Value , {type , payload}) => {
    switch (type) {
        case "Looding":
            return state = payload
                
            
        default:
            return state
    }
}
export default Looding_Reducer