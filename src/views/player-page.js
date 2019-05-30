import React from 'react'
import { Button,Input } from 'antd'

class PlayerPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            player1:'',
            player2:'',
        }
    }
    
    handleChange = (event)  => {
        const { name, value} = event.target
        this.setState({ [name]: value })
        console.log(this.state.player1 + this.state.player2)
    }

    render(){
        return(
            <div>
                <h1>Enter Player names</h1>
                <Input placeholder="Enter Player 1" name="player1"
                        value={this.state.player1} 
                        onChange={this.handleChange} 
                        size="sm"
                />
                <Input placeholder="Enter Player 2" name="player2" 
                        value={this.state.player2} 
                        onChange={this.handleChange} size="sm" 
                />
                <Button type="primary" size="large">
                    Start Game
                </Button>
            </div>
        )
    }
}

export default PlayerPage