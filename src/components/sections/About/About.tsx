import { useEffect, useState } from 'react';
import './about.scss'
import img1 from '../../../assets/bcp_project_01.png' 
import img2 from '../../../assets/Group 427319086.png' 
import img3 from '../../../assets/icons/icon_star_01.svg' 

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};
export default function About({ setIsLoading }: LoadingType) {
    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 3) {
            setIsLoading && setIsLoading(false)
        }
    }, [setIsLoading, imgCount]);
    return (
        <>
            <div className="about" id = 'about'>
                <div className="content">
                    <div className="title">
                        <h3>BcP Coin</h3>
                        <h1>The BcP Project</h1>
                        <p>The BCPB Platform is a state-of-the-art blockchain-based solution designed specifically for investors looking to invest in the property market with a primary focus on Bitcoin transactions. Initially concentrating on the British market.. <span>Read More</span></p>
                        <h3>Key Features:</h3>
                    </div>
                    <div className="wrapper" data-aos="fade-up">
                        <div className="img_div">
                            <img src={img1} alt="" onLoad={onLoad}/>
                        </div>
                        <div className="text_div">
                            <ul>
                                <li>
                                    <h2>Bitcoin-Centric Property Investment:</h2>
                                    <p>BCPB Platform is designed for investors worldwide, with an... <span>Read More</span></p>
                                </li>
                                <li>
                                    <h2>Digital Property Auctions:</h2>
                                    <p>BCPB Platform offers a unique feature that enables digital...<span>Read More</span></p>
                                </li>
                                <li>
                                    <h2>Tokenized Property Transactions:</h2>
                                    <p>The platform utilizes blockchain technology to tokenize...<span>Read More</span></p>
                                </li>
                                <li>
                                    <h2>Ethereum-Based Token:</h2>
                                    <p>BCPB tokens are ERC20 tokens on the Ethereum network...<span>Read More</span></p>
                                </li>
                                <li>
                                    <h2>Boosting Local Economies:</h2>
                                    <p>By attracting global investors to various property...<span>Read More</span></p>
                                </li>
                                <li>
                                    <h2>Customizable Solutions:</h2>
                                    <p>The BCPB Platform can accommodate various property...<span>Read More</span></p>
                                </li>
                            </ul>
                        </div>
                        <div className="img_div_right">
                        <img src={img2} alt="" onLoad={onLoad}/>
                        </div>
                    </div>
                    <img src={img3} alt=""  className="effect1" onLoad={onLoad}/>
                </div>
            </div>
            

        </>
    )
}