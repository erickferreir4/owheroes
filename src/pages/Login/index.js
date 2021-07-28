import React from 'react';
import styles from './styles.scss';
import { useHistory } from "react-router-dom";
import Form from './../../components/Form'
import {setToken, getToken} from './../../utils';
import {useFetch} from './../../hooks/useFetch'

const loginObj = () => {
    return {
        "username": '',
        "password": ''
    }
} 

const API = `${process.env.API_URL}/auth/login` 


const Login = (props) => {

    const [user, setUser] = React.useState(loginObj())
    let history = useHistory();


    function handleSubmit(ev) {
        ev.preventDefault()

        useFetch(API, 'POST', user).then( result => {
            if(result.auth) {
                setToken(result.token)
                history.push('/admin')
            }
        })
    }

    return (
        <div className="login">
            <div className="login--wrapper">
            
                <Form
                    buttons={
                        [
                            {type: "submit", text:"entrar"}
                        ]
                    }    
                    obj={user}
                    setObj={setUser}
                    submit={handleSubmit}
                />

            </div>
        </div>
    )
}

export default Login;
