import React from 'react';
import { Form, Button } from "react-bootstrap";
import "../Form.css";

const Search = () => {
    return (
        <div className='search_section'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Memories" />
                    <Form.Text className="text-muted" style={{ display: 'none' }}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Search Tags" />
                </Form.Group>

                <Button type="submit" >
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default Search