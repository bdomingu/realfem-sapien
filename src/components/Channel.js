import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Channel.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Channel() {
    return (
        <section id='channel'>
        <div className='channel-container'>
            <div className='channel'>
                <h1><span>The</span><br></br>Channel</h1>
                <p>On my channel I am passionate about a variety of topics. I speak against the depravity of modern Western 
                culture, femininity, relationships, and politics.
                </p>
                <a href='https://www.youtube.com/@RealFemSapien'><button>Watch Now</button></a>
            </div>
            <div className='channel-video-container'>
                <h2>Most Popular Videos</h2>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/promiscous.jpg'
                alt='youtube-promiscous'
                />
              <div>
                 <p className='channel-video-text'>ex promiscous woman's warning to young women!|The Femcast</p>
                 <div className='play-button-container'>
                    <a className='play-button' href='https://youtu.be/s4cEurIX6WM?si=VAAP882Gm96yLksi'>
                    <span ><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
                    </a>
                 </div>
                
              </div>
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/wall.jpg'
                alt='youtube-wall'
                />
              <div>
                 <p className='channel-video-text'>another female celebrity hits the wall hard |the femcast</p>
                 <div className='play-button-container'>
                    <a className='play-button' href='https://www.youtube.com/watch?v=v_o-aRbJSHU'>
                    <span ><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
                    </a>
                 </div>
              </div>
               
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/tradwife.jpg'
                alt='youtube-tradwife'
                />
              <div>
                 <p className='channel-video-text'>debunking the trad wife delusion feat. megha lillywhite |pt.1</p>
                 <div className='play-button-container'>
                    <a className='play-button' href='https://www.youtube.com/watch?v=c36g0dO0Jd4'>
                    <span ><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
                    </a>
                 </div>
              </div>
               
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/womenlose.jpg'
                alt='youtube-womenlose'
                />
              <div>
                 <p className='channel-video-text'>women lose good men because of this!</p>
                 <div className='play-button-container'>
                    <a className='play-button' href='https://www.youtube.com/watch?v=GsZeEcrxnFE'>
                    <span ><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
                    </a>
                 </div>
              </div>
               
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/dangerous.jpg'
                alt='youtube-dangerous'
                />
              <div>
                 <p className='channel-video-text'>the real reason women need dangerous men |the femcast</p>
                 <div className='play-button-container'>
                    <a className='play-button' href='https://www.youtube.com/watch?v=elHmcxHd730'>
                    <span ><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
                    </a>
                 </div>
              </div>
               
             </div>
            </div> 
        </div>
        </section>
    )
}

export default Channel;