import React from 'react'
import Button from 'react-bootstrap/Button'

export default function StepButton({ step }) { //Currently not being used because display text logic is more  complicated then basic prop drilling

    

    return (
        <div>
            <Button onClick={step} className="navigate next"></Button>
        </div>
    )
}
