import React, { Component } from 'react'
import { connect } from 'react-redux'

export class About extends Component {
    render() {
        return (
            <div className="about-container">
                <br />
                <h1>Staying curious. It's what I do best.</h1>
                <br />
                <div className="row">
                    {
                        this.props.aboutItems.map((about, key) => {
                            return (
                                <div key={key} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <h3>{about.title}</h3>
                                    <ul>
                                        {
                                            about.listItems.map((listItem, key) => {
                                                return <li key={key}>{listItem}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    aboutItems: state.experienceReducers.aboutItems
})

export default connect(mapStateToProps)(About)
