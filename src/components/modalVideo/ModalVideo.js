import React ,{useEffect, useState} from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './modalVideo.scss';

export const ModalVideo = (props) => {

    const { videoKey , videoPlatform, isOpen, close} = props;
    const [urlVideo, setUrlVideo] = useState(null);

    useEffect(() => {
        
        switch (videoPlatform) {
            
            case "YouTube":
               
                setUrlVideo(`https://youtu.be/${videoKey}`);
                break;
        
            case "Vimeo":
                
                setUrlVideo(`https://vimeo.com/${videoKey}`);
                break;
            default:
                
                break;
        }
        
    }, [videoKey, videoPlatform])

    return (
        <Modal 
            className="modal-video"
            visible = {isOpen}
            centered
            onCancel={close}
            footer = {false}
        >
            <ReactPlayer url = {urlVideo} controls />

        </Modal>
    );
}
