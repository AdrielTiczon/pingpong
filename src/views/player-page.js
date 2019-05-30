import React from 'react'
import { Button,Input } from 'antd'

class PlayerPage extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Enter Player names</h1>
                <Input placeholder="Basic usage" />
                <Input placeholder="Basic usage" />
                <Button type="primary" size="large">
                New Game
                </Button>
            </div>
        )
    }
}

export default PlayerPage