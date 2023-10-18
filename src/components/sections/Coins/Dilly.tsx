import './coins.scss'

import coin_dilly from '../../../assets/coin_dilly.png';
import dilly_01 from '../../../assets/modal_imgs/dilly_01.png';
import dilly_02 from '../../../assets/modal_imgs/dilly_02.png';
import dilly_03 from '../../../assets/modal_imgs/dilly_03.png';
import dilly_04 from '../../../assets/modal_imgs/dilly_04.png';
import dilly_05 from '../../../assets/modal_imgs/dilly_05.png';
import dilly_06 from '../../../assets/modal_imgs/dilly_06.png';
import dilly_07 from '../../../assets/modal_imgs/dilly_07.png';

export default function Dilly() {
  return (
    <div className="my_modal">
        <div className="content">
            <img src={coin_dilly} alt="" className="coin" />
            <h2>Dilly Coin</h2>

            <div className="wrapper">
              <div className="img_div">
                <img src={dilly_01} alt="" />
              </div>
              <div className="text_div padding_left">
                <p>Dillly Coin (DLC) redefines traditional real estate ownership by embracing the digital revolution and offering financial opportunities within meta-verses. With its innovative features and emphasis on income generation, DLC empowers Dilllylords to venture into the thriving world of digital assets and enjoy the benefits of this revolutionary digital product.</p>
              </div>
            </div>

            <div className="wrapper reverse_wrap">
              <div className="text_div padding_right">
                <p>Dillly Coin is a revolutionary real estate token specifically designed to tokenize, buy, sell, and auction digital assets within meta-verses. Short for "Digital Landlord," DLC provides a unique opportunity for token holders, known as Dilllylords, to participate in the digital marketplace and earn income through cryptocurrency-based payouts and NFT ownership.</p>
              </div>
              <div className="img_div">
                <img src={dilly_02} alt="" />
              </div>
            </div>

            <div className="wrapper">
              <div className="img_div">
                <img src={dilly_03} alt="" />
              </div>
              <div className="text_div padding_left">
                <p>Income Generation: DLC revolutionizes digital ownership by offering Dilllylords the opportunity to earn income in cryptocurrency. Through leasing or selling their digital assets and participating in the digital marketplace, Dilllylords can generate revenue streams in the form of crypto payouts, benefiting from the increasing demand for valuable digital assets.</p>
              </div>
            </div>
            <div className="wrapper">
              <div className="img_div w_full">
                <img src={dilly_04} alt="" />
              </div>
            </div>

            <div className="wrapper">
              <div className="col">
                <img src={dilly_05} alt="" className='w_60'/>
                <h3>E-bill Killer Coin</h3>
              </div>
              <div className="col">
                <img src={dilly_06} alt=""  className='w_60'/>
                <h3>Waterboy Coin</h3>
              </div>
              <div className="col">
                <img src={dilly_07} alt=""  className='w_60'/>
                <h3>Axeman Coin</h3>
              </div>
            </div>
        </div>
    </div>
  )
}
