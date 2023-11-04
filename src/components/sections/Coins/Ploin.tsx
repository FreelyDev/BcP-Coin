import './coins.scss'

import coin_ploin from '../../../assets/coin_ploin.png';
import polin_01 from '../../../assets/modal_imgs/polin_01.png';
import polin_02 from '../../../assets/modal_imgs/polin_02.png';
import polin_03 from '../../../assets/modal_imgs/polin_03.png';
import polin_04 from '../../../assets/modal_imgs/polin_04.png';
import polin_05 from '../../../assets/modal_imgs/polin_06.png';
export default function Ploin() {
  return (
    <div className="my_modal">
        <div className="content">
            <img src={coin_ploin} alt="" className="coin" />
            <h2>Ploin Coin</h2>
              <div className="wrapper">
              <div className="text_div w_full">
                <p className='center'>Introducing Ploin Coin - the Property, Land, & Commodities Coin that revolutionizes the way you invest in precious metals and commodities. Designed with a specialized focus on tokenized assets, including real estate, land, and valuable resources, Ploin Coin offers a seamless and secure path to diversify your investment portfolio.</p>
              </div>
            </div>

            <div className="wrapper">
              <div className="col">
                <img src={polin_01} alt="" />
              </div>
              <div className="col">
              <img src={polin_02} alt="" />
              </div>
              <div className="col">
                <img src={polin_03} alt="" />
              </div>
              <div className="col">
                <img src={polin_04} alt="" />
              </div>
            </div>
            <div className="wrapper">
              <div className="text_div w_full">
                <p className='center'>Invest in Ploin Coin, the crypto token that allows you to own digital assets and earn money. With a focus on property, land, and precious metals, Ploin Coin revolutionizes the way you invest in real-world commodities. Backed by BcP Blockchain technology, this secure platform provides seamless access to an NFT marketplace where you can purchase precious metals and commodities. Join us today and start diversifying your portfolio with Ploin Coin - a gateway to earning money through digital asset ownership.</p>
              </div>
            </div>

            <div className="wrapper">
              <div className="col">
                <img src={polin_05} alt="" className='w_20' />
                <h2>Whale City Token</h2>
              </div>
            </div>
        </div>
    </div>
  )
}
