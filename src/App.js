import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Banner from './components/Banner';
import About from './components/About';
import LogoBanner from './components/LogoBanner';
import Channel from './components/Channel';
import Carousel from './components/Carousel';
import Subscription from './components/Subscription';
import Footer from './components/Footer';


function App() {
 
  
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Banner/>
      <About/>
      <LogoBanner/>
      <Channel/>
      <Carousel/>
      <Subscription/>
      <Footer/>
    </div>
  );
}

export default App;
