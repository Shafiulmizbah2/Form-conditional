import React from 'react'

export default function person(props) {
    return (
        <div className="Person">
            <h1 className="heading">{props.name}</h1>
            <p>{props.id}</p>
            <p className="lead">{props.email}</p>
        </div>
    )
}
