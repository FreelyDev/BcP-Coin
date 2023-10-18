import './customModal.scss'
import Bounce from 'react-reveal/Bounce';
import close_icon from '../../assets/icons/icon_close.svg';
import { useEffect, useState } from 'react';
interface Props {
    showModal: boolean,
    setShowModal?: any,
    title?:string,
    children?:any

}
const CustomModal: React.FC<Props> = ({showModal, setShowModal, title, children}) => {

    const [isStart, setIsStart] = useState(false)
    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setIsStart(true)
            }, 100)
        }

    }, [setIsStart, showModal]);
    const onClose = () => {
        setIsStart(false)
        setTimeout(() => {
            setShowModal(false);
        }, 800)
    }
    return (
        <div className={showModal === true ? "customModal active" : "customModal"}>
            <Bounce opposite when={isStart}>
                <div className={`model_content`}>
                    <div className="modal_header">
                        <h1 className={`modal_title`}>{title}</h1>
                        <button className={`close_btn`} onClick={onClose}><img src={close_icon} alt="" /></button>
                    </div>
                    <div className="modal_wrapper">
                        {children}
                    </div>
                </div>
            </Bounce>

        </div>
    )
}
export default CustomModal;