import VideoCard from 'components/videoCard/VideoCard'
import './coins.scss'

import coin_pumphouse from '../../../assets/coin_pumphouse.png';
import video_url_01 from '../../../assets/videos/Glass Box Bit Coin Alpha (Converted).mp4';
import video_url_02 from '../../../assets/videos/Replace_this.mp4';
import video_url_03 from '../../../assets/videos/Glass Box Eth.mp4';
import pumphouse_03 from '../../../assets/modal_imgs/pumphouse_03.png';
import pumphouse_04 from '../../../assets/modal_imgs/pumphouse_04.png';
import video_url_04 from '../../../assets/videos/PumpHouse_section_Animation.mp4';

export default function PumpHouse() {
  return (
    <div className="my_modal">
        <div className="content">
            <img src={coin_pumphouse} alt="" className="coin" />
            <h2>Pumphouse</h2>
            <div className="wrapper">
              <div className="col">
                <VideoCard video_url={video_url_01}/>
              </div>
              <div className="col">
                <VideoCard video_url={video_url_02}/>
              </div>
              <div className="col">
                <VideoCard video_url={video_url_03}/>
              </div>
            </div>
            <div className="wrapper">
              <div className="text_div padding_right">
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam sit duis nisi vel. Venenatis magna aliquam lectus in vulputate duis nibh platea. Tristique nisl amet sed gravida. Sed quisque morbi ullamcorper urna est eu mus nam. Id nibh iaculis nunc malesuada massa in. Id elit nunc vitae integer cras pellentesque est. Justo nibh nec a aliquam amet enim.</p>
              </div>
              <div className="img_div">
                <VideoCard video_url={video_url_04}/>
                {/* <img src={pumphouse_03} alt="" /> */}
              </div>
            </div>
            <div className="wrapper reverse_wrap">
              <div className="img_div">
                <img src={pumphouse_04} alt="" />
              </div>
              <div className="text_div padding_left">
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam sit duis nisi vel. Venenatis magna aliquam lectus in vulputate duis nibh platea. Tristique nisl amet sed gravida. Sed quisque morbi ullamcorper urna est eu mus nam. Id nibh iaculis nunc malesuada massa in. Id elit nunc vitae integer cras pellentesque est. Justo nibh nec a aliquam amet enim.</p>
              </div>
              
            </div>
        </div>
    </div>
  )
}
