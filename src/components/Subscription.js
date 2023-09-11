import './Subscription.css';

function Subscription () {
    return (
        <div className='subscribe-container'>
            <div className='title-container'>
                <h1>Stay Connected</h1>
            </div>
           
            <div className='subscribe-flex'>
            <div className='subscription-flex-container'>
                <p>Stay updated on my SUBSTACK you can subscribe below!</p>
                <button className='subscribe-button'>
                    Subscribe
                </button>
                </div>
                <img
                    className='heart-image'
                    src="/images/mailheart.png"
                    alt='heart-mail'
                />
            </div>
            <div className='session-container'>
                <div className='session-text'>
                    <p>If you're ready to start dating with intention, you can hit the button to set up a personal session with me!</p>
                </div>
                <div className='talk-button'>
                    <button>Lets Talk</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription;