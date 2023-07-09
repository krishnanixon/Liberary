import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { Table, Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';

function AllBooks({ data, setData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleEditClick = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };
    const handleonChange = (e) => setSelectedBook({ ...selectedBook, [e.target.name]: e.target.value })

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const saveChanges = (id) => {
        const newData = data.map((book) => {
            if (book.id === id) {
                return selectedBook;
            }
            return book;
        });
        setData(newData);
        setShowModal(false);
    };

    const deleteData = (id) => {
        const newData = data.filter((book) => book.id !== id);
        setData(newData);
        setShowModal(false);
    };
    const filteredData = data.filter((book) => {
        return Object.values(book).some((value) => {
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
        });
    });

    useEffect(() => { }, [selectedBook])

    return (
        <Container>
            <Row className='my-2'>
                <Col className='fs-2 fw-semibold'>
                    All Books
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
            <Table hover>
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>No of books</th>
                        <th>Year of publication</th>
                        <th>Publisher</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(({ id, title, author, publication_year, publisher, image_url, available, noOfavailable, price }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>{noOfavailable}</td>
                            <td>{publication_year}</td>
                            <td>{publisher}</td>
                            <td>{price}</td>
                            <td>
                                <Row>
                                    <Col>
                                        <Button
                                            variant='primary'
                                            size="sm"
                                            style={{ width: "100%" }}
                                            onClick={() => handleEditClick({ id, title, author, publication_year, publisher, image_url, available, noOfavailable, price })}
                                        >
                                            <span className='fw-bold'>Edit</span>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            style={{ width: "100%" }}
                                            onClick={() => deleteData(id)}
                                        >
                                            Delete
                                        </Button>
                                    </Col>
                                </Row>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBook && (
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedBook.title}
                                    name='title'
                                    onChange={handleonChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formAuthor">
                                <Form.Label>Author</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedBook.author}
                                    name='author'
                                    onChange={handleonChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPublicationYear">
                                <Form.Label>Publication Year</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedBook.publication_year}
                                    name='publication_year'
                                    onChange={handleonChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPublisher">
                                <Form.Label>Publisher</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedBook.publisher}
                                    name='publisher'
                                    onChange={handleonChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Book author"
                                    value={selectedBook.price}
                                    name='price'
                                    onChange={handleonChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Available Book</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Book author"
                                    value={selectedBook.noOfavailable}
                                    name='noOfavailable'
                                    onChange={handleonChange}
                                />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button variant="danger" className='my-4' onClick={() => deleteData(selectedBook.id)}>
                                        Delete
                                    </Button>
                                </Col>
                                <Col></Col>
                                <Col>
                                    <Button variant="primary" className='my-4' onClick={() => saveChanges(selectedBook.id)}>
                                        Save Changes
                                    </Button></Col>
                            </Row>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default AllBooks;
