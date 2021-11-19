import React, { useState } from 'react'

export default function UserForm() {
    const initialState = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    const[state, setState] = useState(initialState)

    return (
        <div>
            
        </div>
    )
}
