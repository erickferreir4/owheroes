import React from 'react';

const AdminContext = React.createContext()


const AdminStorage = ({children}) => {

    return (
        <AdminContext.Provider 
            value={{}}>
            {children}
        </AdminContext.Provider>
    )
}

export {AdminContext, AdminStorage}

