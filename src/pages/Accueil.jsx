// import react
import React from 'react'

// import perso
import Header from '../components/Header'
import Footer from '../components/Footer'


/**
 * Render of Accueil page
 * @function Accueil
 * @param {*}
 * @returns {jsx}
 */
function Accueil()
{
    return (
        <div className='container'>

            <div className="row">

                <Header/>

                <main className='col-9'>

                    <h1>hello react</h1>

                </main>

                <Footer/>

            </div>

        </div> 
    )
}

export default Accueil