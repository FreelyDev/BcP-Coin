import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link'
import './footer.scss'

import icon_facebook from '../../assets/icons/icon_facebook.svg' 
import icon_pinterest from '../../assets/icons/icon_pinterest.svg' 
import icon_discord from '../../assets/icons/icon_discord.svg' 
import icon_youtube from '../../assets/icons/icon_youtube.svg' 
import icon_tiktok from '../../assets/icons/icon_tiktok.svg' 
import logo from '../../assets/logo.png' 
type LoadingType = {
    setIsLoading?(flag: boolean): void;
};

export default function Footer({ setIsLoading }: LoadingType) {
    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 6) {
            setIsLoading && setIsLoading(false)
        }
    }, [setIsLoading, imgCount]);
    return (
        <div className="footer">
            <div className="footerContent" data-aos="fade-up">
                <div className="wrapper">
                    <div className="left">
                        <img src={logo} alt="" className="logo" onLoad = {onLoad}/>
                        <p>The BCPB Platform is a state-of-the-art blockchain-based solution designed specifically for investors looking to invest in the property market with a primary focus on Bitcoin transactions... <span>Read More</span> </p>
                        <div className="social_links">
                            <a href="http://facebook.com" target="_blank" rel="noreferrer" className="btn btn-lg btn-success">
                                <img src={icon_facebook} alt="" onLoad = {onLoad}/>
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="btn btn-lg btn-success">
                                <img src={icon_pinterest} alt="" onLoad = {onLoad}/>
                            </a>
                            <a href="https://discord.com" target="_blank" rel="noreferrer" className="btn btn-lg btn-success">
                                <img src={icon_discord} alt="" onLoad = {onLoad}/>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="btn btn-lg btn-success">
                                <img src={icon_youtube} alt="" onLoad = {onLoad}/>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="btn btn-lg btn-success">
                                <img src={icon_tiktok} alt="" onLoad = {onLoad}/>
                            </a>
                        </div>
                    
                    </div>
                    <div className="right">
                        <div className="col">
                            <h3>My Account</h3>
                            <HashLink to={'#home'} smooth >Profile</HashLink>
                            <HashLink to={'#home'} smooth >Collections</HashLink>
                            <HashLink to={'#home'} smooth >Favourites</HashLink>
                            <HashLink to={'#home'} smooth >Settings</HashLink>
                        </div>
                        <div className="col">
                            <h3>Marketplace</h3>
                            <HashLink to={'#home'} smooth >Explore</HashLink>
                            <HashLink to={'#home'} smooth >All NFT</HashLink>
                            <HashLink to={'#home'} smooth >Collectible</HashLink>
                            <HashLink to={'#home'} smooth >All World</HashLink>
                        </div>
                        <div className="col">
                            <h3>Resources</h3>
                            <HashLink to={'#home'} smooth >Help Center</HashLink>
                            <HashLink to={'#home'} smooth >Partners</HashLink>
                            <HashLink to={'#home'} smooth >Blog</HashLink>
                            <HashLink to={'#home'} smooth >Newsletter</HashLink>
                        </div>
                        <div className="col">
                            <h3>Company</h3>
                            <HashLink to={'#home'} smooth >About Us</HashLink>
                            <HashLink to={'#home'} smooth >Careers</HashLink>
                            <HashLink to={'#home'} smooth >Support</HashLink>
                            <HashLink to={'#home'} smooth >Rankings</HashLink>
                        </div>

                    </div>
                </div>
                <div className="foot">
                    <span>2023 © Copyright BcP. All Rights Reserved</span>
                    <span>
                        <a href="/" target="_blank" rel="noreferrer">Terms Of Service</a>
                        <a href="/" target="_blank" rel="noreferrer">Privacy Policy</a>
                    </span>


                </div>
                
            </div>
        </div>
    )
}
 