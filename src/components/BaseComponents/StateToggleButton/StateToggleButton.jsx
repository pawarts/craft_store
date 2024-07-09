
import s from './styles/StateToggleButton.module.css'

const StateToggleButton = (props) => {

    const { action, text } = props;
    const active_window = 'Характеристики'
    const check_active = text === active_window ? s.toggle_button_active : ''

    const handleEvent = () => action

    return (
        <button className={`section_title ${check_active} ${s.toggle_button}`} onClick={handleEvent}>
            {text}
        </button>
    )
}

export default StateToggleButton