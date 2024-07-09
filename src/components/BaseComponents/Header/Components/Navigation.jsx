import { Link } from 'react-router-dom'

import s from './Styles/Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.wrapper}>
            <Link className={s.link_item} to="/" >Головна</Link>
            <Link className={s.link_item} to="/crafts" >Крафти</Link>
            <Link className={s.link_item} to="/masters" >Майстри</Link>
            <Link className={s.link_item} to="/sales" >Знижки</Link>
        </nav>
    )
}

export default Navigation