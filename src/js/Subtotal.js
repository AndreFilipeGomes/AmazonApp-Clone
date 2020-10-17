import React from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            {/* {Price} */}
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"></input> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale ={2}
                value={getBasketTotal(basket)}
                // value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'€'}
            ></CurrencyFormat>

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
