import React from 'react';
import Input from './../Input';
import styles from './styles.scss'


const form_hero = [
    {name: 'name', type: 'text', elm: 'input'},
    {name: 'role', type: 'text', elm: 'input'},
    {name: 'difficulty', type: 'number', elm: 'input'},
    {name: 'description', type: 'text', elm: 'input'},
    {name: 'thumb', type: 'text', elm: 'input'},
    {name: 'video', type: 'text', elm: 'input'},
    {name: 'real_name', type: 'text', elm: 'input'},
    {name: 'occupation', type: 'text', elm: 'input'},
    {name: 'base_of_operations', type: 'text', elm: 'input'},
    {name: 'affiliation', type: 'text', elm: 'input'},
    {name: 'phrase', type: 'text', elm: 'input'},
    {name: 'story', type: 'text', elm: 'textarea'},
]

const Heroes = (props) => {

    const [heroes, setHeroes] = React.useState([])
    const [hero, setHero] = React.useState(null)

    React.useEffect(() => {
        fetch(`${process.env.API_URL}/heroes/all`).then( r => r.json() )
            .then( r => {
                setHeroes(r)
                setHero(r[0])
            })

    }, [])


    function changeHero({target}) {
        setHero({...hero, [target.name]: target.value})
    }

    function handleChange({target}) {
        setHero(heroes.filter( item => item._id === target.value)[0])
    }



    if( hero === null ) return null

    return (
        <>
            <div className="heroes">

                <select onChange={handleChange}>
                    {heroes.map( item => <option key={item._id} value={item._id}>{item.name}</option>)} 
                </select>

                <div>
                    {form_hero.map( (item, index) => (
                        <Input 
                            func={changeHero}
                            key={index} 
                            type={item.type} 
                            name={item.name} 
                            elm={item.elm} 
                            value={hero[item.name]}/>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Heroes;
