import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

//import FormContextProvider from './FormContext'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'


export default function UserForm() {
    //const {initialState} = useContext(FormContextProvider)
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
    }

    const deleteButtonFunction = (e) => {
      e.preventDefault();
      setState( {...state, [e.target.name]: '' } )
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
                <h1>User Details</h1>
                <FormUserDetails state={state} handleInputChange={handleInputChange} />
                <Button onClick={nextStep} className="navigate next">Next Step</Button>
              </div>
          ) 
        case 2:
          return (
            <div id='contentView'>
                <h1>Personal Details</h1>
                <FormPersonalDetails state={state} handleInputChange={handleInputChange} />
                <Button onClick={previousStep} className="navigate previous">Previous Step</Button>
                <Button onClick={nextStep} className="navigate next">Next Step</Button>
            </div>
          ) 
        case 3:
          return (
            <div id='contentView'>
                <h1>Confirmation</h1>
                <Confirm state={state} deleteButtonFunction={deleteButtonFunction} />
                <Button onClick={previousStep} className="navigate previous">Previous Step</Button>
                <Button onClick={nextStep} className="navigate next">Next Step</Button>
            </div>
          ) 
        case 4:
          return (
            <div id='contentView'>
                <h1>final page</h1>
                <Button onClick={previousStep} className="navigate previous">Previous Step</Button>
            </div>
          ) 
      }

    // return (
    //     <div>
    //         <h3>the step is {state.step}</h3>
    //         <Button onClick={previousStep} className="navigate previous">Previous Step</Button>
    //         <Button onClick={nextStep} className="navigate next">Next Step</Button>
    //     </div>
    // )
}
