
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react';
import './home.scss'

import img_01 from '../../../assets/icons/btn_01.svg';
import img_02 from '../../../assets/BACKGROUND_2.png';

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};
export default function Home({ setIsLoading }: LoadingType) {
    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 2) {
            setIsLoading && setIsLoading(false)
        }
    }, [setIsLoading, imgCount]);
    return (
        <>
            <div className="home" id='home'>
                <div className="content">
                    <div className="wrapper" data-aos="fade-up">
                        <h1>BLOCKCHAIN PROPERTY</h1>
                        <h2>BcP COIN</h2>
                        <h3>The BCPB Platform is a state-of-the-art blockchain-based solution designed specifically for investors looking to invest in the property market with a primary focus on Bitcoin transactions.</h3>
                        <div className="btn_div">
                            <HashLink to={'#home'} smooth className='how_btn'>
                            <img src={img_01} alt="" onLoad={onLoad}/> HOW IT WORKS
                            </HashLink>
                            <ConnectButton chainStatus="none" accountStatus="address" showBalance={false} />
                        </div>
                    </div>
                </div>
                <img src={img_02} alt="" className="bg" onLoad={onLoad}/>
            </div>
            

        </>
    )
}