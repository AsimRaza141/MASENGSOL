import Carousel from 'react-bootstrap/Carousel';
import masVideo from '../Videos/mas-video.mp4';
import masVideo2 from '../Videos/mas-video2.mp4';
import masVideo3 from '../Videos/mas-video3.mp4';
import './Hero.css';

const Hero = ({navbarState = false}) => {
  return (
    <section id="home" className="hero d-flex justify-content-center align-items-center">
      <Carousel fade className={navbarState ? 'mas_carousel' : ''} touch={true}>
        <Carousel.Item>
          <video className="mas-video" autoPlay muted loop>
            <source src={masVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <video className="mas-video" autoPlay muted loop>
            <source src={masVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <video className="mas-video" autoPlay muted loop>
            <source src={masVideo3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;