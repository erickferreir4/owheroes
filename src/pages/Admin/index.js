import React from 'react';
import styles from './styles.scss';

import {AdminStorage} from './../../context/AdminContext'

import AdminAddHero from './../../components/AdminAddHero';

const Admin = (props) => {


    return (
            <div className="admin">
                <AdminAddHero/> 
            </div>
    )
}

export default Admin;
