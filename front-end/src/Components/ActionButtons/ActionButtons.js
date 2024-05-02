import { useState, useEffect, useRef } from 'react';
import HangupButton from './HangupButton'
import socket from '../../webrtcUtilities/socketConnection'
import VideoButton from './VideoButton';
import AudioButton from './AudioButton';

const ActionButtons = ({callStatus,localFeedEl, remoteFeedEl,updateCallStatus,localStream,peerConnection})=>{
    // const callStatus = useSelector(state=>state.callStatus);
    const menuButtons = useRef(null)

    return(
        <div id="menu-buttons" ref={menuButtons} className="row">
            <div className="left col-6">
                <AudioButton 
                    localFeedEl={localFeedEl}
                    callStatus={callStatus}
                    updateCallStatus={updateCallStatus}
                    localStream={localStream}
                    peerConnection={peerConnection}                    
                />
                <VideoButton 
                    localFeedEl={localFeedEl}
                    callStatus={callStatus}
                    localStream={localStream}
                    updateCallStatus={updateCallStatus}
                    peerConnection={peerConnection}
                />
            </div>
            <div className="center justify-center text-end col-2 hangup-wrapper">
                <HangupButton
                    localFeedEl={localFeedEl}
                    remoteFeedEl={remoteFeedEl}
                    peerConnection={peerConnection}
                    callStatus={callStatus}
                    updateCallStatus={updateCallStatus}
                />
            </div>        
        </div>
    )
}

export default ActionButtons;