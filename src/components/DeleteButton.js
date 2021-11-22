import React from 'react'

export default function DeleteButton({ name, deleteButtonFunction }) {
    return (
        <span>
            <button name={name} onClick={deleteButtonFunction} className='delete'>Delete</button>
        </span>
    )
}
