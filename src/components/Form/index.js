import React from 'react';
import styles from './styles.scss';


const Form = ({obj, setObj, submit, buttons}) => {

    const [name, setName] = React.useState([])

    
    /**
     * set all name input
     */
    React.useEffect(() => {

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
        //var getter = new Function("obj", "return obj." + target.name + ";");
        var set = new Function("object", "object." + target.name + " = '"+target.value+"'; return object");
        var obj_update = {...obj}
        setObj(set(obj_update))
    }

    //console.log(obj, true)

    return (
        <>
            <form onSubmit={submit} className="form">
                {name.map( (item, index) => (
                    <label className="form-label" key={index}>
                        {item}
                        <input 
                            type="text" 
                            name={item} 
                            value={obj[item]} 
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
