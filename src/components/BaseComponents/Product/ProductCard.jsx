import s from './styles/ProductCard.module.css'

import ProductPoster from "./components/ProductPoster"
import { Link } from 'react-router-dom'


const ProductCard = (props) => {

    const { poster, id, slug, title, store_name, price } = props

    return (
        <Link to={`/product/${id}/${slug}`} className={s.wrapper}>
            <ProductPoster poster={poster} />
            <h4 className="regular_text">{title}</h4>
            <p className={s.store_name}>{store_name}</p>
            <h4 className="section_title">{price}</h4>
        </Link>
    )
}

export default ProductCard