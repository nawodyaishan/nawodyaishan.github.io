// Importing React
import React from 'react';

// Importing from container
import {About, Header, Footer, Skills, Testimonial, Work} from './container';

// Importing Navigation bar
import {Navbar} from './components';

// Importing App SCSS
import './App.scss'

import './constants/images'


const App = () => (
        <div className="app">
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Testimonial/>
            <Footer/>
        </div>
    )


export default App;