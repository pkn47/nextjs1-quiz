import { Button, Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer id="bottomMenu" className='mt-auto py-3'>
      <Container>
        <Row>
          <Col xs={2}>
            <h3>LOCATION</h3><strong>KAILUA</strong><br />32 Malinu Ave,<br />Kailua, HI 96734<br />(808)
            261-6733<br />
          </Col>
          <Col xs={1} />
          <Col xs={5}>
            <h3>BUSINESS HOURS</h3>
            <Row>
              <Col>
                <strong>Mondays, Wednesdays, Thursdays</strong><br />OPEN 4pm - 10pm<br />
                Happy Hour 4pm - 6pm<br />
                Dinner 4pm - 9pm<br />
                <strong>Fridays</strong><br />
                OPEN 4pm - 11pm<br />
                Happy Hour 4pm - 6pm<br />
                Dinner 4pm - 10pm<br />
              </Col>
              <Col>
                <h5>Saturdays</h5>
                OPEN 9am - 11pm<br />
                Brunch 9am - 1pm<br />
                Happy Hour 4pm - 6pm<br />
                Dinner 4pm - 10pm<br />
              </Col>
            </Row>
          </Col>
          <Col xs={1} />
          <Col xs={3} className='justify-content-center'>
            <h3>SUBSCRIBE</h3>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email Address" /><br />
            <Button variant='light'>Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}