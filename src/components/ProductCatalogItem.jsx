import PropTypes from "prop-types";
function ProductCatalogItem({ AddProductToCart, product }) {

    return (
        <div className='product-catalog-item'>
            <div className='product-info'>
                <div>Name : {product.name}</div>
                <div>ID : {product.id}</div>
                <div>{product.description}</div>
                <img src={product.image_url} />
            </div>
            <button onClick={() => AddProductToCart(product)}>Add To Cart</button>
        </div>
    )
}

ProductCatalogItem.propTypes = {
    AddProductToCart: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

export default ProductCatalogItem
