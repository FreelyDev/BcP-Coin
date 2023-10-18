import coin_888 from '../../../assets/coin_888.png';
import img_01 from '../../../assets/game_board.png';
import img_02 from '../../../assets/modal_imgs/888_01.png';
import img_03 from '../../../assets/modal_imgs/888_02.png';

import './coins.scss'
export default function Cryptopoly() {
  return (
    <div className="my_modal">
        <div className="content">
            <img src={coin_888} alt="" className="coin" />
            <h2>Cryptopoly 888 Game!!!</h2>
            <div className="wrapper">
              <div className="col">
                <img src={img_01} alt="" className='w_60'/>
              </div>
            </div>

            <div className="wrapper">
              <div className="img_div">
                <img src={img_02} alt="" />
              </div>
              <div className="text_div padding_left">
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam sit duis nisi vel. Venenatis magna aliquam lectus in vulputate duis nibh platea. Tristique nisl amet sed gravida. Sed quisque morbi ullamcorper urna est eu mus nam. Id nibh iaculis nunc malesuada massa in. Id elit nunc vitae integer cras pellentesque est. Justo nibh nec a aliquam amet enim.</p>
              </div>
            </div>

            <div className="wrapper reverse_wrap">
              <div className="text_div padding_right">
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam sit duis nisi vel. Venenatis magna aliquam lectus in vulputate duis nibh platea. Tristique nisl amet sed gravida. Sed quisque morbi ullamcorper urna est eu mus nam. Id nibh iaculis nunc malesuada massa in. Id elit nunc vitae integer cras pellentesque est. Justo nibh nec a aliquam amet enim.</p>
              </div>
              <div className="img_div">
                <img src={img_03} alt="" />
              </div>
            </div>
            
        </div>
    </div>
  )
}
