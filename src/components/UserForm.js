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

    const nextStep = () => setState( state.step++ )
    const previousStep = () => setState( state.step-- )

    return (
        <div>
            the step is {state.step}
        </div>
    )
}
