import React from 'react';
import './reset.scss';
import './App.scss'
import Router from './Router';
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return ( 
        <>
            <Header/>
            <main>
                <Router />
            </main>
            <Footer/>
        </>
    );
}

export default App;
