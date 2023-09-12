import { useState } from 'react';
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
import { Modal, Form, Button } from "react-bootstrap";


function App() {
    
  const finalTextStyle = { fontStyle: `italic`, fontSize: "0.5em"};

  const [checkout, setCheckout] = useState(0);
  const[show, setShow ] = useState(true);
  const handleClose = () => setShow(false);


  const toggleCheckout = () => {
    if (checkout) {
      setCheckout(0);
    } else {
      setCheckout(1);
      handleClose();
    }
  };
  
  return (
    <><Modal className="row" centered show={checkout} size="lg">
      <Modal.Header>
        <Modal.Title className="description text-dark text-center">
          Services
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pb-0">
        <Form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="formBasicEmail"
          >
            <Form.Check.Input
              className="bg-dark"
              variant="primary"
              type="checkbox"
              checked
            ></Form.Check.Input>
            <Form.Label className="text-dark">
              60-Minute Consultation
            </Form.Label>
            <div>
              <Button variant="primary" type="submit">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="SA29LQQRXKFAC" />
                Checkout with PayPal
              </Button>
              <div className="text-dark d-flex justify-content-center" style={finalTextStyle}>
                <strong>All sales are final.</strong>
              </div>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="danger" onClick={toggleCheckout}>
          No thanks!
        </Button>
      </Modal.Footer>
    </Modal><div className="App">
        <Nav setCheckout={setCheckout}/>
        <Hero setCheckout={setCheckout}/>
        <Banner />
        <About />
        <LogoBanner />
        <Channel />
        <Carousel />
        <Subscription setCheckout={setCheckout}/>
        <Footer />
      </div></>
  );
}

export default App;
