import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

export const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className="all-cart-product">
            <div className="cart-product">
                <div className="item-number">
                    <span className="quantity">x{product.quantity}</span>
                    <div className="cart-item-emoji">
                    <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
                    </div>
                </div>
                <div className="info">
                    <span className="sum">{product.price * product.quantity}:-</span>
                </div>
                <span className="actions">
                    <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>➕</button>
                    <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>➖</button>

                </span>
            </div>
        </div>
    )
}