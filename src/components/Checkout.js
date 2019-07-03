import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Checkout extends Component {



    listCheckout = () => {
        return this.state.cart.map (item =>{
            if(this.props.user.id == item.idUser){
                return (
                    <tr>
                        <td>{item.productName}</td>
                        <td>Rp. {item.productPrice}</td>
                        <td>{item.inputCart}</td>
                        <td>Rp. {item.productPrice  * item.inputCart}</td>
                    </tr>
                )
            }
        })
    }




    render() {
        return (
            <div className='container'>
                <h1 className="display-4 text-center">Checkout</h1>
                    <table className='table table-hover mb-5'>
                    <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">HARGA</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">TOTAL HARGA</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.listCheckout()}
                        <tr>
                            <td colSpan="3">
                                <center>
                                    <b>TOTAL HARGA</b>
                                </center>
                            </td>
                            <td>Rp. {this.fungsiTotalPrice()}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        )   

    }
    
}


export default Checkout