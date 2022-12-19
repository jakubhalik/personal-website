import AnimatedLetters from 'components/AnimatedLetters'
import React, { useState, useEffect, useRef } from 'react'
import "styles/contact.scss"
import Map, { Marker } from 'react-map-gl';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = "Napiš mi".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)
    })

    const form = useRef();

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ftx013h', 'template_ddjuxno', form.current, 'qjnS847X0-1Wiidxb')
            .then((result) => {
                console.log(result.text);
                window.alert("Děkuji za zprávu, prosím o trpělivost než se dostanu k tomu na ní odpovědět. :)")
            }, (error) => {
                console.log(error.text);
            });

        inputRef1.current.value = ""
        inputRef2.current.value = ""
        inputRef3.current.value = ""

    };


    return (
        <div className='contact'>
            <div className="contact__left">
                <span className="tag" style={{ padding: "0rem" }}>&lt;body&gt;</span>
                <h1 className="about__headingPrimary">
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
                <p className='contact__description'>
                    Rád od vás uslyším, ať už jste kdokoliv.<br/>
                    Žádný email neignoruji, na každý odpovím, ať už se rozhodnu jakkoliv.
                </p>
                <div className="form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form__group">
                            <input name="user_name" ref={inputRef1} type="text" className="form__input" id="name" placeholder="Jméno a Příjmení" required />
                            <label htmlFor="name" className="form__label">Jméno a Příjmení</label>
                        </div>
                        <div className="form__group">
                            <input type="email" ref={inputRef2} name="user_email" className="form__input" id="email" placeholder="Emailová adresa" required />
                            <label htmlFor="email" className="form__label">Emailová adresa</label>
                        </div>
                        <div className="form__group">
                            <textarea name="message" ref={inputRef3} className="form__input" id="email" placeholder="Vaše zpráva" required />
                            <label htmlFor="email" className="form__label">Vaše zpráva</label>
                        </div>
                        <button value="Send" className="intro__button">
                            Poslat Email
                        </button>
                    </form>
                </div>
                <span className="tag" style={{ padding: "0rem" }}>&lt;body&gt;</span>
            </div>
            <div className="contact__right">
            <div className="backg">
		<div className="planet">
			<div className="r1"></div>
			<div className="r2"></div>
			<div className="r3"></div>
			<div className="r4"></div>
			<div className="r5"></div>
			<div className="r6"></div>
			<div className="r7"></div>
			<div className="r8"></div>
			<div className="shad"></div>
		</div>
		<div className="stars">
			<div className="s1"></div>
			<div className="s2"></div>
			<div className="s3"></div>
			<div className="s4"></div>
			<div className="s5"></div>
			<div className="s6"></div>
		</div>
		<div className="an">
			<div className="tank"></div>
			<div className="astro">
					
					<div className="helmet">
						<div className="glass">
							<div className="shine"></div>
						</div>
					</div>
					<div className="dress">
						<div className="c">
							<div className="btn1"></div>
							<div className="btn2"></div>
							<div className="btn3"></div>
							<div className="btn4"></div>
						</div>
					</div>
					<div className="handl">
						<div className="handl1">
							<div className="glovel">
								<div className="thumbl"></div>
								<div className="b2"></div>
							</div>
						</div>
					</div>
					<div className="handr">
						<div className="handr1">
							<div className="glover">
								<div className="thumbr"></div>
								<div className="b1"></div>
							</div>
						</div>
					</div>
					<div className="legl">
						<div className="bootl1">
							<div className="bootl2"></div>
						</div>
					</div>
					<div className="legr">
						<div className="bootr1">
							<div className="bootr2"></div>
						</div>
					</div>
					<div className="pipe">
						<div className="pipe2">
							<div className="pipe3"></div>
						</div>
					</div>
				</div>
			</div>
    </div>
    </div>
        </div>
    )
}

export default Contact