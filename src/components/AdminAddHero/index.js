import React from 'react';
import styles from './styles.scss'
import Form from './../Form';


const hero_obj = {
    "name": "nome",
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


const AdminAddHero = (props) => {

    const [hero, setHero] = React.useState(hero_obj)


    function handleSubmit(ev) {
        ev.preventDefault();
    } 

    function cancel(ev) {
        ev.preventDefault();
        console.log('false')
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
