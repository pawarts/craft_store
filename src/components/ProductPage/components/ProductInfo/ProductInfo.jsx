import ProductImage from "./ProductImage"

import s from "../ProductInfo/styles/ProductInfo.module.css"
import ProductDesripiton from "./ProductDescription"


const ProductInfo = (props) => {
    return (
        <div className={s.wrapper}>
            <ProductImage />
            <ProductDesripiton />
        </div>
    )
}

export default ProductInfo