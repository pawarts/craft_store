import s from './styles/Characteristic.module.css'

const Characteristic = (props) => {

    const { name_type, value } = props;

    return (
        <div className={s.wrapper}>
            <p className={s.name_type}>{name_type}</p>
            <p className="regular_text">{value}</p>
        </div>
    )
}

export default Characteristic