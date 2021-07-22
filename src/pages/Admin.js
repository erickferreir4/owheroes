import React from 'react';
import AddHero from './../components/AddHero';
import Heroes from './../components/Heroes';

const Admin = (props) => {

    const [form, setForm] = React.useState();


    return (
        <>
            <div className="admin">
                <span>
                    <button onClick={() => setForm('addhero')}>add hero</button>
                    <button onClick={() => setForm('heros')}>heros</button>
                </span>

                { form === 'addhero' ? <AddHero/> : <Heroes/> }
            </div>
        </>
    )
}

export default Admin;
