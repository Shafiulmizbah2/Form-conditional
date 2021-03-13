import React from 'react';


export default function Form(props) {
    return (
        <form className="form" onSubmit={props.handleSubmit}>

            <div className="form-control">
                <label htmlFor="name" className="label">Name : </label>
                <input className="inp" type="text" name="name" id="name" value={props.name} onChange={props.handleChangeName} />
            </div>

            <div className="form-control">
                <label htmlFor="email" className="label">Email : </label>
                <input className="inp" type="email" name="email" id="email" value={props.email} onChange={props.handleChangeEmail} />
            </div>

            <input className="btn" type="submit" value="Submit" />

        </form>
    )
}
