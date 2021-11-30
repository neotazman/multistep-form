import React from 'react'
import Form from 'react-bootstrap/Form'

export default function FormUserDetails({ state, handleInputChange }) {

    const { firstName, lastName, email } = state //the input values

    return (
        <Form>
            <Form.Group><Form.Control name="firstName" placeholder="Enter Your First Name" value={firstName} onChange={handleInputChange} /></Form.Group>
            <Form.Group><Form.Control name='lastName' placeholder="Enter Your Last Name" value={lastName} onChange={handleInputChange} /></Form.Group>
            <Form.Group><Form.Control name='email' placeholder="Enter Your Email" value={email} onChange={handleInputChange} /></Form.Group>
        </Form>
    )
}
