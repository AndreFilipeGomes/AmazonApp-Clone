import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from '../Firebase/firebase';



function Header() {

    const [{basket, user}] = useStateValue();

    const SignOut = () =>{
        if(user)
            auth.signOut();
    }

    return (
        <nav className="header">
            
            {
            /* {logo image} */
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon icon"></img>
            </Link>
            }

            {/* {Search Box} */}
            <div className="header__searchBar">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* {3 Links} */}
                <div className="header__nav">
                    {/* {first link} */} 
                    <Link to={(!user) && "/login"} className="header__link">
                        <div onClick={SignOut} className="header__option">
                            <span className="header__optionLine1">Hello {(user) && user.email}</span>
                            <span className="header__optionLine2">{(user)? "Sign Out" : "Sign In"}</span>
                        </div>
                    </Link>
                    
                    {/* {second link} */}
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLine1">Returns</span>
                            <span className="header__optionLine2">& Orders</span>
                        </div>
                    </Link>

                    {/* {third link} */}
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLine1">Your</span>
                            <span className="header__optionLine2">Prime</span>
                        </div>
                    </Link>

                    {/* Basket with number */}
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            {/* Basket icon */}
                            <ShoppingBasketIcon></ShoppingBasketIcon>
                            {/* Number Items */}
                            <span className="header__optionLine2 header__optionBasketCount">{basket?.length}</span>
                        </div>
                    </Link>
                    
                </div>
            

        </nav>
    )
}

export default Header
