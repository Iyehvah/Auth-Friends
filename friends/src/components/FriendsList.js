import React from "react";
import {GetToken} from "./GetToken";

class FriendsList extends React.Component {
    state = {
        FriendsList: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        GetToken()
        .get("/friends")
        .then( response => {
            // console.log(response.data)
           this.setState({...this.state, FriendsList: response.data})
        })
        .catch( "ERROR" , error => {
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                <h2>Friends!</h2>

                    {this.state.FriendsList.map(friend => 
                        <div>
                            <h3>Name: {friend.name}</h3>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                    
                        </div>
                    )}

            </div>
        )
    }
}

export default FriendsList;