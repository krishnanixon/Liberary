import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
const AddBooks = ({ data, setData }) => {

    const [add, setAdd] = useState({
        "id": "",
        "title": "",
        "author": "",
        "isbn": "",
        "publication_year": 2023,
        "available": true,
        "noOfavailable": 5,
        "publisher": "",
        "image_url": "",
        "price": "",
    })

    const handleOnAdd = () => {
        setData([add, ...data])
        setAdd({
            "id": "",
            "title": "",
            "author": "",
            "isbn": "",
            "publication_year": 2023,
            "available": true,
            "noOfavailable": 5,
            "publisher": "",
            "image_url": "",
            "price": "",
        })
    }

    useEffect(() => { }, [add])

    const handleonChange = (e) => setAdd({ ...add, [e.target.name]: e.target.value })

    return (
        <><Container>
            <Row>
                <Col xs={12} className='fs-4 fw-bold my-3'>
                    Add Books
                </Col>
                <Col>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <Form>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book ID"
                                        name="id"
                                        value={add.id}
                                        onChange={(e) => handleonChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book Title"
                                        name="title"
                                        value={add.title}
                                        onChange={(e) => handleonChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book Price</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book Price"
                                        name="price"
                                        value={add.price}
                                        onChange={(e) => handleonChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book author</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book author"
                                        name="author"
                                        value={add.author}
                                        onChange={(e) => handleonChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book isbn</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book isbn"
                                        name="isbn"
                                        value={add.isbn}
                                        onChange={(e) => handleonChange(e)}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book publication_year</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book publication_year"
                                        name="publication_year"
                                        value={add.publication_year}
                                        onChange={(e) => handleonChange(e)}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book publisher</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book publisher"
                                        name="publisher"
                                        value={add.publisher}
                                        onChange={(e) => handleonChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Book Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book Image"
                                        name="image_url"
                                        value={add.image_url}
                                        onChange={(e) => handleonChange(e)} />
                                </Form.Group>

                                <Button variant="primary" onClick={() => handleOnAdd()}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>



                </Col>
            </Row>
        </Container>
        </>
    )
}

export default AddBooks