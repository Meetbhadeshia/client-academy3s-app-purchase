import { useState } from "react"
import paymentDetailContext from "./paymentDetailContext"

const PaymentDetailState = (props) => {

    const [paymentStatus, setPaymentStatus] = useState("")
    const [paymentOrderId, setpaymentOrderId] = useState("")
    const [paymentDetailAmount, setPaymentDetailAmount] = useState("")

    return (
        <paymentDetailContext.Provider value={{ paymentStatus, setPaymentStatus, paymentOrderId, setpaymentOrderId }}>
            {props.children}
        </paymentDetailContext.Provider>
    )
}

export default PaymentDetailState;
