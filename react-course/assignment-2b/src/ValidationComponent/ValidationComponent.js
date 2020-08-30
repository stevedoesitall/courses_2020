import React from 'react'

const validationComponent = (props) => {

    let validationMessage = 'Text long enough'

    if (props.length < 5) {
        validationMessage = 'Text too short'
    }

    return (
        <div className="ValdiationComponent">
            {validationMessage}
        </div>
    )
}

export default validationComponent