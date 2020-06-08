import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Employment extends Component {
    render() {
        return (
            <div className="container projects-container">
                <br />
                <h4>Employment</h4>
                <br />
                <ul className="works p-0 m-0">
                    <div className="row">
                        {
                            this.props.employment.map((job, key) => {
                                return (
                                    <div key={key} className="col-xs-1 col-sm-1 col-md-6 col-lg-4">
                                        <li className="list-style-none">
                                            <a href="">
                                                <img className="work-img" src={job.src} />
                                            </a>
                                            <div className="project-description align-center">
                                                <br />
                                                <h5>{job.title}</h5>
                                                <h6>{job.role}</h6>
                                                <p>{job.desc}</p>
                                            </div>
                                        </li>
                                    </div>
                                )
                            })
                        }

                    </div>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    employment: state.experienceReducers.employment
})

export default connect(mapStateToProps)(Employment)
