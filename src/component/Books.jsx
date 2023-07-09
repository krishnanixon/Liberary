import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Card, Col, Container } from 'react-bootstrap';

const Books = ({ data }) => {

    const { id } = useParams();

    const DataObject = data.find((item) => item.id == id);

    const { title, author, publication_year, publisher, image_url } = DataObject;

    return (
        <Container>
            <Row className='mt-4'>
                <Col xs={12} md={6}>
                    <img src={image_url} alt={title} style={{ height: '90vh', objectFit: 'cover' }} />
                </Col>
                <Col xs={12} md={6}>
                    <Card className='h-full p-4'>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>{author}</Card.Subtitle>
                            <Card.Text>
                                <strong>Description:</strong>
                                <div>
                                    In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                </div>
                                <div>
                                    In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                </div>
                                <div>
                                    In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                </div>
                                <div>
                                    In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                </div>
                                <div>
                                    In a world where loyalty is tested, alliances are fragile, and morality is challenged, the fate of the Seven Kingdoms hangs in the balance. From the scheming Lannisters to the exiled Targaryens and the enigmatic Night's Watch, each character plays their part in the gripping tale of power, honor, and survival.
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Books;