import { useState } from "react";
import {
    NavBar,  
    Menu,
    MenuIcon,
    Logo,
    MenuLink,
    MenuWrapper
    } from './NavStyles';
import hamburger from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import logoImage from "../../assets/images/logo.svg";

const Nav = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleBackdropClick = (e) => {
        if( e.target.classList.contains('nav')) {
            handleMenu();
        }
    }

    return ( 
        <NavBar 
            className={isMenuOpen && "nav active" }
            onClick={handleBackdropClick}
        >
            <MenuWrapper>
                <MenuIcon onClick={handleMenu}>
                    { !isMenuOpen ?  (
                        <img src={hamburger} alt="hamburger menu icon"/>
                    ): (
                        <img src={closeIcon} alt="close menu icon"/>
                    )}
                </MenuIcon>
            
                <Logo>
                    <img src={logoImage} alt="room logo"/>
                </Logo>
                
                <Menu className={isMenuOpen && 'active'}>
                    <li>
                        <MenuLink to="/">home</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/">shop</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/">about</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/">content</MenuLink>
                    </li>
                </Menu>
            </MenuWrapper>
            
        </NavBar>
     );
}
 
export default Nav;