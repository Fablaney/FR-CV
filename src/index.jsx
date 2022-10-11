import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

// import perso
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'

// pages
import Accueil from './pages/Accueil'
import Portfolio from './pages/Portfolio'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import Error from './pages/Error'


/**
* Router his job is send the good page whith the URL, or 404 if page not found
*/
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>

        <Routes>

            <Route path="/" element={<Accueil />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/contact" element={<Contact />} />

            {/* page d'erreur */}
            <Route path="/*" element={<Error/>}/>

        </Routes>

    </Router>
)