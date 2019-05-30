import React from 'react'
import { Button,Input } from 'antd'
import { Redirect } from "react-router-dom";

class PlayerPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            redirect:false,
            player1:'',
            player2:'',
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

        renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/startgame',
                state: { player1:this.state.player1,player2:this.state.player2 }
            }} />
        }
    }

    handleChange = (event)  => {
        const { name, value} = event.target
        this.setState({ [name]: value })
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
                        onChange={this.handleChange} size="small" 
                />
                {this.renderRedirect()}
                <Button onClick={this.setRedirect}>Start Game</Button>
                
            </div>
        )
    }
}

export default PlayerPage