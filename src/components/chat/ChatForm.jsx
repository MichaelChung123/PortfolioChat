import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/chatActions'

class ChatForm extends Component {
    state = {
        message: ''
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        this.props.socket.emit('chatMessage', this.state.message);

        this.setState({
            message: ''
        });
    };

    render() {
        const { message } = this.state
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

const mapStateToProps = state => ({
    socket: state.chatReducers.socket
})

export default connect(mapStateToProps, { sendMessage })(ChatForm)
