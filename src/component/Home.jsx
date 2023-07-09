import React, { useState } from 'react'
import Card from './Card'
import { Container, Row, Col, Form } from 'react-bootstrap';

const Main = ({ data, setData }) => {


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => setSearchTerm(event.target.value);

    const filteredData = data.filter((book) => {
        return Object.values(book).some((value) => {
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
        });
    });

    return (
        <Container className='my-5'>
            <Row>
                <Col className='fs-2 fw-bold'>
                    Books
                </Col>
                <Col md={4}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Col>
            </Row>
            <Row>
                {filteredData.map((book) => (
                    <Col sm={4} className='py-4' key={book.id}>
                        <Card data={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Main;
