import React, { Component } from 'react'
import '../../styles/footer.css'
export class Footer extends Component {
    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-light footer-container">
                <div className="footer-content">
                    <h5>Now that you're here...</h5>
                    <h3>See my full resume</h3>
                    <h7>© Michael Chung</h7>
                </div>
                
            </nav>
        )
    }
}

export default Footer
