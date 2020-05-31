import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChatMessages } from '../../actions/chatActions';
import ChatForm from './ChatForm';
import ChatLog from './ChatLog';

export class ChatRoom extends Component {
    state = {
        response: ""
    }

    render() {
        return (
            <div>
                <ChatLog />
                <ChatForm />
            </div>
        )
    }
}

export default connect()(ChatRoom);
