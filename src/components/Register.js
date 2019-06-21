import React, { Component } from 'react'

class Register extends Component {
    render () {
        return (
            <div>

                <div className='mt-5 row'>
                    <div className ='col-sm-4 mx-auto card'>
                        <div className ='card-body'>
                            <div className =' border-bottom border-secondary card-title'>
                                <h1>Register</h1>
                            </div>
                            <div className ='card-title'>
                                <h4>Username</h4>
                            </div>
                            <form className='input-group'>
                                <input className = 'form-control'/>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Register