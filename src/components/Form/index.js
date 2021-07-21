import React from 'react';
import Input from './../Input';
import styles from './styles.scss'


const form_t = [
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

const input_ab = [
    {name: 'name', type: 'text', elm: 'input'},
    {name: 'description', type: 'text', elm: 'input'},
    {name: 'img', type: 'text', elm: 'input'},
    {name: 'video', type: 'text', elm: 'input'},
]

const Form = (props) => {

    const habilidadeRef = React.useRef(null)
    const audioRef = React.useRef(null)
    const formRef = React.useRef(null)

    const [audio, setAudio] = React.useState([])
    const [habilidade, setHabilidade] = React.useState([])

    console.log(process.env.API_URL)


    function addAudio(ev) {
        ev.preventDefault()
        let index = 'audio_'+audio.length
        setAudio([...audio, 
            <input 
                type="text" 
                name={index}
                key={index}
            />
        ])
    }

    function addHabilidade(ev) {
        ev.preventDefault()

        setHabilidade([...habilidade, 
            <div>
                <h4>Habilidade {habilidade.length + 1}</h4>
                {input_ab.map( (item, index) => (
                    <Input key={Math.random()} type={item.type} name={item.name} elm={item.elm}/>
                ))}
            </div>
        ])
    }


    function sendForm(ev) {

        ev.preventDefault();
        console.dir(ev.target)

        const abilitiesArray = []
        habilidadeRef.current.querySelectorAll('div').forEach((el) => {
            let obj = {}
            el.querySelectorAll('input').forEach((elm) => {
                obj = {...obj, [elm.name]: elm.value}
            })

            abilitiesArray.push(obj)
        })

        const audioArray = []
        audioRef.current.querySelectorAll('input').forEach( (el) => {
            audioArray.push(el.value)
        })

        let obj = {}
        formRef.current.querySelectorAll('input, textarea').forEach( (el) => {
            obj = {...obj, [el.name]: el.value} 
        })


        let data = {...obj, abilities: abilitiesArray, audio: audioArray}
        console.log(data)

        fetch(`${process.env.API_URL}/heroes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([data])
        })





    }



    return (
        <div className="form">
            <form id="info" onSubmit={sendForm}>
                <div>
                    <div>
                        <h3>Informacoes Gerais</h3>
                    
                        <div ref={audioRef}>
                            <Input type='text' name='audio' elm='input' />
                            {audio}
                            <button onClick={addAudio}>add +</button>
                        </div>

                        <div ref={formRef}>
                        {form_t.map( (item, index) => (
                            <Input key={index} type={item.type} name={item.name} elm={item.elm}/>
                        ))}
                        </div>
                    </div>

                    <div ref={habilidadeRef}>
                        <h3>Habilidades</h3>
                        {habilidade} 
                        <button onClick={addHabilidade}>add +</button>
                    </div>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form;
