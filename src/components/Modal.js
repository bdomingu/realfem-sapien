import { Modal, Form, Button, InputGroup } from "react-bootstrap";


function Modal() {
    const [checkout, setCheckout] = useState(0);

return (
<Modal className="row" centered show={checkout} size="lg">
<Modal.Header>
  <Modal.Title className="description text-dark text-center">
    Services
  </Modal.Title>
</Modal.Header>
<Modal.Body className="pb-0" >
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
            value="SA29LQQRXKFAC"
          />
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
</Modal>
)
}

export default Modal;