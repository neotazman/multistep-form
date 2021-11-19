import React from 'react'

export default function Confirm({ state }) {

    const { firstName, lastName, email, occupation, city, bio } = state //all the input values 

    return (
        <div className="confirm" >
            {firstName && <p>Your first name is {firstName}</p>}
            {lastName && <p>Your last name is {lastName}</p>}
            {email && <p>Your email is {email}</p>}
            {occupation && <p>Your occupation is {occupation}</p>}
            {city && <p>You live in {city}</p>}
            {bio && <p>About You: {bio}</p>}
            <h5>Are You Sure This Is Correct?</h5>
        </div>
    )
}
