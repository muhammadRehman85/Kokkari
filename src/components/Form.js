import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
function Forms() {
    return (<>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  />
       
      </Form.Group>
    
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>  <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>  );
}

export default Forms;