import React from 'react';
import './SUbTotal.css';
import {useSelector} from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { useHistory} from 'react-router-dom'
import {getBasketTotal} from "../../utils/BasketTotal";
const SubTotal = () => {

    const {basket, user} = useSelector(state => state.data);

let history = useHistory();
const handleCheckout =() =>{
    if(user){
        history.push('/payment')
    }else{
        history.push("/login")
    }
}

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText ={(value) =>(
                <>
                <p>
                    SubTotal ({basket.length} items) : <strong>{value}</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox"/>
                    This Orders contain a gift
                </small>
                </>
            )}
            decimalScale = {2}
            value={getBasketTotal(basket)}
            displayType= {"text"}
            thousandSeprator = {true}
            perfix ={"$"}
            />
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
