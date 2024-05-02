const VideoMessage = ({message}) => {
    if(message){
        return <div className="call-info"> <h1>{message}</h1></div>
    } else{
        return <></>
    }
}

export default VideoMessage