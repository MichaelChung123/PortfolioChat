import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatMessages, sendMessage } from '../../actions/chatActions';
import PropTypes from 'prop-types';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4000";
let socket = socketIOClient(ENDPOINT);

class ChatLog extends Component {

    // constructor(props) {
    //     super(props)

    //     socket.on('message', (res) => {
    //         console.log('res: ', res);            
    //         this.props.sendMessage(res);
    //     });
    // }

    static propTypes = {
        messages: PropTypes.array.isRequired
    }

    componentDidMount() {
        socket.on('message', (res) => {
            console.log('res: ', res);            
            this.props.sendMessage(res);
        });

        this.props.getChatMessages();
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
    messages: state.chatReducers.messages
})

export default connect(mapStateToProps, { getChatMessages, sendMessage })(ChatLog);
