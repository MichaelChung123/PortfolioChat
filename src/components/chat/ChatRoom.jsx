import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChatMessages } from '../../actions/chatActions';
import ChatForm from './ChatForm';
import ChatLog from './ChatLog';
import ChatJoin from './ChatJoin';
import { joinChat } from '../../actions/chatActions'

export class ChatRoom extends Component {
    render() {
        return (
            <div>
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
