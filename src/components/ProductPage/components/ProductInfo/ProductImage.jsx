import s from './styles/ProductImage.module.css'

const ProductImage = (props) => {
    const { poster } = props;

    const image_view = poster ? <img className={s.poster} src={poster} alt="" /> : <p className={s.poster}></p>;

    return (
        <div className={s.wrapper}>
            {image_view}
            <div className={s.selector_buttons_image}>
                <button className={s.selector_button}></button>
                <button className={s.selector_button}></button>
                <button className={s.selector_button}></button>
            </div>
        </div>
    )
}

export default ProductImage