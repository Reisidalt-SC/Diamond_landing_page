import { useState } from 'react'
import './App.scss'
import Header from "./components/header/header";
import Differential from './components/differential/differential';
import Cta from './components/cta/cta'
import Products from './components/products/products';
import Prices from './components/prices/prices';
import Services from './components/services/services'; 
import About from './components/about/about';
import Numbers from './components/numbers/numbers';
import Form from './components/form/form';
import Doubts from './components/doubts/doubts';
import Footer from './components/footer/footer';

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
