import React from "react";
import BotCollection from './BotCollection.js';
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state= {
      bots: []
    }
    
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      const botData = data.map(bots => {
        bots.clicked = false
      return bots })
      this.setState({bots: botData})
    }) 
  }

 handleClick = () => {
  
  
 }



  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots}/>
        <YourBotArmy/>
      </div>
    );
  }

}

export default BotsPage;
