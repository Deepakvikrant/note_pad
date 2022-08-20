import React from 'react'

const Alert = (props) => {
    return (
        <div className="alert alert-primary" role="alert">
        {props.message} alert with <a href="/" className="alert-link">an example link</a> {props.message}
      </div>
    )
}

export default Alert