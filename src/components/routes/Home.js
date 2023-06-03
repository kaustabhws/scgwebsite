import React, { Component } from 'react'
import Hero from '../Hero'
import NavBar from '../NavBar/NavBar'

export class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Hero imgUrl="https://i.ibb.co/ZWXPYpn/TRK-2809.jpg" text="SpeedCubing Guwahati" />
            </>
        )
    }
}

export default Home