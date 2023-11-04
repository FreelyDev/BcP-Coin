import { useState } from 'react';
import { HashLink } from 'react-router-hash-link'
import './styles.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Menu from 'components/menu/Menu';
import logo from '../../assets/logo.png' 
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <div className={`navbar-container `} >
            <div className="header_content">
                <div className="wrapper">
                <div  className='logo'>
                    <HashLink to={'#home'} smooth>
                        <img src={logo} alt='' />
                    </HashLink>
                </div>
                <ul className="nav_list">
                    <li><HashLink to={'#coins'}  smooth>BcP Coin</HashLink></li>
                    <li><HashLink to={'#coins'}  smooth>BcPB Coin</HashLink></li>
                    <li><HashLink to={'#coins'}  smooth>Pump Coin</HashLink></li>
                    <li><HashLink to={'#coins'}  smooth>Dilly Coin</HashLink></li>
                    <li><HashLink to={'#coins'}  smooth>888 Coin</HashLink></li>
                    <li><HashLink to={'/'}  smooth>Support</HashLink></li>
                    <li>
                        <div className="btn_div">
                            <ConnectButton />
                        </div>
                    </li>
                </ul>
                
                </div>
                
            </div>
            
            <button className={`showMenuBtn `} onClick={()=>setShowMenu(!showMenu)}>
                {!showMenu ? 
                    <i className="fas fa-bars"></i>:
                    <i className="fas fa-times"></i>
                }
            </button>
                    
        </div>
        <Menu setMenuOpen={setShowMenu} menuOpen={showMenu}/>
        </>
    )
}
export default NavBar;