import React from 'react'
import Form from 'react-bootstrap/Form'

export default function FormPersonalDetails({ state, handleInputChange}) {

    const { occupation, city, bio } = state //the input values

    return (
        <Form className="personal" >
            <Form.Group><Form.Control name='occupation' placeholder='State Your Occupation' value={occupation} onChange={handleInputChange} /></Form.Group>
            <Form.Group><Form.Control name='city' placeholder='What City Are You From?' value={city} onChange={handleInputChange} /></Form.Group>
            <Form.Group><Form.Control as='textarea' rows={5} name='bio' placeholder='Tell Me About Yourself' value={bio} onChange={handleInputChange} /></Form.Group>
        </Form>
    )
}
