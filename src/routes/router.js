import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SplashScreen from '../views/splashscreen'
import PlayerPage from '../views/player-page'
import GamePage from '../views/game-page'
import LeaderboardPage from '../views/leaderboard-page'

const MainRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={SplashScreen} />
            <Route exact path="/setgame" component={PlayerPage} />
            <Route exact path="/startgame" component={GamePage} />
            <Route exact path="/leaderboards" component={LeaderboardPage} />
        </Router>
    )
}

export default MainRouter