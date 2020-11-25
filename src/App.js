import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {Layout} from 'antd'
import {Home} from './pages/home';
import {Movie} from './pages/movie';
import {NewMovies} from './pages/newMovies';
import Search from './pages/search';
import {Popular} from './pages/popular';

import { MenuTop } from './components/menu/MenuTop';


export const App = () => {

    const {Header} = Layout;

    return (
           <Router>
               
                   <MenuTop/>
               
                <div>
                    <Switch>
                        <Route exact path="/" > 
                            <Home />
                        </Route>
                        <Route exact path="/new-movies" >
                            <NewMovies />
                        </Route>
                        <Route exact path="/popular" >
                            <Popular />
                        </Route>
                        <Route exact path="/search" >
                            <Search />
                        </Route>
                        <Route exact path="/movie/:id" >
                            <Movie />
                        </Route>
                        <Redirect to='/' />
                    </Switch>
                </div>
           </Router>
    )
}

export default App;