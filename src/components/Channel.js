import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Channel.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Channel() {
    return (
        <div className='channel-container'>
            <div className='channel'>
                <h1><span>The</span><br></br>Channel</h1>
                <p>On my channel I am passionate about a variety of topics. I speak against the depravity of modern Western 
                culture, femininity, relationships, and politics.
                </p>
                <button>Watch Now</button>
            </div>
            <div className='channel-video-container'>
                <h2>Most Popular Videos</h2>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/promiscous.jpg'/>
              <div>
                 <p className='channel-video-text'>ex promiscous woman's warning to young women!|The Femcast</p>
                <span><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
              </div>
               
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/wall.jpg'/>
              <div>
                 <p className='channel-video-text'>another female celebrity hits the wall hard |the femcast</p>
                <span><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
              </div>
               
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/tradwife.jpg'/>
              <div>
                 <p className='channel-video-text'>debunking the trad wife delusion feat. megha lillywhite |pt.1</p>
                <span><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
              </div>
               
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/womenlose.jpg'/>
              <div>
                 <p className='channel-video-text'>women lose good men because of this!</p>
                <span><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
              </div>
               
             </div>
             <div className='channel-video-content'>
                <img 
                className='channel-video-image'
                src='/images/dangerous.jpg'/>
              <div>
                 <p className='channel-video-text'>the real reason women need dangerous men |the femcast</p>
                <span><FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon></span>
              </div>
               
             </div>
            </div>
            
                  
                   
              
                    {/* <div className='flex-container'>
                    <div className='channel-image-container'>
                        <img src='/images/wall.jpg'/>
                    </div>
                    <div className='text-container'>
                        <p>
                        another female celebrity hits the wall hard |the femcast
                        </p>
                        <span className='play-button'>
                            <FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon>
                        </span>
                    </div>
                    </div>   
                    <div className='flex-container'>
                    <div className='channel-image-container'>
                        <img src='/images/tradwife.jpg'/>
                    </div>
                    <div className='text-container'>
                         <p>
                        debunking the trad wife delusion feat. megha lillywhite |pt.1
                        </p>
                        <span className='play-button'>
                            <FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon>
                        </span>
                    </div>
                    </div>   
                    <div className='flex-container'>
                    <div className='channel-image-container'>
                        <img src='/images/womenlose.jpg'/>
                    </div>
                    <div className='text-container'>
                        <p>
                        women lose good men because of this!
                        </p>
                        <span className='play-button'>
                            <FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon>
                        </span>
                    </div>
                    </div>   
                    <div className='flex-container'>
                    <div className='channel-image-container'>
                        <img src='/images/dangerous.jpg'/>
                    </div>
                    <div className='text-container'>
                        <p>
                        the real reason women need dangerous men |the femcast
                        </p>
                        <span className='play-button'>
                            <FontAwesomeIcon icon={faPlay} size='xl'></FontAwesomeIcon>
                        </span>
                    </div>
                        
                    </div>
                </div> */}
    
        </div>
    )
}

export default Channel;