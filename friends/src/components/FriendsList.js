import React from "react";
import {GetToken} from "./GetToken";
import Styled from "styled-components";


const FriendDiv = Styled.div`
    border: 5px solid black;
    width: 300px;
    margin: 5px auto 5px auto;
    padding: 5px;
    color: black;
    background-color: teal;
    font-size: 1.5rem;
`;

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
                        <FriendDiv>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </FriendDiv>
                    )}
            </div>
        )
    }
}

export default FriendsList;