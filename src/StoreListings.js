import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function StoreListings() {
    return (
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <Col style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                <Row className='listings-text'>
                    <Col xs=".5" >
                        <Image className='logo-pics' src="../Aldi-logo.png" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5">
                        <Image className='logo-pics' src="../Sprouts-logo.png" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5" >
                        <Image className='logo-pics' src="../Kroger-logo.png" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}

export default StoreListings;