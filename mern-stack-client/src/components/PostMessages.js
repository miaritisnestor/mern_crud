import React from "react";
import {connect} from 'react-redux'
import * as actions from '../actions/postMessage'

const PostMessages = (props) => {
    return (<div>from PostMessages</div>);
}

const mapStateToProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionToProps = {
    fetchAllPostMessages: actions.fetchAll
}

// connect function returns another function 
// and to that function we pass as an argument the PostMessages
export default connect(mapStateToProps ,mapActionToProps)(PostMessages);