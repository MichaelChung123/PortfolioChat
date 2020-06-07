import React, { Component } from 'react'
import '../../styles/content.css'

export class Description extends Component {
    render() {
        return (
            <div className="main-desc">
                <br />
                <img className="rounded-circle" src={require('./profile_img.jpeg')} />
                <br />
                <h1>Let's talk!</h1>
                <p>I'm a Web Developer with a mission to create great products that people love.</p>
                <a className="minimal">
                    <span className="underline blue-green">Checkout my Projects</span>
                </a>
                <div className="desc-socials">
                    <a href="https://www.linkedin.com/in/chung-michael/" className="hero-icons" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/MichaelChung123" className="hero-icons" target="_blank"><i className="fa fa-github"></i></a>
                </div>
            </div>
        )
    }
}

export default Description

