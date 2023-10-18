import "./menu.scss"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { HashLink } from 'react-router-hash-link'
type MenuType = {
    menuOpen: boolean;
    setMenuOpen(flag: boolean): void;
};

export default function Menu({ menuOpen, setMenuOpen }: MenuType) {
    

    return (
        <div className={`sidebar ${menuOpen ? "active":''} `}>
            <div className="menu_list" id='menuExp'>
                <HashLink to={'#coins'}  smooth onClick={()=>setMenuOpen(false)}>BcPB Coin</HashLink>
                <HashLink to={'#coins'}  smooth onClick={()=>setMenuOpen(false)}>Pump Coin</HashLink>
                <HashLink to={'#coins'}  smooth onClick={()=>setMenuOpen(false)}>Dilly Coin</HashLink>
                <HashLink to={'#coins'}  smooth onClick={()=>setMenuOpen(false)}>888 Coin</HashLink>
                <HashLink to={'/'}  smooth onClick={()=>setMenuOpen(false)}>Support</HashLink>

                <div className="btn_div">
                    <ConnectButton />
                </div>
                
            </div>
        </div>
    )
}

