import React, { Component } from 'react'
import '../../styles/footer.css'
export class Footer extends Component {
    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-light footer-container">
                <div className="footer-content">
                    <h5>Now that you're here...</h5>
                    <a href="https://resume.creddle.io/resume/8zqmdw2nke9" className="minimal">
                        <h3 className="underline blue-green">See my full resume</h3>
                    </a>
                    <p>© Michael Chung</p>
                </div>

            </nav>
        )
    }
}

export default Footer
