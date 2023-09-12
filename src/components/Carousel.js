import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';


function Carousel () {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel">
      <h2 className='carousel-heading'>What's new on <span className='carousel-heading-cursive'>Instagram</span></h2>

    <Slider {...settings}>
      <div className="box">
      
        <iframe
        title='ig-post-1' 
        class="responsive-iframe" 
        src="https://www.instagram.com/p/Cw3DVVOujVj/embed/"
        height={250}
        width={260}
        >
        </iframe>
 

      </div>
      <div className="box">
        <iframe
        title='ig-post-2'
        class="responsive-iframe" 
        src='https://www.instagram.com/p/Cw0X7HbufLz/embed/'
        height={250}
        width={260}
        >
        </iframe>
      </div>
      <div className="box">
        <iframe
        title='ig-post-3'
        class="responsive-iframe" 
        src='https://www.instagram.com/p/CwvgyuOuFIG/embed/'
        height={250}
        width={260}
        >
        </iframe>      
      </div>
      <div className="box">
        <iframe
        title='ig-post-4'
        class="responsive-iframe" 
        src='https://www.instagram.com/p/CwsaFJxOc2o/embed/'
        height={250}
        width={260}
        >
        </iframe>  
      </div>
      <div className="box">
      <iframe
        title='ig-post-5'
        class="responsive-iframe" 
        src='https://www.instagram.com/p/Cwh3Rj5K6ik/embed/'
        height={250}
        width={260}
        >
        </iframe>
      </div>
      <div className="box">
        <iframe
        title='ig-post-6'
        class="responsive-iframe" 
        src='https://www.instagram.com/p/CwdXD77uTsY/embed/'
        height={250}
        width={260}
        >
        </iframe>
      </div>
      </Slider>
    </div>
    
  );
};

export default Carousel;
