import React, { Component } from 'react'
import Axios from 'axios';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import Checkout from './Checkout'



class Cart extends Component {


    state = {
        cart: []
    }

    componentDidMount () {
        Axios.get(
            'http://localhost:2019/Cart'
        ).then (res => {
            this.setState({
                cart: res.data
            })
            console.log(this.state.cart);
            
        })
        
    }

    getCart = () => {
        Axios.get(
            'http://localhost:2019/Cart',
        ).then (res => {
            this.setState({
                cart: res.data
            })
        } )
    }

    deleteCart = (item) => {
        var ID = item.id

        Axios.delete(
            'http://localhost:2019/Cart/' + ID,
        ).then(res => {
            console.log('Berhasil dihapus');
            console.log({cart: res.data});


            this.getCart()
            
        })
    }

    // buat function, tampil checkout
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


    // QTY terjumlah saat dibeli user
    // fungsiTotalQty = () => {
    //     var totalQty = 0
    //     for( var i = 0; i < this.state.cart.length; i++){
    //       if (this.props.user.id === this.state.cart[i].idUser){
    //         totalQty += parseInt(this.state.cart[i].qty)
    //       }  
    //     }

    //     return (<td>{totalQty}</td>)
    // }


    fungsiTotalPrice = () => {
        var cekHarga = this.state.cart.map (item => {
            return{
                // price: item.qty*item.price, // Harga barang dikalikan dengan jumlah barang yg dibeli
                productPrice: item.inputCart*item.productPrice,
                idUser: item.idUser
            }
        })
        var subTotalHarga = 0

        for (let i = 0; i < this.state.cart.length; i++){
            if(this.props.user.id === cekHarga[i].idUser){
                subTotalHarga += parseInt(cekHarga[i].productPrice);
            }
        }

        return (subTotalHarga)
    }


   
    

    renderCheckoutList = () => {
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









    renderList = () => {
        console.log("here");
        console.log(this.state.cart)
        console.log("idUser");
        
        return this.state.cart.map( item => {
            console.log(item)
            if(item.idUser === this.props.user.id){
                return (
                    <tr>
                        <td className='text-center'>{item.idUser}</td>
                        <td className='text-center'>{item.productName}</td>
                        <td className='text-center'>Rp. {item.productPrice}</td>
                        <td className='text-center'>{item.inputCart}</td>
                        <td className='text-center'>
                            <img src={item.inputGambar} className='' width='65px'></img>
                        </td>
                        {/* <td className='text-center'>Rp. {item.productPrice  * item.inputCart}</td> */}
                        <td className='text-center'>
                            <button className='btn btn-outline-primary ml-2'onClick = { () => {this.deleteCart(item)}} > Delete</button>
                        </td>     
                        
                    </tr> 
                    // <tr>
                    //     <td>test</td>
                    // </tr>
                )                        

            }
                
        })
    }


    render(){
        return(
            <div className="container">
                
                <h1 className="display-4 text-center">Cart List</h1>
                <table className="table table-hover mb-5">
                    <thead>
                    <tr className='text-center'>
                            <th className='text-center'>ID</th>
                            <th className='text-center'>NAME</th>                            
                            <th className='text-center'>HARGA</th>
                            <th className='text-center'>QUANTITY</th>
                            <th className='text-center'>PICTURE</th>
                            {/* <th className='text-center'>TOTAL HARGA</th> */}
                            <th className='text-center'>ACTION</th>                            
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderList()}
                            
                    </tbody>
                            <button className ='btn btn-outline-primary mt-2'>Checkout</button>
                </table>
                         {this.renderCheckoutList()}
            </div>
                   
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.auth // {id, username}
    }
}

export default connect(mapStateToProps)(Cart) 
