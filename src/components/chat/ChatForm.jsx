import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage, emitMessage } from '../../actions/chatActions'
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4000";
let socket = socketIOClient(ENDPOINT);;

class ChatForm extends Component {

    // constructor(props) {
    //     super(props)
    //     const {dispatch} = this.props

    //     console.dir(socket);

    //     socket.on('chatMessage', (res) => {
    //         console.dir(res);
    //         // dispatch(sendMessage(res));
    //         this.props.sendMessage(res);
    //     });
    // }

    state = {
        message: ''
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        socket.emit('chatMessage', this.state.message);

        this.setState({
            message: ''
        });
    };

    render() {
        const { message, name } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { sendMessage })(ChatForm)
