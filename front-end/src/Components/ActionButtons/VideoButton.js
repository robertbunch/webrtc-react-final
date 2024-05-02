
const VideoButton = ({localFeedEl,callStatus,localStream,updateCallStatus,peerConnection})=>{

    //handle user clicking on video button
    const startStopVideo = ()=>{
        const copyCallStatus = {...callStatus}
        // useCases:
        if(copyCallStatus.videoEnabled){
            // 1. Video is enabled, so we need to disable
            //disable
            copyCallStatus.videoEnabled = false
            updateCallStatus(copyCallStatus)
            const tracks = localStream.getVideoTracks()
            tracks.forEach(track=>track.enabled = false)
        }else if(copyCallStatus.videoEnabled === false){
            // 2. Video is disabled, so we need to enable
            copyCallStatus.videoEnabled = true
            updateCallStatus(copyCallStatus)
            const tracks = localStream.getVideoTracks()
            tracks.forEach(track=>track.enabled = true)
        }else if(copyCallStatus.videoEnabled === null){
            // 3. Video is null, so we need to init
            console.log("Init video!")
            copyCallStatus.videoEnabled = true
            updateCallStatus(copyCallStatus)
            // we are not adding tracks so they are visible 
            // in the video tag. We are addign them
            // to the PC, so they can be sent
            localStream.getTracks().forEach(track=>{
                peerConnection.addTrack(track,localStream)
            })
        }
    }

    return(
        <div className="button-wrapper video-button d-inline-block">
            <i className="fa fa-caret-up choose-video"></i>
            <div className="button camera" onClick={startStopVideo}>
                <i className="fa fa-video"></i>
                <div className="btn-text">{callStatus.video === "enabled" ? "Stop" : "Start"} Video</div>
            </div>
        </div>
    )
}
export default VideoButton;