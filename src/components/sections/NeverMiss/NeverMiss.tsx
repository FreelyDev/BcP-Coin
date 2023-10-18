import { useEffect, useState } from 'react'
import './never_miss.scss'

import img_01 from '../../../assets/38 1.png';
type LoadingType = {
    setIsLoading?(flag: boolean): void;
};

export default function NeverMiss({ setIsLoading }: LoadingType) {
    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 1) {
            setIsLoading && setIsLoading(false)
        }
    }, [setIsLoading, imgCount]);
    const [email, setEmail] = useState('')
    
    return (
        <>
            <div className="never_miss" >
                <div className="content">
                    <div className="wrapper" data-aos="fade-up">
                        <h2>Never Miss a Drop</h2>
                        <p>Sign up your Email Adress and never miss anything.</p>
                        <p>We will update you once per week!</p>
                        <div className="input_div">
                            <input type="text" placeholder='Email address' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            <button>Send</button>
                        </div>
                        
                    </div>
                </div>
                <img src={img_01} alt="" className="bg" onLoad={onLoad}/>
            </div>
            

        </>
    )
}