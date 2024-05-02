import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import CallerVideo from './Components/CallerVideo'
import AnswerVideo from './Components/AnswerVideo'
import Home from './Components/Home'

function App() {

  //holds: callStatus, haveMedia, videoEnabled, audioEnabled, 
    // haveOffer
  const [ callStatus, updateCallStatus ] = useState({})
  const [ localStream, setLocalStream ] = useState(null)
  const [ remoteStream, setRemoteStream ] = useState(null)
  const [ peerConnection, setPeerConnection ] = useState(null)
  const [ userName, setUserName ] = useState("")
  const [ offerData, setOfferData ] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Home 
            callStatus={callStatus} 
            updateCallStatus={updateCallStatus}
            localStream={localStream}
            setLocalStream={setLocalStream}
            remoteStream={remoteStream}
            setRemoteStream={setRemoteStream}
            peerConnection={peerConnection}
            setPeerConnection={setPeerConnection}
            userName={userName}
            setUserName={setUserName}
            offerData={offerData}
            setOfferData={setOfferData}
          />
        }/>
        <Route exact path="/offer" element={
          <CallerVideo 
            callStatus={callStatus} 
            updateCallStatus={updateCallStatus} 
            localStream={localStream}
            setLocalStream={setLocalStream}
            remoteStream={remoteStream}
            setRemoteStream={setRemoteStream}  
            peerConnection={peerConnection}
            userName={userName}
            setUserName={setUserName}            
          />} 
        />
        <Route exact path="/answer" element={
          <AnswerVideo 
            callStatus={callStatus} 
            updateCallStatus={updateCallStatus} 
            localStream={localStream}
            setLocalStream={setLocalStream}
            remoteStream={remoteStream}
            setRemoteStream={setRemoteStream}               
            peerConnection={peerConnection}
            userName={userName}
            setUserName={setUserName}
            offerData={offerData}
          />} 
        />
      </Routes>
    </BrowserRouter>        
  );
}

export default App;
