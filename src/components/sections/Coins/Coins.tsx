import { useEffect, useState } from 'react'
import './coins.scss'
import CustomModal from 'components/Modal/CustomModal';
import PumpHouse from './PumpHouse';
import Bcp from './Bcp';
import BcpB from './BcpB';
import Dilly from './Dilly';
import Ploin from './Ploin';
import Cryptopoly from './Cryptopoly';
import VideoCard from 'components/videoCard/VideoCard';

import coin_bcp from '../../../assets/coin_bcp.png';
import coin_pumphouse from '../../../assets/pump_coin.png';
import coin_bcpb from '../../../assets/coin_bcpb.png';
import coin_dilly from '../../../assets/coin_dilly.png';
import coin_ploin from '../../../assets/ploin_coin.png';
import coin_888 from '../../../assets/coin_888.png';
// import video_url from '../../../assets/videos/Replace_this.mp4';
import icon_01 from '../../../assets/icons/icon_star_02.svg';
import icon_02 from '../../../assets/icons/icon_star_03.svg';
import back from '../../../assets/background_03.png';
import icon_03 from '../../../assets/Vector.png';
import FerguxCorp from '../../../assets/FerguxCorp.png';

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};
export default function Coins({setIsLoading}:LoadingType) {
    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 10) {
            setIsLoading && setIsLoading(false)
        }
    }, [setIsLoading, imgCount]);

    const [showPump, setShowPump] = useState(false);
    const [showBcp, setShowBcp] = useState(false);
    const [showBcpB, setShowBcpB] = useState(false);
    const [showDilly, setShowDilly] = useState(false);
    const [showPloin, setShowPloin] = useState(false);
    const [show888, setShow888] = useState(false);


    return (
        <>
            <div className="coins" id='coins'>
                <div className="content">
                    <div className="wrapper mb-3" data-aos="fade-up">
                        <div className="card">
                            <img src={coin_pumphouse} alt=""  onLoad={onLoad}/>
                            <h2>Pump Coin <small>(Pumphouse)</small></h2>
                            <p>Pump House: Empowering Tokenized Real Estate Investments with FlexibilityAre you ready to revolutionize your real estate investments? Pump House is the groundbreaking platform that leads the way in empowering investors to tokenize properties and unlock a world of new opportunities. Seamlessly combining the power of blockchain technology with the stability of property assets, Pump House is redefining the way we invest and transact in the real estate market.</p>
                            <button onClick={()=>setShowPump(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_bcp} alt="" onLoad={onLoad}/>
                            <h2>BcP Coin <small>(The Blockchain Property Coin)</small></h2>
                            <p>BcP Coin represents a revolutionary approach to real estate digital assets on the Blockchain Property - BcP platform. With features like specialized tokens, fractional ownership opportunities, and customized payout returns, BcP Coin empowers investors, leveraging the expertise of real estate professionals and the advancements of blockchain technology.</p>
                            <button onClick={()=>setShowBcp(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_bcpb} alt="" onLoad={onLoad}/>
                            <h2>BcPB Coin <small>(Blockchain Property BITCOIN)</small></h2>
                            <p>Blockchain Property  token on the BcP platform is designed to specifically target Bitcoin variant enthusiasts, offering customized payouts in their preferred Bitcoin variant cryptocurrency.</p>
                            <button onClick={()=>setShowBcpB(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_dilly} alt="" onLoad={onLoad}/>
                            <h2>Dilly Coin <small>(The Digital Landlord Coin)</small></h2>
                            <p>"Digital Landlord, DLC provides a unique opportunity for token holders, known as Dlllylords, to participate in the digital marketplace and earn income through cryptocurrency-based payouts and NFT ownership.Dilly Coin is a revolutionary real estate token specifically designed to tokenize, buy, sell, and auction digital assets within meta-verses.</p>
                            <button onClick={()=>setShowDilly(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_ploin} alt="" onLoad={onLoad}/>
                            <h2>Ploin Coin <small>(Property, Land & Commodities Coin)</small></h2>
                            <p>Invest in Ploin Coin, the crypto token that allows you to own digital assets and earn money. With a focus on property, land, and precious metals, Ploin Coin revolutionizes the way you invest in real-world commodities. Backed by BcP Blockchain technology, this secure platform provides seamless access to an NFT marketplace where you can purchase precious metals and commodities. Join us today and start diversifying your portfolio with Ploin Coin - a gateway to earning money through digital asset ownership.</p>
                            <button onClick={()=>setShowPloin(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_888} alt="" onLoad={onLoad}/>
                            <h2>Cryptopoly 888 <small>(The Game!!!)</small></h2>
                            <p>Introducing "Cryptopoly 888" - the newest addition to the BcP Coin ecosystem, a groundbreaking metaverse game that draws inspiration from the ever-popular board game Monopoly. Immerse yourself in a virtual world where you can trade, buy, and sell properties, all utilizing blockchain technology.</p>
                            <button onClick={()=>setShow888(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="wrapper mb-3" data-aos="fade-up">
                        <div className="left">
                            <img src={FerguxCorp} alt="" />
                            {/* <VideoCard video_url={video_url}/> */}
                        </div>
                        <div className="right">
                            <p>FerguxCorp Ltd is an American/British innovative blockchain technology company that has revolutionized the property industry by introducing a novel way to merge traditional property ownership with modern cryptocurrency investments. With the help of the Pumphouse platform, FerguxCorp Ltd has created a unique opportunity for experienced crypto miners to generate additional crypto currencies or commodities, such as physical gold and sterling, through the acquisition and management of real estate.</p>
                            <button>Get Started </button>
                        </div>
                        
                    </div>
                </div>
                <img src={back}alt="" className="bg" onLoad={onLoad}/>
                <img src={icon_01} alt="" className="effect1" onLoad={onLoad}/>
                <img src={icon_02} alt="" className="effect2" onLoad={onLoad}/>
                <img src={icon_03} alt="" className="effect3" onLoad={onLoad}/>
            </div>
            <CustomModal 
                showModal = {showPump} 
                setShowModal={setShowPump}
                children={<PumpHouse/>}
            />
            <CustomModal 
                showModal = {showBcp} 
                setShowModal={setShowBcp}
                children={<Bcp/>}
            />
            <CustomModal 
                showModal = {showBcpB} 
                setShowModal={setShowBcpB}
                children={<BcpB/>}
            />
            <CustomModal 
                showModal = {showDilly} 
                setShowModal={setShowDilly}
                children={<Dilly/>}
            />
            <CustomModal 
                showModal = {showPloin} 
                setShowModal={setShowPloin}
                children={<Ploin/>}
            />
            <CustomModal 
                showModal = {show888} 
                setShowModal={setShow888}
                children={<Cryptopoly/>}
            />
        </>
    )
}