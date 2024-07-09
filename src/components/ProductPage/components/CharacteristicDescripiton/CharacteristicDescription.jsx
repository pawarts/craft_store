import StateToggleButton from '../../../BaseComponents/StateToggleButton/StateToggleButton'
import Characteristics from './Characteristic/Characteristics'
/* import Characteristic from './Characteristic/Characteristic' */

import s from './style/CharacteristicDescription.module.css'

const CharacteristicDescription = (props) => {
    return (
        <div className={s.wrapper}>
            <div>
                <StateToggleButton text="Характеристики" />
                <StateToggleButton text="Відгуки" />
            </div>
            <div>
                <Characteristics />
            </div>
        </div>
    )
}

export default CharacteristicDescription