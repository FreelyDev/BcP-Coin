import { useEffect, useState } from 'react';
import './game_board.scss'
import VideoCard from 'components/videoCard/VideoCard';

import video_url_01 from '../../../assets/videos/Glass Box Bit Coin Alpha (Converted).mp4';
import video_url_02 from '../../../assets/videos/Replace_this.mp4';
import video_url_03 from '../../../assets/videos/BcPB_center_animation.mp4';
import video_url_04 from '../../../assets/videos/Animation -A4.mp4';
import video_url_05 from '../../../assets/videos/GameBoard_2_1.mp4';
import game_board from '../../../assets/game_board.png';

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};
export default function GameBoard({ setIsLoading }: LoadingType) {
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
            <div className="game_board" id = 'game_board'>
                <div className="content">
                    <div className="wrapper" data-aos="fade-up">
                        <div className="img_div">
                            <VideoCard video_url={video_url_01}/>
                        </div>
                        <div className="img_div">
                        <VideoCard video_url={video_url_02}/>
                        </div>
                        <div className="img_div">
                        <VideoCard video_url={video_url_03}/>
                        </div>
                        <div className="img_div">
                        <VideoCard video_url={video_url_04}/>
                        </div>
                    </div>
                    <div className="wrapper" data-aos="fade-up">
                        <div className="video_div_full">
                                <video autoPlay = {true} muted = {true} playsInline onLoadedData={()=>onLoad()} loop>
                                    <source src={video_url_05} type="video/mp4"/>
                                </video>
                            {imgCount === 0 && <div className="video_cover"><img src={game_board} alt="" /></div>}
                        </div>
                    </div>
                        </div>
            </div>
            

        </>
    )
}