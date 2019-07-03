import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Checkout extends Component {


    render() {
        return (
            <center>
                <Link to='/'>
                    <button className="btn btn-warning text-white" > <i className="fa fa-angle-left"></i> Continue Shopping </button>
                </Link>

                <span> <strong> Total : ${this.props.total} </strong> </span>

                <button className="btn btn-success" onClick = {() => alert("THANKS :)")}> <i className="fa fa-angel-left"></i>Checkout</button>

            </center>
        )
    }
}


export default Checkout