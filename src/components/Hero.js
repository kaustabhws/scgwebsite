import React from 'react'
import './HeroStyle.css'

function Hero(props) {
    return (
        <div className='hero'>
            <img src={props.imgUrl} />
            <div className="hero-text">
                <h1>{props.text}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quod recusandae, commodi quasi rerum autem ex nam aut ad saepe voluptatibus eos odit natus possimus similique qui corrupti porro odio.</p>
            </div>
        </div>
    )
}

export default Hero