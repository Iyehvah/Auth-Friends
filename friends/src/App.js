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
        <div className="atags">
          <Link to="/login" className="tag">Login</Link>
          <Link to="/protected" className="tag">Friends List</Link>
          <Link to="/newfriend" className="tag">Add a Friend</Link>
        </div>
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
