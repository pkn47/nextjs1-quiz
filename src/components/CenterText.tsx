import { Col, Row } from 'react-bootstrap';

export default function CenterText() {
  return (
    <Row className='align-items-center justify-content-center' id="centerText">
      <Col xs={8} className='text-center'>
        <h1>GLOBALLY INSPIRED, LOCALLY</h1>
        <h1>SOURCED</h1>
        <h3>KAILUA&#x27;S CRAFT KITCHEN AND LOUNGE</h3>
        <h5>Live Music Fridays and Saturdays</h5>
      </Col>
    </Row>
  );
}