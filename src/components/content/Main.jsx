import React, { Component } from 'react'
import Description from './Description'
import Projects from './experience/Projects'
import Employment from './experience/Employment'
import ChatRoom from '../chat/ChatRoom'

export class Main extends Component {
    render() {
        return (
            <div>
                <Description />
                <Projects />
                <Employment />
                <ChatRoom />
            </div>
        )
    }
}

export default Main
