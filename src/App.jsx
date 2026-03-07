import { useState } from 'react'
import './App.scss'
import Header from './components/pages/header'
import Differential from './components/pages/differential';
import Cta from './components/pages/cta'
import Products from './components/pages/products';
import Prices from './components/pages/prices';
import Services from './components/pages/services';
import About from './components/pages/about';
import Numbers from './components/pages/numbers';
import Form from './components/pages/form';
import Doubts from './components/pages/doubts';
import Footer from './components/pages/footer';

function App() {   
    return (
        <>
        <Header />
        <div className='box_wraper'>
            <Cta />
            <Differential />
            <Products />
            <Prices />
            <Services />
            <About />
            <Numbers />
            <Form />
            <Doubts />
        </div>
        <Footer />
        </>
    );
}

export default App
