import s from './styles/CartButton.module.css'
const CartButton = (props) => {
    return (
        <div className={s.wrapper}>
            <p className={`${s.regular_text} ${s.title}`}>До кошика</p>
            <div className={s.cart_button_wrapper}>
                <p className={`${s.regular_text}`}>-</p>
                <p className={`${s.regular_text}`}>1</p>
                <p className={`${s.regular_text}`}>+</p>
            </div>
        </div>
    )
}

export default CartButton