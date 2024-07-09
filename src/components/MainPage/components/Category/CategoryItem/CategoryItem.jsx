import s from "./styles/CategoryItem.module.css";

const CategoryItem = (props) => {

    const { icon, title } = props

    return (
        <div className={s.wrapper}>
            <img src={icon} alt="" />
            <p className={`regular_text ${s.category_title}`}>{title}</p>
        </div>
    )
}

export default CategoryItem