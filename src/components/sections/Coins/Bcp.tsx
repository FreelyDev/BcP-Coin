import React from 'react'
import './coins.scss'
import VideoCard from 'components/videoCard/VideoCard'

import video_01 from '../../../assets/videos/Glass Box Bit Coin Alpha (Converted).mp4';
import video_02 from '../../../assets/videos/Animation -A4.mp4';
import video_03 from '../../../assets/videos/Glass Box Eth.mp4';
import video_04 from '../../../assets/videos/Block Bitcoin.mp4';
import video_05 from '../../../assets/videos/Block Eth.mp4';
import img_01 from '../../../assets/modal_imgs/bcp_01.png';
import coin_bcp from '../../../assets/coin_bcp.png';

export default function Bcp() {
  return (
    <div className="my_modal">
        <div className="content">
            <img src={coin_bcp} alt="" className="coin" />
            <h2>BcP</h2>
            <div className="wrapper">
              <div className="col">
                <VideoCard video_url={video_01}/>
              </div>
              <div className="col">
                <VideoCard video_url={video_02}/>
              </div>
              <div className="col">
                <VideoCard video_url={video_03}/>
              </div>
            </div>
            <div className="wrapper">
              <div className="text_div w_full">
                <h3 className='center'>BcP Token:</h3>
                <p className='center'>1Niche Platform: BcP Coin is the core currency of the BcP platform, catering exclusively to crypto miners and offering a specialized platform for their real estate investment needs.  Professional Real Estate Expertise: BcP leverages a team of experienced local real estate agents and corporate entities, incorporating their extensive knowledge and networks into the platform's operations. Tokenization Process: Through blockchain technology, BcP offers a professionally managed and insured tokenization process, allowing tenants to pay for Airbnb services using tokens.</p>
              </div>
            </div>
            <div className="wrapper">
              <div className="col">
              <VideoCard video_url={video_04}/>
              </div>
              <div className="col">
                <img src={img_01} alt="" />
              </div>
              <div className="col">
              <VideoCard video_url={video_05}/>
              </div>
            </div>
            <div className="wrapper">
              <div className="text_div w_full padding bc_color">
                <p className='center'>BcP Coin represents a revolutionary approach to real estate digital assets on the Blockchain Property - BcP platform. With features like specialized tokens, fractional ownership opportunities, and customized payout returns, BcP Coin empowers investors, leveraging the expertise of real estate professionals and the advancements of blockchain technology. Embrace the future of real estate and cryptocurrency with BcP Coin for a seamless and rewarding digital asset experience.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
