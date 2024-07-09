import s from './styles/ProductPoster.module.css'

const ProductPoster = (props) => {

    const { poster } = props;

    const image_view = poster ? <img className={s.poster} src={poster} alt="" /> : <p className={s.poster}></p>;

    return image_view
}

export default ProductPoster