import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import ProtectedRoute from "./components/ProtectedRoute";
import AddFriend from "./components/AddFriend";


function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Friends List</Link>
        </li>
        <li>
          <Link to="/newfriend">Add a Friend</Link>
        </li>
      </ul>
      <Switch>
        <ProtectedRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route path="/newfriend" component={AddFriend} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
