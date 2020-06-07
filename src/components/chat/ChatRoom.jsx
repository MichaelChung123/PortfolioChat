import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChatForm from './ChatForm';
import ChatLog from './ChatLog';
import ChatJoin from './ChatJoin';

export class ChatRoom extends Component {
    render() {
        return (
            <div className="container">
                {this.props.chatJoined ?
                    <Fragment>
                        <ChatLog />
                        <ChatForm />
                    </Fragment>
                    :
                    <Fragment>
                        <ChatJoin />
                    </Fragment>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    chatJoined: state.chatReducers.chatJoined
});

export default connect(mapStateToProps)(ChatRoom);
