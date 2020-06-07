import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Projects extends Component {
    render() {
        return (
            <div className="container projects-container">
                <br />
                <h4>Projects</h4>
                <br />
                <ul className="works p-0 m-0">
                    <div className="row">
                        {
                            this.props.projects.map((project, key) => {
                                return (
                                    <div key={key} className="col-xs-1 col-sm-1 col-md-6 col-lg-4">
                                        <li className="list-style-none">
                                            <a href="">
                                                <img src={require('../profile_img.jpeg')} />
                                            </a>
                                            <div className="project-description align-center">
                                                <br />
                                                <h5>{project.title}</h5>
                                                <p>{project.desc}</p>
                                                <p>
                                                    {
                                                        project.techstack.map((tech, key) => {
                                                            return (
                                                                <span key={key} className="techs">{tech}</span>
                                                            )
                                                        })
                                                    }
                                                </p>
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
    projects: state.experienceReducers.projects
})

export default connect(mapStateToProps)(Projects)
