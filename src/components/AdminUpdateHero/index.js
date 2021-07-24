import React from 'react';
import styles from './styles.scss';
import Form from './../Form';


const API = process.env.API_URL

const AdminUpdateHero = (props) => {

    const [hero, setHero] = React.useState(null)
    const [heroes, setHeroes] = React.useState([])


    function fetchHero() {
        fetch(`${API}/heroes/all`).then( r => r.json())
            .then( result => {
                setHeroes(result)
                setHero(result[0])
            })
    }


    React.useEffect(() => {
        fetchHero();
    }, [])


    function handleSubmit(ev) {
        ev.preventDefault()

        fetch(`${API}/heroes`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hero)
        }).then( r => r.json() )
        .then( result => {
            fetchHero();
            alert('update!')
        })
    }

    function deleteHero(ev) {
        ev.preventDefault()

        fetch(`${API}/heroes/id/${hero._id}`, {
            method: 'DELETE'
        }).then( r => r.json() )
        .then( result => {
            fetchHero()
            alert('deletado!')
        })
    }

    function handleChange({target}) {
        let _id = target.value
        setHero(heroes.filter(item => item._id == _id)[0])
    }

    if( hero == null ) return null;

    return (
        <div className="updatehero">
            <select onChange={handleChange} value={hero._id}>
                {
                    heroes.map( item => (
                        <option 
                            value={item._id}
                            key={item._id}>{item.name}</option>
                    ))
                }
            </select>

            <Form 
                buttons={
                    [
                        {type:"submit", text:"update"},
                        {type:"button", text:"deletar", onclick:deleteHero},
                    ]
                }
                obj={hero} 
                setObj={setHero} 
                submit={handleSubmit} />
        </div>
    )
}

export default AdminUpdateHero;
