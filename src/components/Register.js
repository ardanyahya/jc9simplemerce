import React, { Component } from 'react'

class Register extends Component {


    onButtonClick = () => {
        const user = this.username.value
        const email = this.email.value
        const pass = this.password.value
    }


    render() {
        return (
            <div>

                <div className = 'mt-5 row'>
                    <div className = 'col-sm-4 mx-auto card'>
                        <div className = 'card-body'>
                            <div className = ' border-bottom border-secondary card-title'>
                                <h1>Register</h1>
                            </div>

                            <div className='card-title'>
                                <h4>Username</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control' type='text'
                                ref={(input) => {this.username = input}}
                                />
                            </form>

                            <div className='card-title'>
                                <h4>Email</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control'
                                ref={(input) => {this.email = input}}
                                />
                            </form>

                            <div className='card-title'>
                                <h4>Password</h4>
                            </div>
                            <form className='input-group mb-4'>
                                <input className='form-control' type='password'
                                ref={(input) => {this.password = input}}
                                />
                            </form>
                            <button onClick = {this.onButtonClick} className = 'btn btn-warning'>Click For Register</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Register