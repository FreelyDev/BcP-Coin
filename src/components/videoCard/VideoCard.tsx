import { useState } from 'react';
import './videoCard.scss'

type PropsType = {
    video_url ?:string
};
export default function VideoCard({ video_url }: PropsType) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <div className="video_div">
                <div className="video_cotent">
                    <video autoPlay = {true} muted = {true} playsInline onLoadedData={()=>setIsLoading(false)} loop>
                        <source src={video_url} type="video/mp4"/>
                    </video>
                </div>
                {isLoading && <div className="video_cover"></div>}
            </div>
        </>
    )
}