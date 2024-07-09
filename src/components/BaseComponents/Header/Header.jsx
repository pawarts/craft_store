import s from './HeaderStyle/HeaderStyle.module.css'

import { Link } from 'react-router-dom'

import logo from './HeaderIcons/logo.svg'
import AccountIcon from './HeaderIcons/AccountIcon.svg'
import CartIcon from './HeaderIcons/CartIcon.svg'

import Navigation from './Components/Navigation'
import SearchInput from './Components/SearchInput'
import IconButton from './Components/IconButton'

const Header = (props) => {
    return (
        <div className={s.wrapper}>
            <img src={logo} alt="" />
            <Navigation />
            <SearchInput />
            <div className={s.cart_account_wrapper}>
                <Link to="/cart">
                    <IconButton icon={CartIcon} />
                </Link>
                <IconButton icon={AccountIcon} />
            </div>
        </div>
    )
}

export default Header