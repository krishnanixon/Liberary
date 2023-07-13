import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Card, Col, Container, Button, Modal } from 'react-bootstrap';

const Books = ({ data }) => {

    const { id } = useParams();

    const DataObject = data.find((item) => item.id == id);
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const { title, author, publication_year, publisher, image_url } = DataObject;

    return (
        <Container>
            <Row >
                <Col className='ImageContainer mt-4' align="start">
                    <img src={image_url} alt={title} className='ImageStyle shadow-md' />
                </Col>
                <Col >
                    <Card className='h-full p-4 border-0'>
                        <Card.Body>
                            <div style={{ position: "sticky", top: "100px", zIndex: "10" }}>
                                <Row className='bg-white shadow-sm py-2'>
                                    <Col>
                                        <Card.Title className='fs-3 fw-bold text-gray'> {title}</Card.Title>
                                        <Card.Subtitle className='mb-2 text-muted mb-3 fw-semibold'>{author}</Card.Subtitle>
                                    </Col>
                                    <Col align="end" className='mt-3'>
                                        <Button type="button" className="btn btn-light mx-4" onClick={() => setModalShow2(true)}>Borrow</Button>
                                        <Button type="button" className="btn btn-warning" onClick={() => setModalShow(true)}>Buy</Button>
                                    </Col>
                                </Row>
                            </div>

                            <Card.Text>
                                <div className='my-4 fw-semibold fs-5'>Description:</div>
                                <div className='fs-6 fw-light mb-4'>
                                    <div className='py-2'>
                                        In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                    </div>
                                    <div className='py-2'>
                                        In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                    </div>
                                    <div className='py-2'>
                                        In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                    </div>
                                    <div className='py-2'>
                                        In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                    </div>
                                    <div className='py-2'>
                                        In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <BuyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <BorrowModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
        </Container>
    );
};

export default Books;


function BuyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    Buy Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='border-0'>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Buy</Button>
            </Modal.Footer>
        </Modal>
    );
}


function BorrowModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brrow Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Buy</Button>
            </Modal.Footer>
        </Modal>
    );
}