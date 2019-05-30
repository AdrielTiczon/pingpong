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
            visible1:false,
            win: null,
            deuce:false,
            servingplayer:0,
            serving:"",
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
            });
    };
    

    handleCancel = e => {
        this.setState({
            visible: false,
            visible1:false,
        });
    };

    handleIncrementplayer1 = (event) => {
        this.handleServing();
        const score = this.state.player1score
        this.setState({ player1score: score + 1 })
    }
    handleIncrementplayer2 = (event) => {
        this.handleServing();
        const score = this.state.player2score
        this.setState({ player2score: score + 1 })
    }

    handleServing = () => {
        const i = this.state.servingplayer
        switch(i) {
            case 0:
                this.setState({
                    serving: this.state.player1,
                    servingplayer: this.state.servingplayer + 1
                })
            break;
            case 1:
                    this.setState({
                        serving: this.state.player1,
                        servingplayer: this.state.servingplayer + 1
                    })
            break;
            case 2:
                    this.setState({
                        serving: this.state.player2,
                        servingplayer: this.state.servingplayer + 1
                    })

            break;
            case 3:
                    this.setState({
                        serving: this.state.player2,
                        servingplayer: 0
                    })
            break;
            default:
                    return;
        }
    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.player2score !== this.state.player2score && this.state.player2score >= 11 ){
            this.setState({ win: this.state.player2, visible1: true, })
        }else if (prevState.player1score !== this.state.player1score && this.state.player1score >= 11 ){
            this.setState({ win: this.state.player1, visible1: true, })
        }

        if(prevState.visible !== this.state.visible){
            if(prevState.player1score > prevState.player2score){
                this.setState({ win: this.state.player1 })
            }else if (prevState.player1score === prevState.player2score) {
                this.setState({ win: "DRAW" })
            }
            else{
                this.setState({ win: this.state.player2 })
            }
        }


    }
    
    render(){
        return(
            <div>
                <h1>Lets Game!</h1>
                <h1>{ this.state.win } { this.state.win === null ? "" : "WINS!"}</h1>
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
                <Modal
                title="VICTORY!"
                visible={this.state.visible1}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                    <h1>{ this.state.win }</h1>
                    <p>{ this.state.win === "DRAW" ? "" : "WINS!"}</p>
                </Modal>
            </div>
        )
    }
}

export default GamePage