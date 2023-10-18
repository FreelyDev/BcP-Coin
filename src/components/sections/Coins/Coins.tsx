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
import coin_pumphouse from '../../../assets/coin_pumphouse.png';
import coin_bcpb from '../../../assets/coin_bcpb.png';
import coin_dilly from '../../../assets/coin_dilly.png';
import coin_ploin from '../../../assets/coin_ploin.png';
import coin_888 from '../../../assets/coin_888.png';
import video_url from '../../../assets/videos/Replace_this.mp4';
import icon_01 from '../../../assets/icons/icon_star_02.svg';
import icon_02 from '../../../assets/icons/icon_star_03.svg';
import back from '../../../assets/background_03.png';
import icon_03 from '../../../assets/Vector.png';

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
                            <h2>Pumphouse</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas varius sed quam venenatis porttitor eu praesent netus quis. Eget et magnis ac odio eget sed purus id. Sit morbi laoreet in.</p>
                            <button onClick={()=>setShowPump(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_bcp} alt="" onLoad={onLoad}/>
                            <h2>BcP</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas varius sed quam venenatis porttitor eu praesent netus quis. Eget et magnis ac odio eget sed purus id. Sit morbi laoreet in.</p>
                            <button onClick={()=>setShowBcp(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_bcpb} alt="" onLoad={onLoad}/>
                            <h2>BcPB</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas varius sed quam venenatis porttitor eu praesent netus quis. Eget et magnis ac odio eget sed purus id. Sit morbi laoreet in.</p>
                            <button onClick={()=>setShowBcpB(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_dilly} alt="" onLoad={onLoad}/>
                            <h2>Dilly Coin</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas varius sed quam venenatis porttitor eu praesent netus quis. Eget et magnis ac odio eget sed purus id. Sit morbi laoreet in.</p>
                            <button onClick={()=>setShowDilly(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_ploin} alt="" onLoad={onLoad}/>
                            <h2>Ploin Coin</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas varius sed quam venenatis porttitor eu praesent netus quis. Eget et magnis ac odio eget sed purus id. Sit morbi laoreet in.</p>
                            <button onClick={()=>setShowPloin(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="card">
                            <img src={coin_888} alt="" onLoad={onLoad}/>
                            <h2>Cryptopoly 888</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas varius sed quam venenatis porttitor eu praesent netus quis. Eget et magnis ac odio eget sed purus id. Sit morbi laoreet in.</p>
                            <button onClick={()=>setShow888(true)}>Get Started <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="wrapper mb-3" data-aos="fade-up">
                        <div className="left">
                            <VideoCard video_url={video_url}/>
                        </div>
                        <div className="right">
                            <p>FerguxCorp's brainchild will ultimately be its unique token system. The primary token and platform are named "Blockchain.BITCOIN," initially operating as an Ethereum/Polygon token called "BCP." The platform is designed to release five distinct tokens catering to various aspects of the property and technology industries.</p>
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