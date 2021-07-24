import React from 'react';
import styles from './styles.scss'
import Form from './../Form';


function hero_obj() {
    return {
        "name": "",
        "role": "",
        "difficulty": "",
        "description": "",
        "thumb": "",
        "video":"",
        "real_name": "" ,
        "occupation": "",
        "base_of_operations": "" ,
        "affiliation": "",
        "phrase": "" ,
        "story": "" ,
        "audio": [
            {'file': ''},
            {'file': ''}
        ],
        "abilities": [
            {
                "name": "",
                "description": "",
                "img": "",
                "video": ""
            },
            {
                "name": "",
                    "description": "",
                    "img": "",
                    "video": ""
            },
            {
                "name": "",
                    "description": "",
                    "img": "",
                    "video": ""
            },
            {
                "name": "",
                    "description": "",
                    "img": "",
                    "video": ""
            },
            {
                "name": "",
                    "description": "",
                    "img": "",
                    "video": ""
            },
        ]
    }
}


const AdminAddHero = (props) => {

    const [hero, setHero] = React.useState(hero_obj())

    function handleSubmit(ev) {
        ev.preventDefault();

        fetch(`${process.env.API_URL}/heroes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([hero])
        }).then( r => r.json() )
        .then( result => {
            console.log(result)
            setHero(hero_obj())
        })
    } 

    function cancel(ev) {
        ev.preventDefault();
        setHero(hero_obj())
    }


    return (
        <div className="addhero">
            <Form 
                buttons={
                    [
                        {type:"submit", text:"enviar"},
                        {type:"button", text:"cancelar", onclick:cancel},
                    ]
                }
                obj={hero} 
                setObj={setHero} 
                submit={handleSubmit} />
        </div>
    )
}

export default AdminAddHero;
