import ProductCatalogItem from './ProductCatalogItem'
import PropTypes from "prop-types";

function ProductCatalog({AddProductToCart, productsCatalog}) {
 return (
        <div className='product-catalog'>
            <h1>Available Products</h1>
            {productsCatalog.map(product => <ProductCatalogItem key={product.id} AddProductToCart={AddProductToCart} product={product} />)}
        </div>
    )
}

ProductCatalog.propTypes = {
    AddProductToCart: PropTypes.func.isRequired,
    productsCatalog: PropTypes.array.isRequired
}

export default ProductCatalog