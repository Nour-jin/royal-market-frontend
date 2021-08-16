import React from 'react'
import { Link } from "react-router-dom";
const PurchaseEnd = () => {
    return (
        <div className="purchase-end-contanier">
            <h1>Congratulations</h1>
            <p>You have purchased this product we will send it as soon as possible For more details please check your <Link>order</Link> details</p>
            <div>Go back to <Link to="/">Home</Link></div>
        </div>
    )
}

export default PurchaseEnd
