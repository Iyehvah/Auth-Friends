import React from "react";
import axios from "axios";

class AddFriend extends React.Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
      this.setState({
          newFriend: {
          ...this.state.newFriend,
          [e.target.name]: e.target.value
        }
      });
  };

  addFriendToList = e => {
    //   console.log(this.state);
      axios.post("http://localhost:5000/api/friends", this.state.newFriend, {
          headers: {Authorization: localStorage.getItem("token")}
      })
      .then("ADDFRIEND RESPONSE" , response => {
          console.log(response)
      })
      .catch("ADDFRIEND ERROR",error => {
          console.log(error)
      })
  };

  render() {
      return (
          <div>
              <h1>Add a Friend!</h1>
              <form onSubmit={this.addFriendToList}>
                <input 
                    type="text"
                    name="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                    placeholder="Enter FULL Name"
                />
                <input 
                    type="number"
                    name="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                    placeholder="Enter Age"
                />
                <input 
                    type="text"
                    name="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                />
                <button>Add</button>
              </form>
          </div>
      )
  }
}

export default AddFriend;
