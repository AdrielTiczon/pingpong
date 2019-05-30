import React from 'react'
import { Button } from 'antd'

class GamePage extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Ping Pong Game</h1>
                <Button type="primary" size="large">
                New Game
                </Button>
                <br/>
                <Button type="primary" size="large">
                Leaderboards
                </Button>
            </div>
        )
    }
}

export default GamePage