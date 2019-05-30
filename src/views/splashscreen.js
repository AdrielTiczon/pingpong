import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class SplashScreen extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Ping Pong Game</h1>
                    <Link to="/setgame">
                        <Button type="primary" size="large">
                            New Game
                        </Button>
                    </Link>
                <br/>
                <Link to="/leaderboards">
                        <Button type="primary" size="large">
                            New Game
                        </Button>
                    </Link>
            </div>
        )
    }
}

export default SplashScreen