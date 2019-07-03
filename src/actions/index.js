//Action creator

import axios from 'axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

//Action untuk Login
export const onLoginUser = (user, pass) => {
    return (dispatch) => { //dispatch adalah function, sebagai middleware
        axios.get(
            'http://localhost:2019/users',
            {
                params: {
                    username: user,
                    password: pass
                }
            }
        ).then(res => {
            if(res.data.length > 0){


                const {id, username} = res.data[0]

                //kirim action ke reducer, untuk disimpan username
                dispatch(
                    {
                        type: "LOGIN_SUCCESS",
                        payload:{id, username}
                    }
                )


                //Create data untuk cookie
                cookie.set('userName', {id, username},{path: '/'})
            }else {
                console.log('Username / Password incorrect')
            }
        })
    }
}


export const keepLogin = (objUser) => {
    //objUser = {id, username}
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id: objUser.id,
            username: objUser.username
        }
    }
}


//Action untuk Logout
export const onLogoutUser = () => {
    cookie.remove('userName')
    return {
        type: 'LOGOUT_SUCCESS'
    }
}