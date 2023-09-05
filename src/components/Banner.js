import './Banner.css';

function Banner() {
    return (
        <div className="banner-container">
            <div className='banner-content'>
                <div className='banner-content-left'>
                <h3>Read my latest article!</h3>
                <div className='click-here-container'>
                <a className='click-here' href=''>Click Here</a>
                </div>
                </div>
                <div className='banner-content-right'>
                    <div className='banner-image-container'>
                    
                        <img src='/images/breastfeeding.jpg'/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Banner;