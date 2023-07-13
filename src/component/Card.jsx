import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {

    const { id, title, author, publication_year, publisher, image_url } = data

    return (
        <Link to={`/book/${id}`} style={{ textDecoration: "none" }}>
            <Card key={id} className='shadow-sm border-0'>
                <Card.Img variant="top" src={image_url} height={300} className='cardStyle' />
                <Card.Body>
                    <Card.Title className='fs-4 text-gray fw-semibold '>{title}</Card.Title>
                    <Card.Text className='fs-6 fw-light'>
                        <div>
                            Author: {author}
                        </div>
                        <div>
                            Publication Year: {publication_year}
                        </div>
                    </Card.Text>
                    <Row>
                        <Col align="end" style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>

                            <div className='buyStyle'>
                                See Details
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default BookCard;