import React, { useState } from 'react'

import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'

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
    
    const handleInputChange = (e) => { //after I make the forms
        e.preventDefault()
        setState( { ...state, [e.target.name]: e.target.value } )
        console.log(state)
    }

    const nextStep = () => {
        setState( { ...state, step: state.step + 1 })
    }
    const previousStep = () => {
        setState( { ...state, step: state.step - 1 })
    }

    switch(state.step) {
        case 1:
          return (
              <div id='contentView'>
                <h1>home page</h1>
                <FormUserDetails state={state} handleInputChange={handleInputChange} />
                <button onClick={nextStep} className="navigate next">Next Step</button>
              </div>
          ) 
        case 2:
          return (
            <div id='contentView'>
                <h1>page 2</h1>
                <FormPersonalDetails state={state} handleInputChange={handleInputChange} />
                <button onClick={previousStep} className="navigate previous">Previous Step</button>
                <button onClick={nextStep} className="navigate next">Next Step</button>
            </div>
          ) 
        case 3:
          return (
            <div id='contentView'>
                <h1>page 3</h1>
                <Confirm state={state} />
                <button onClick={previousStep} className="navigate previous">Previous Step</button>
                <button onClick={nextStep} className="navigate next">Next Step</button>
            </div>
          ) 
        case 4:
          return (
            <div id='contentView'>
                <h1>final page</h1>
                <button onClick={previousStep} className="navigate previous">Previous Step</button>
            </div>
          ) 
      }

    // return (
    //     <div>
    //         <h3>the step is {state.step}</h3>
    //         <button onClick={previousStep} className="navigate previous">Previous Step</button>
    //         <button onClick={nextStep} className="navigate next">Next Step</button>
    //     </div>
    // )
}
