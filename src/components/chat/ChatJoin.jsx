import React, { Component } from 'react'
import { connect } from 'react-redux'
import { joinChat } from '../../actions/chatActions'

export class ChatJoin extends Component {
    state = {
        username: ''
    }
    
    userJoin = (id, username) => {
        const user = { id, username };
        this.props.users.push(user);

        return user;
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        this.props.joinChat(this.state.username);

        this.props.socket.emit('joinRoom', this.state.username);

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <p>Username</p>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Join Chat
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    chatJoined: state.chatReducers.chatJoined,
    username: state.chatReducers.username,
    socket: state.chatReducers.socket,
    users: state.chatReducers.users
})


export default connect(mapStateToProps, { joinChat })(ChatJoin);
