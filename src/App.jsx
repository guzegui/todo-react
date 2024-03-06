import { useState } from "react";
import productsCatalog from "./assets/products.json";
import ProductCatalog from "./components/ProductCatalog";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const [totalItems, setTotalItems] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  function AddProductToCart(product) {
    IncreaseQuantity(product);
  }

  function IncreaseQuantity(product) {
    const newCart = [...cart];

    const isProductInCart = cart.findIndex(
      (element) => element.id === product.id
    );

    // If product is not in cart, add it
    if (isProductInCart === -1) {
      product.quantity == undefined
        ? (product.quantity = 1)
        : product.quantity++;
      newCart.push(product);
      //setCart((prev) => [...prev, product]);
    } else {
      // add 1 quantity
      newCart[isProductInCart].quantity++;
    }
    updateCart(newCart);
  }

  function DecreaseQuantity(product) {
    product.quantity--;

    if (product.quantity <= 0) {
      const newCart = cart.filter((element) => element.id !== product.id);
      updateCart(newCart);
      //setCart(prev => prev.filter(product => product.id!== product.id));
    } else {
      updateCart(cart);
    }
  }

  function updateTotals(cart) {
    let totalItems = cart.reduce(
      (accumulator, currentElement) => accumulator + currentElement.quantity,
      0
    );
    let totalPrice = cart
      .reduce(
        (accumulator, currentElement) =>
          accumulator + currentElement.price * currentElement.quantity,
        0
      )
      .toFixed(2);
    setTotalItems(totalItems);
    setTotalPrice(totalPrice);
  }

  function updateCart(cart) {
    setCart(cart);
    updateTotals(cart);
  }

  return (
    <main className={`product-page`}>
      <ProductCatalog
        AddProductToCart={AddProductToCart}
        productsCatalog={productsCatalog}
      />
      <Cart
        IncreaseQuantity={IncreaseQuantity}
        DecreaseQuantity={DecreaseQuantity}
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    </main>
  );
}

export default App;
