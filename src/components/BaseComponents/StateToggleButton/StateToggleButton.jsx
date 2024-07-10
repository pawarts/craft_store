
import s from './styles/StateToggleButton.module.css'

const StateToggleButton = (props) => {

    const { action, mode, active_mode, text } = props;
    const check_active = mode === active_mode ? s.toggle_button_active : ''

    const handleEvent = (mode) => action(mode)

    return (
        <button className={`section_title ${check_active} ${s.toggle_button}`}
            onClick={() => handleEvent(mode)}>
            {text}
        </button>
    )
}

export default StateToggleButton