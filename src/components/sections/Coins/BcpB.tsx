import VideoCard from 'components/videoCard/VideoCard'
import coin_bcpb from '../../../assets/coin_bcpb.png';
import video_01 from '../../../assets/videos/Block Bitcoin.mp4';
import video_02 from '../../../assets/videos/BcPB_center_animation.mp4';
import video_03 from '../../../assets/videos/Block Eth.mp4';
import img_01 from '../../../assets/modal_imgs/bcpb_03.png';
import img_02 from '../../../assets/modal_imgs/bcpb_04.png';

import './coins.scss'
export default function BcpB() {
  return (
    <div className="my_modal">
        <div className="content">
            <img src={coin_bcpb} alt="" className="coin" />
            <h2>BcPB Coin</h2>
            <div className="wrapper">
              <div className="col">
                <VideoCard video_url={video_01}/>
              </div>
              <div className="col">
                <VideoCard video_url={video_02}/>
              </div>
              <div className="col">
                <img src={img_01} alt="" />
              </div>
            </div>
            <div className="wrapper">
              <div className="text_div padding_right">
                <h3>BcPB Token:</h3>
                <p>Bitcoin Variant Payouts: The BcPB Token on the BcP platform is designed to specifically target Bitcoin variant enthusiasts, offering customized payouts in their preferred Bitcoin variant cryptocurrency. PumpHouse Units and Blocks: BcPB Token integrates with the PumpHouse digital assets and fractional ownership platform, allowing investors to diversify their portfolios and gain fractional ownership of propertys.</p>
              </div>
              <div className="img_div">
                <img src={img_02} alt="" />
              </div>
            </div>
            <div className="wrapper reverse_wrap">
              <div className="img_div">
                <VideoCard video_url={video_03}/>
              </div>
              <div className="text_div padding_left">
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam sit duis nisi vel. Venenatis magna aliquam lectus in vulputate duis nibh platea. Tristique nisl amet sed gravida. Sed quisque morbi ullamcorper urna est eu mus nam. Id nibh iaculis nunc malesuada massa in. Id elit nunc vitae integer cras pellentesque est. Justo nibh nec a aliquam amet enim.</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}
