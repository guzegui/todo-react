import CartItem from "./CartItem";
import PropTypes from "prop-types";

function Cart({ cart, IncreaseQuantity, DecreaseQuantity, totalItems, totalPrice }) {


  return (
    <div className="cart">
      <h1>Cart</h1>

      <ul>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            IncreaseQuantity={IncreaseQuantity}
            DecreaseQuantity={DecreaseQuantity}
          />
        ))}
      </ul>

      <hr style={{ width: "100%" }} />

      <div className="summary">
        <h3>Total Items: {totalItems}</h3>
        <h3>Total Price: ¥{totalPrice}</h3>
      </div>
    </div>
  );
}

Cart.propTypes = {
  IncreaseQuantity: PropTypes.func.isRequired,
  DecreaseQuantity: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
};


export default Cart;

/*

        <h3>Total Items: {totalItems.toString()}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>




  const totalItems = cart.length;
  const totalPrice = cart.reduce(
    (accumulator, currentElement) => accumulator + currentElement.price
  );
*/
