import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Axios from 'axios';


class ProductItem extends Component {



    //Add Cart dan buat component Cart.js
    addCart = () => {

        //Ambil data dari user
        const idUser = this.props.user.id
        const qty = this.qty.value    
        
        // var {id, name, price} = this.props.barang
        var {id, name, price,src} = this.props.barang


        if(qty > 0 && idUser !== ''){
            Axios.post(
                'http://localhost:2019/Cart', {
                    idUser : idUser,
                    idProduct : id,
                    productName : name,
                    productPrice : price,
                    inputCart : qty,
                    inputGambar : src
        }).then (res => {
            alert('Ditambah ke Cart')
            })

        }else {
            if(idUser === '') {
                alert('Login terlebih dahulu')
            }else {
                alert("Isi barang yang ingin anda beli")
            }
        }}


    render() {
        var {id, name, price, src} = this.props.barang //{id, name, desc, src}
        // id = 1

        return (
            <div className="card col-3 m-4 " >
                <img className='card-img-top' src={src} width='250px' alt=''/>
                <div className='card-body' >
                    <h5 className='card-title' >{name}</h5>
                    {/* <p className='card-text'>{desc}</p> */}
                    <p className='card-text'>Rp. {price}</p>
                    {/* untuk menangkap inputan */}
                    <input type='text' className='form-control btn-block' ref={(input) => {this.qty = input}} />
                    <Link to={'/detailproduct/' + id}>
                        <button className='btn btn-outline-primary btn-block m-auto'>Details</button>
                    </Link>
                    {/* connect state product dari home kedalam fun add to cart */}
                    <button className='btn btn-primary btn-block' onClick={() => {this.addCart (this.props.product)}} >Add To Cart</button>
                </div>                
            </div>
        )
    }
}


// buat ambil user dari reducers
// parameter state bebas
const mapStateToProps = (state) => {
    return {
        user: state.auth
    }

}

export default connect (mapStateToProps) (ProductItem)