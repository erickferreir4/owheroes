import React from 'react';
import styles from './styles.scss';
import {setObjectValue, getObjectValue} from './../../utils'; 


const Form = ({obj, setObj, submit, buttons}) => {

    const [name, setName] = React.useState([])

    
    /**
     * set all name input
     */
    React.useEffect(() => {
        setName([])

        Object.entries(obj).map( item => {
            if(Array.isArray(item[1])) {
                item[1].map( (value, index) => {
                    Object.entries(value).map( el => {
                        let name_obj = el[0]
                        setName(name => [...name, `${item[0]}[${index}].${name_obj}`])
                    })
                })
            }
            else {
              setName(name => [...name, item[0]])
            }
        })

    }, [])

    function handleChange({target}) {
        let value = JSON.stringify(target.value)
        let obj_update = {...obj}

        setObj( 
            setObjectValue(obj_update, target.name, value)
        )
    }


    return (
        <>
            <form onSubmit={submit} className="form">
                {name.map( (item, index) =>( 
                    <label className="form-label" key={index}>
                        {item}
                        <input 
                            disabled={item == '_id' ? true : false}
                            type="text" 
                            name={item} 
                            value={getObjectValue(obj, item)}
                            onChange={handleChange}/>
                    </label>
                ))}

                <span>
                    {buttons.map(item => (
                        <button 
                            key={item.text}
                            onClick={item?.onclick}
                            type={item.type}>
                            {item.text}
                        </button>
                    ))}
                </span>
            </form>
        </>
    )
}

export default Form;
