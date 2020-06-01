import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/chatActions';
import PropTypes from 'prop-types';

class ChatLog extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.socket.emit('joined', this.props.username);

        this.props.socket.on('newUser', username => {
            console.log('on newUser: ', username)
            this.props.socket.on('message', (text) => {
                this.props.sendMessage(text, username);
            });
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
