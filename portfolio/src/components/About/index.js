import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function About(){
    return <Container>
        <Row>
        <Col xs={12} md={3} className="text-center">
        <Image src='./img/bio-pic.jpg' style={{width: '100%'}} roundedCircle className="m-2"/>
        </Col>
        <Col xs={12} md={9} className="d-flex justify-content-center">
        <Card border="secondary" style={{ width: '100%' }} className="m-5">           
            <Card.Header>About Me</Card.Header>
            <Card.Body>
                <Card.Text>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
}
export default About;