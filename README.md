# Products Iterations

## 1 - Add Item to Cart
You are given a product to add to the cart.
Check if that product exists in the cart already (by id ie.).
If it does, you can add 1 quantity of it
If it does not, add the product to the cart

## 2 - Increase Quantity
Loop the Cart for the product id you're looking for
Add Quantity to that product
Update the Cart Array

## 3 - Decrease Quantity
Loop the Cart for the product id you're looking for
Remove Quantity to that product
If quantity is zero, remove the product
Update the Cart Array

## 4 - Summary (Total Items, Total Price)
Use things like array.length, array.reduce()

- In order for you to add the product to the cart, you need to generate a copy of the original array `const newCart = [...cart]`, push it into that array, and do `setCart[cart]`