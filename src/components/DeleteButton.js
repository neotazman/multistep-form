import React from 'react'
import Button from 'react-bootstrap/Button'

export default function DeleteButton({ name, deleteButtonFunction }) {
    return (
        <span>
            <Button name={name} onClick={deleteButtonFunction} className='delete'>Delete</Button>
        </span>
    )
}
