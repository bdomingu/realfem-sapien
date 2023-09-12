import './Hero.css';

function Hero (props) {
  return (
    <section id='home'>
    <div className='hero-container'>
      <div className='hero-content-container'>
      <div className='hero-image-container'>
      <img 
          className='feminine-image'
          src='/images/feminineAccent.png'
          alt='feminine'
          />
 
      </div>
        
        <div className='hero-text-container'>
          <h2>Tired of modern dating?</h2>
          <h4>Awaken your feminine power</h4>
          <p>Dating in modern times doesn't have to be hard. You can win the relationship you've been seeking. Unlock your future to romantic education below!</p>
          <img
          className='arrow-image'
          src='/images/arrow.png'
          alt='arrow'
          />
          <div className='book-button-container'>
          <button onClick={props.setCheckout}>Book Me</button>
          </div>
         
        </div>
        
      </div>
    </div>
    </section>
  )
}

export default Hero;