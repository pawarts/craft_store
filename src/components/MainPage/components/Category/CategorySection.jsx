import CategoryItem from "./CategoryItem/CategoryItem"

import cloth from './icons/cloth.svg'
import food from './icons/food.svg'
import jewerlly from './icons/jewerlly.svg'
import for_house from './icons/for_house.svg'
import sport from './icons/sport.svg'

import s from './styles/CategorySection.module.css'




const CategorySection = () => {
    return (
        <div className={s.wrapper}>
            <CategoryItem icon={cloth} title="Одяг" />
            <CategoryItem icon={food} title="Їжа" />
            <CategoryItem icon={jewerlly} title="Прикраси" />
            <CategoryItem icon={for_house} title="Для дому" />
            <CategoryItem icon={sport} title="Спорт та захоплення" />
        </div>
    )
}

export default CategorySection