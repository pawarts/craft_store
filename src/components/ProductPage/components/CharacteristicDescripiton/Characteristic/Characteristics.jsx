import Characteristic from "./Characteristic"

import s from "./styles/Characteristics.module.css"

const Characteristics = (props) => {

    const arr = [
        {
            name_type: 'Розмір, см',
            value: '30x20'
        },
        {
            name_type: 'Матеріал',
            value: `100% бавовна, дерев'яна основа`
        },
        {
            name_type: 'Колір',
            value: `Кремовий з дерев'яними елементами`
        },
        {
            name_type: 'Джерело освітлення',
            value: 'LED лампочка'
        },

    ]

    const characteristic = arr.map((element, index) => (
        <div key={index} className={s.item_wrapper}>
            <Characteristic name_type={element.name_type}
                value={element.value} />
        </div>
    ))

    //console.log(arr)

    return (
        <div className={s.wrapper}>
            {characteristic}
        </div>
    )
}

export default Characteristics