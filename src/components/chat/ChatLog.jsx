import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/chatActions';
import PropTypes from 'prop-types';

class ChatLog extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.socket.on('message', (msgObject) => {
            this.props.sendMessage(msgObject);
        });
    }

    render() {
        return (
            <Fragment>
                <br />
                {
                    this.props.messages.map((message, key) => {
                        return (
                            <div key={key} className="container darker">
                                <span>{message.username}  {message.time}</span>
                                <p>{message.text}</p>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.chatReducers.messages,
    socket: state.chatReducers.socket,
    username: state.chatReducers.username
})

export default connect(mapStateToProps, { sendMessage })(ChatLog);
