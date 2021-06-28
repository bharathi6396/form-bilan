import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import 'bootstrap';
import 'react-bootstrap';
import './App.css'

import Login from './components/Login'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import PageNotFound from './components/PageNotFound'

const UserContext = React.createContext('');

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            user: " "
        }
    }
    setUser = (user) => {
        this.setState({ user })
        // - La fonction `setUser` sera passée en props de la `Route` `Login` afin de l'utiliser plus tard.
    }

    render() {
        return (
            <UserContext.Provider value="dark">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={this.test}><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/UserList">UserList</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/UserProfile">UserProfile</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/PageNotFound">PageNotFound</Link></li>
                    </ul>
                </nav>
                
                    <Switch>
                        <Route path="/PageNotFound" component={PageNotFound} />
                        <Route exact path="/UserProfile" component={UserProfile} />
                        <Route path="/UserList" component={UserList} />
                        <Route path="/Login" component={Login} />
                        <Route path="/"><Login /></Route>
                    </Switch>
                

            </BrowserRouter>
            </UserContext.Provider>
        )
    }
}


export default App