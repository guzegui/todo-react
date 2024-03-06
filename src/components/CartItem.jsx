import PropTypes from "prop-types";

function CartItem({ product, IncreaseQuantity, DecreaseQuantity }) {
    return (
        <li className='cart-item'>
            <div>{product.name} : {product.quantity}</div>
            <div className='actions'>
                <button onClick={() => DecreaseQuantity(product)}>-</button>
                <button onClick={() => IncreaseQuantity(product)}>+</button>
            </div>
        </li>
    )
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    IncreaseQuantity: PropTypes.func.isRequired,
    DecreaseQuantity: PropTypes.func.isRequired
}

export default CartItem