import { useState } from "react"
import cartContext from "./cartContext"

const CartState = (props) => {
    const calculatePriceInitialization = () => {
        let totalPrice1 = 0
        const OrdersToBeCalculated = JSON.parse(window.localStorage.getItem("cartItems"))
        if (OrdersToBeCalculated === null) {
            return 0;
        } else {
            OrdersToBeCalculated.map((item) => {
                totalPrice1 += item.price
            })
        }
        return totalPrice1
    }

    const [totalValue, setTotalValue] = useState(calculatePriceInitialization || 0)

    const calculatePrice = () => {
        let totalPrice1 = 0
        const OrdersToBeCalculated = JSON.parse(window.localStorage.getItem("cartItems"))
        console.log("OrdersToBeCalculated", OrdersToBeCalculated)
        if (OrdersToBeCalculated === null) {
            setTotalValue(0)
        } else {
            OrdersToBeCalculated.map((item) => {
                totalPrice1 += item.price
            })
            setTotalValue(totalPrice1)
        }
    }

    const [localCart, setLocalCart] = useState(JSON.parse(window.localStorage.getItem("cartItems")) || []);


    return (
        <cartContext.Provider value={{ localCart, setLocalCart, totalValue, setTotalValue, calculatePrice }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartState;
