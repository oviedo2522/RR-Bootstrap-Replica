import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
    return (
        <Container className='Banner-text'>
            <Row>
                <Col sm><h1>Order groceries for <br/>delivery or pickup today</h1></Col>
            </Row>
            <Row>
                <Col sm>Whatever you want from local stores, brought right to your door.</Col>
            </Row>
        </Container>
    );
}

export default Banner;