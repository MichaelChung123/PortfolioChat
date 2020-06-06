import React, { Component } from 'react'

export class Description extends Component {
    render() {
        return (
            <div>
                <img className="rounded-circle" src={require('./profile_img.jpeg')} />
                <h1>Let's talk!</h1>
                <h7>I'm a Web Developer with a mission to create great products that people love.</h7>
                <a className="minimal">
                    <span className="underline blue-green">Checkout my Projects</span>
                </a>
                <a href="https://www.linkedin.com/in/chung-michael/" class="hero-icons" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="https://github.com/MichaelChung123" class="hero-icons" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
        )
    }
}

export default Description

