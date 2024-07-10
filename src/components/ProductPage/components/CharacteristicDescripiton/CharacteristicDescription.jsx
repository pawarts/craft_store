import { useDispatch, useSelector } from 'react-redux'
import Characteristics from './Characteristic/Characteristics'

import StateToggleButton from '../../../BaseComponents/StateToggleButton/StateToggleButton'
/* import Characteristic from './Characteristic/Characteristic' */

import s from './style/CharacteristicDescription.module.css'
import { setProductPage } from '../../../../_store/slices/popupMode'

const CharacteristicDescription = (props) => {

    const active_mode = useSelector(state => state.popupMode.productPage);
    const dispatch = useDispatch();

    const changeMode = (mode) => dispatch(setProductPage(mode))

    return (
        <div className={s.wrapper}>
            <div>
                <StateToggleButton text="Характеристики" mode="specs"
                    active_mode={active_mode} action={changeMode} />
                <StateToggleButton text="Відгуки" mode="reviews"
                    active_mode={active_mode} action={changeMode} />
            </div>
            <div>
                <Characteristics />
            </div>
        </div>
    )
}

export default CharacteristicDescription