import React, { useContext, useState } from 'react'

const FormContext = React.createContext()

export default function FormContextProvider({ children }) {
    const initialState = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }


  return (
    <FormContext.Provider value={initialState}>
      { children }
    </FormContext.Provider>
  )
}
