import  { useState,useEffect } from 'components';
// import video from '../videos/main.mp4';

function Splash(props) {
  const [matches,setMathces] = useState(false);

  useEffect(() => {
    let isMatches = window.matchMedia("(max-width: 768px)").matches
    setMathces(isMatches)
    return () => {
      setMathces(false)
    }
  }, [])

  //
  return (
<>
    {
     (matches ? <></>: <video autoPlay muted className="myVideo">
        {/* <source src={"https://cms-full-page-iframe.vice.com/shortlist/video/shortlist-fire-desktop-loop-v1.mp4"} type="video/mp4" /> */}
        <source src={"https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4"} type="video/mp4" />
      </video>)
    }

</>
  );
}

export default Splash;