import React from 'react'
import { Button,Modal } from 'antd'

class GamePage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            player1: this.props.location.state.player1,
            player2: this.props.location.state.player2,
            player1score: 0,
            player2score: 0,
            visible: false,
            win: null,
            deuce:false,
            serving:"",
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
            });
        };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleIncrementplayer1 = (event) => {
        const score = this.state.player1score
        this.setState({ player1score: score + 1 })
    }
    handleIncrementplayer2 = (event) => {
        const score = this.state.player2score
        this.setState({ player2score: score + 1 })
    }

    handleServing = () => {
        
    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.player2score !== this.state.player2score && this.state.player2score >= 11 ){
            this.setState({ win: "player2" })
        }else if (prevState.player1score !== this.state.player1score && this.state.player1score >= 11 ){
            this.setState({ win: "player1" })
        }

        if(prevState.visible !== this.state.visible){
            if(prevState.player1score > prevState.player2score){
                this.setState({ win: "player1" })
            }else if (prevState.player1score === prevState.player2score) {
                this.setState({ win: "DRAW" })
            }
            else{
                this.setState({ win: "player2" })
            }
        }
    }
    
    render(){
        return(
            <div>
                <h1>Lets Game!</h1>
                <h2>{ this.state.deuce ? "DUECE" : null }</h2>
                <h2>{ this.state.player1 }</h2>
                <p>Score</p>
                <p>{ this.state.player1score }</p>
                <Button type="primary" size="large" name="player1score" onClick={this.handleIncrementplayer1}>
                Score +1
                </Button>
                <h2>{ this.state.player2 }</h2>
                <p>Score</p>
                <p>{ this.state.player2score }</p>
                <Button type="primary" size="large" name="player1score" onClick={this.handleIncrementplayer2}>
                Score +1
                </Button>
                <br/>
                <br/>
                <h3> {this.state.serving} is serving!</h3>
                <Button type="primary" onClick={ this.showModal }>
                    End Game
                </Button>
                
                <Modal
                title="Game Over"
                visible={ this.state.visible }
                onOk={ this.handleOk }
                onCancel={ this.handleCancel }
                >
                <h1>{ this.state.win }</h1>
                <p>{ this.state.win === "DRAW" ? "" : "WINS!"}</p>
                </Modal>
            </div>
        )
    }
}

export default GamePage