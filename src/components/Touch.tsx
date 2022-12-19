import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLettersFast from './AnimatedlettersFast'
import "./scss/touch.scss"

const Touch = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "Kontakt".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)
    })
    return (
        <section className='sec' id="kontakt">
            <span className="sectiontag">&lt;section&gt;</span>
            <div className='touch'>

                <label className='touch__label'>02. Napiš mi</label>
                <h1 className="touch__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
                <p className='touch__description'>
                    Ať už jsi velká, nebo malá firma co potřebuje, aby jim nějaký šikovný frontenďák naprogramoval web, víc webů, něco navíc k již existujícímu webu, designér co potřebuje vývojáře co mu nakódí jeho nápad, nebo kdokoliv kdo chce web, dej mi vědět!
                </p>
                <Link to="/contact" className="intro__button">
                    Napiš mi
                </Link>

            </div>
            <span className="sectiontag">&lt;/section&gt;</span>
        </section>

    )
}

export default Touch