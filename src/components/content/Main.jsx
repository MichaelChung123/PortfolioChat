import React, { Component } from 'react'
import Description from './Description'
import Projects from './experience/Projects'
import Employment from './experience/Employment'

export class Main extends Component {
    render() {
        return (
            <div>
                <Description />
                <Projects />
                <Employment />
            </div>
        )
    }
}

export default Main
