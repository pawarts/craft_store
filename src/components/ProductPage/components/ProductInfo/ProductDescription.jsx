import CartButton from './CartButton'
import s from './styles/ProductDescripiton.module.css'

const ProductDesripiton = (props) => {
    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>В’язана лампа</h3>
            <p className={s.store_name}>@craft_man</p>
            <p className={s.product_description}>
                Елегантна настільна лампа, пов'язана вручну з натуральної бавовни, додасть затишку та тепла будь-якому інтер'єру. Унікальний дизайн робить її стильним акцентом у вашій кімнаті.
            </p>
            <div className={s.price_cart_wrapper}>
                <h4 className={`section_title ${s.section_title}`}>₴10 000</h4>
                <CartButton />
            </div>
        </div>
    )
}

export default ProductDesripiton