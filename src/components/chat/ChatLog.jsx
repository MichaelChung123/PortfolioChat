import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatMessages, sendMessage } from '../../actions/chatActions';
import { getSocket } from '../../actions/socketActions';

import PropTypes from 'prop-types';

class ChatLog extends Component {

    static propTypes = {
        messages: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.socket.on('message', (res) => {
            console.log('res: ', res);            
            this.props.sendMessage(res);
        });
    }
 
    render() {
        return (
            <div>
                <br />
                {
                    this.props.messages.map((message, key) => {
                        return (
                            <div key={key} className="container darker">
                                <p>{message}</p>
                                <span className="time-left">11:01</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.chatReducers.messages,
    socket: state.socketReducers.socket
})

export default connect(mapStateToProps, { getChatMessages, sendMessage, getSocket })(ChatLog);
