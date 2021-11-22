import React from 'react'

import DeleteButton from './DeleteButton'

export default function Confirm({ state, deleteButtonFunction }) {

    const { firstName, lastName, email, occupation, city, bio } = state //all the input values 

    return (
        <div className="confirm" >
            {firstName && <p>Your first name is {firstName}<DeleteButton name='firstName' deleteButtonFunction={deleteButtonFunction} /></p>}
            {lastName && <p>Your last name is {lastName}<DeleteButton name='lastName' deleteButtonFunction={deleteButtonFunction} /></p>}
            {email && <p>Your email is {email}<DeleteButton name='email' deleteButtonFunction={deleteButtonFunction} /></p>}
            {occupation && <p>Your occupation is {occupation}<DeleteButton name='occupation' deleteButtonFunction={deleteButtonFunction} /></p>}
            {city && <p>You live in {city}<DeleteButton name='city' deleteButtonFunction={deleteButtonFunction} /></p>}
            {bio && <p>About You: {bio}<DeleteButton name='bio' deleteButtonFunction={deleteButtonFunction} /></p>}
            <h5>Are You Sure This Is Correct?</h5>
        </div>
    )
}
