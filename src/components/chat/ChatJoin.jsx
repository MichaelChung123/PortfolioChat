import React, { Component, Fragment } from 'react'
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
            <Fragment>
                <div className="main-desc">
                    <br />
                    <img className="rounded-circle" src={require('../content//profile_img.jpeg')} />
                    <br />
                    <h1>Direct Message me!</h1>
                    <p>Enter your name to start a chat with me.</p>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <p>Name</p>
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
            </Fragment>
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
