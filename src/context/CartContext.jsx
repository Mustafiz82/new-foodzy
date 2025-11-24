import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authcontext";
import useFetch from "../hook/useFetch";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartState , setCartState] = useState([])
    const {user} = useContext(AuthContext)
    const {data:cartData , refetch} = useFetch(`cart/${user?.email}`)

    console.log(cartData);



    useEffect(() => {
        refetch()
    } , [user])


    useEffect(() => {
        setCartState(cartData)
    } , [cartData])

    const handleUpdateQuantity = (id , newQuantity) => {
        setCartState(prev => prev.map(item => item._id == id ? {...item , quantity : newQuantity || 1} : item) )
    }

    
    return <CartContext.Provider value={{cartState , refetch , handleUpdateQuantity}}>{children}</CartContext.Provider>
}


export default CartProvider