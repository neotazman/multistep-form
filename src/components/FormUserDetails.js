import React from 'react'

export default function FormUserDetails({ state, handleInputChange }) {

    const { firstName, lastName, email } = state //the input values

    return (
        <div>
            hello from form user details
            <p><input name="firstName" placeholder="Enter Your First Name" value={firstName} onChange={handleInputChange} /></p>
            <p><input name='lastName' placeholder="Enter Your Last Name" value={lastName} onChange={handleInputChange} /></p>
            <p><input name='email' placeholder="Enter Your Email" value={email} onChange={handleInputChange} /></p>
        </div>
    )
}
