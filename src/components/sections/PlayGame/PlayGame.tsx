import { useEffect, useState } from 'react';
import './play_game.scss'

import img_01 from '../../../assets/8vF0cvr1PEzPlycWvO9wAnAe2pXGpUK04Zj16kJE 1.png';
type LoadingType = {
    setIsLoading?(flag: boolean): void;
};
export default function PlayGame({ setIsLoading }: LoadingType) {
    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 1) {
            setIsLoading && setIsLoading(false)
        }
    }, [setIsLoading, imgCount]);
    return (
        <>
            <div className="play_game">
                <div className="content">
                    <div className="wrapper mb-3" data-aos="fade-up">
                        <div className="left">
                            <h1>Play game or invest to <span>grab your NftS</span></h1>
                            <p>Join FerguxCorp on its journey to revolutionize the property market and become a part of this groundbreaking endeavour in the UK. Encourage investment in Britain and leverage the power of cryptocurrency to create a better future.</p>
                            <button>Get Started</button>
                        </div>
                        <div className="right">
                            <img src={img_01} alt="" onLoad={onLoad}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}