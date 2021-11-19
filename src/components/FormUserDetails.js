import React from 'react'

export default function FormUserDetails({ state, handleInputChange }) {

    const { firstName, lastName, email } = state

    return (
        <div>
            hello from form user details
            <p><input name="firstName" placeholder="Enter Your First Name" value={firstName} onChange={handleInputChange}></input></p>
            <p><input name='lastName' placeholder="Enter Your Last Name" value={lastName} onChange={handleInputChange}></input></p>
            <p><input name='email' placeholder="Enter Your Email" value={email} onChange={handleInputChange}></input></p>
        </div>
    )
}
