import s from './Styles/IconButton.module.css'

const IconButton = (props) => {

    const { icon } = props;

    return (
        <button className={s.icon_button}>
            <img src={icon} alt="" />
        </button>
    )
}

export default IconButton