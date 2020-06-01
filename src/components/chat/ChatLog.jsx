import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/chatActions';
import PropTypes from 'prop-types';

class ChatLog extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.socket.on('message', (res) => {
            this.props.sendMessage(res);
        });
    }
 
    render() {
        console.log(this.props.messages);
        return (
            <div>
                <br />
                {
                    this.props.messages.map((message, key) => {
                        return (
                            <div key={key} className="container darker">
                                <span>{this.props.username}  {message.time}</span>
                                <p>{message.text}</p>
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
    socket: state.chatReducers.socket,
    username: state.chatReducers.username
})

export default connect(mapStateToProps, { sendMessage })(ChatLog);
