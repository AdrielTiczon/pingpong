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
            win: "",
            deuce:false,
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
        this.checkCondition();
    }
    handleIncrementplayer2 = (event) => {
        const score = this.state.player2score
        this.setState({ player2score: score + 1 })
        this.checkCondition();
    }

    checkCondition = () => {
        const { player1score, player2score } = this.state;
        const winscore = 11

        
    }
    
    render(){
        return(
            <div>
                <h1>Lets Game!</h1>
                <h2>{this.state.deuce ? "DUECE" : null }</h2>
                <h2>{this.state.player1}</h2>
                <p>Score</p>
                <p>{this.state.player1score}</p>
                <Button type="primary" size="large" name="player1score" onClick={this.handleIncrementplayer1}>
                Score +1
                </Button>
                <h2>{this.state.player2}</h2>
                <p>Score</p>
                <p>{this.state.player2score}</p>
                <Button type="primary" size="large" name="player1score" onClick={this.handleIncrementplayer2}>
                Score +1
                </Button>
                <br/>
                <Button type="primary" onClick={this.showModal}>
                    End Game
                </Button>
                <h1>{this.state.win}</h1>
                <p>WINS!</p>
                <Modal
                title="Game Over"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <h1>{this.state.win}</h1>
                <p>WINS!</p>
                </Modal>
            </div>
        )
    }
}

export default GamePage