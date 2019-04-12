import React from "react";
import { connect } from "react-redux";

import { addNewFriend, toggleFriend } from "../actions";

class FriendsList extends React.Component {
  state = {
    newFriend: ""
  };

  handleChanges = e => {
    this.setState({ newFriend: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();
    debugger;
    this.props.addNewFriend(this.state.newFriend);
  };

  toggleFriend = (e, index) => {
    e.preventDefault();
    this.props.toggleFriend(index);
  };

  render() {
    return (
      <>
        <div className="friends-list">
          {this.props.friends.map((friend, index) => (
            <h4 onClick={e => this.toggleFriend(e, index)} key={index}>
              {friend.name}
              {friend.besties && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.addFriend}>Add friend</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends
});

export default connect(
  mapStateToProps,
  { addNewFriend, toggleFriend }
)(FriendsList);
