import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap";
import Search from './Search/Search';
import FileBase from "react-file-base64";
import "./Form.css";

const FormPage = () => {
  const [formData, setFormData] = useState(null);

  return (
    <React.Fragment>
      <Search />

      <div className='create_memory'>
        <p>Creating a Memory</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Title" />
            <Form.Text className="text-muted" style={{ display: 'none' }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder='Message' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Tags" />
          </Form.Group>

          <Form.Group controlId="formFileSm" className="mb-3">
            <FileBase
            type="file"
            multiple={false}

            />
            <Form.Control type="file" size="sm" className='file_input' />
          </Form.Group>

          <Button type="submit">
            Search
          </Button>
        </Form>
      </div>

    </React.Fragment>
  )
}

export default FormPage