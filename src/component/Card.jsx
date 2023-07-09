import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {

    const { id, title, author, publication_year, publisher, image_url } = data

    return (
        <Card key={id}>
            <Card.Img variant="top" src={image_url} height={350} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div>
                        <strong>Author:</strong> {author}
                    </div>
                    <div>
                        <strong>Publication Year:</strong> {publication_year}
                    </div>
                    <div>
                        <strong>Publisher:</strong> {publisher}
                    </div>
                </Card.Text>
                <Link to={`/book/${id}`}>
                    <Button variant="outline-primary" size="sm">See Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default BookCard;