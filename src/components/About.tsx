import React, { useEffect, useState } from 'react'
import AnimatedLettersFast from './AnimatedlettersFast'
import "./scss/about.scss"
const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "01. O mně".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)

    })
    return (
        <div className='about' id='about'>
            <div className="about__left">
                <span className="sectiontag">&lt;section&gt;</span>
                <h1 className="about__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={28} />
                </h1>
                <div className='about__description'>
                    Zdravím! Moje jméno je <span className='about__link'>Jakub&nbsp;Halík</span> a jsem Front-End Vývojář narozen a žijící v Brně. Z programování mám nejradši psaní kódu pro animace - Obecně rád přenáším kreativní nápady do světa webů.<br />
                    <br />
                    Jsem velmi dobrý v angličtině, rád se učím nové věci, mám rád problem solving, rád fotím, výletím, užívám krásu přírody.<br />
                    <br />
                    Technologie, které používám: <br />
                    <ul className='about__skillsList'>
                        <li className='about__skillsItems'>HTML</li>
                        <li className='about__skillsItems'>TailwindCSS</li>
                        <li className='about__skillsItems'>REACT</li>
                        <li className='about__skillsItems'>CSS</li>
                        <li className='about__skillsItems'>Javascript</li>
                        <li className='about__skillsItems'>jQuery</li>
                        <li className='about__skillsItems'>SaSS/SCSS</li>
                        <li className='about__skillsItems'>Typescript</li>
                        <li className='about__skillsItems'>Liquid</li>
                        <li className='about__skillsItems'>Bootstrap</li>
                        <li className='about__skillsItems'>JSON</li>
                    </ul>
                </div>
                <span className="sectiontag">&lt;/section&gt;</span>
            </div>
            <div className="about__right">
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-html5"></use>
                            </svg>
                        </div>
                        <div className="face2">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-css3"></use>
                            </svg>
                        </div>
                        <div className="face3">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-javascript"></use>
                            </svg>
                        </div>
                        <div className="face4">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-sass"></use>
                            </svg>
                        </div>
                        <div className="face5">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-typescript"></use>
                            </svg>
                        </div>
                        <div className="face6">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-react"></use>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About