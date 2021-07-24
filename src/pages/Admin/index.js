import React from 'react';
import styles from './styles.scss';

import {AdminStorage} from './../../context/AdminContext'

import AdminAddHero from './../../components/AdminAddHero';
import AdminUpdateHero from './../../components/AdminUpdateHero';

const Admin = (props) => {

    const [tab, setTab] = React.useState('add')


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
