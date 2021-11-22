import React from 'react'

export default function FormPersonalDetails({ state, handleInputChange}) {

    const { occupation, city, bio } = state //the input values

    return (
        <div className="personal" >
            <p><input name='occupation' placeholder='State Your Occupation' value={occupation} onChange={handleInputChange} /></p>
            <p><input name='city' placeholder='What City Are You From?' value={city} onChange={handleInputChange} /></p>
            <p><textarea name='bio' placeholder='Tell Me About Yourself' value={bio} onChange={handleInputChange} /></p>
        </div>
    )
}
