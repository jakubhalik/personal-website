import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import "./introduction.scss"

const Introduction = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = " Halík,".split("")
    const jobArray = "Frontend ".split("")
    const jobArray2 = "Vývojář".split("")

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)
    })

    return (
        <div className="intro ">
            <div className="intro__left">
                <span className="sectiontag">&lt;section&gt;</span>
                <h1 className="intro__headingPrimary">
                    <span className={letterClass}>Zdra</span><span className={`${letterClass} _12`}>vím,</span>&nbsp;<br />
                    <span className={`${letterClass} _13`}>jsem&nbsp;</span><span className={`${letterClass} _14`}>Jakub</span>&nbsp;
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={28} />
                </h1>
                <h2 className="intro__headingSecondary">FRONTEND Vývojář + Custom Theme Vývojář + Shopify Expert + špetka backendu</h2>
                <Link to="/contact" className="intro__button">
                    Napiš mi
                </Link>
                <span className="sectiontag">&lt;/section&gt;</span>
            </div>
            <div className="intro__right">
                <div className="logo__outline">
                <div className="container">
    <div className="coffee-header">
      <div className="coffee-header__buttons coffee-header__button-one"></div>
      <div className="coffee-header__buttons coffee-header__button-two"></div>
      <div className="coffee-header__display"></div>
      <div className="coffee-header__details"></div>
    </div>
    <div className="coffee-medium">
      <div className="coffe-medium__exit"></div>
      <div className="coffee-medium__arm"></div>
      <div className="coffee-medium__liquid"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
      <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
      <div className="coffee-medium__cup"></div>
    </div>
    <div className="coffee-footer"></div>
  </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction