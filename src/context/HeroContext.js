import React from 'react';

const HeroContext = React.createContext()


const API = process.env.API_URL


const HeroStorage = ({children}) => {

    const [heroes, setHeroes] = React.useState(null)
    const [hero, setHero] = React.useState(null)

    React.useEffect(() => {


        fetch(`${API}/heroes/all`).then( r => r.json())
            .then( result => {
                setHeroes(result)
                setHero(result[0])
            })


    }, [])



    if(hero == null) return null;

    return (
        <HeroContext.Provider
            value={
                {hero, heroes, setHero}
            
            }>
            {children}
        </HeroContext.Provider>
    )
}

export {HeroContext, HeroStorage}

