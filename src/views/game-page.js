import React from 'react'
import { Button } from 'antd'

class GamePage extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Lets Game!</h1>
                <h2>Player 1</h2>
                <p>Score</p>
                <Button type="primary" size="large">
                New Game
                </Button>
                <h2>Player 2</h2>
                <p>Score</p>
                <Button type="primary" size="large">
                Leaderboards
                </Button>
            </div>
        )
    }
}

export default GamePage