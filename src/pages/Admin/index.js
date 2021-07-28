import React from 'react';
import styles from './styles.scss';
import  { Redirect } from 'react-router-dom'

import {AdminStorage} from './../../context/AdminContext'
import AdminAddHero from './../../components/AdminAddHero';
import AdminUpdateHero from './../../components/AdminUpdateHero';

import Login from './../Login';
import {getToken} from './../../utils'
import {useFetch} from './../../hooks/useFetch'


const API = `${process.env.API_URL}/auth` 

const Admin = (props) => {

    const [tab, setTab] = React.useState('add')

    const token = getToken()


    if(token == null) {
        return <Redirect to='/login' />
    }
    else {
        useFetch(API, 'POST', {token: token}).then( result => {
            if(!result.auth) {
                return <Redirect to='/login' />
            }
        })
    }

    return (
            <AdminStorage>
                <div className="admin">
                    <span className="tabs">
                        <button onClick={() => setTab('add')}>add hero</button>
                        <button onClick={() => setTab('update')}>update hero</button>
                    </span>
                    { tab === 'add' ? <AdminAddHero/> : <AdminUpdateHero/> }
                </div>
            </AdminStorage>
    )
}

export default Admin;
