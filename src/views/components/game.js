
// import { observable,action,computed } from 'mobx-react'

// class Game{
//     @observable leaderboard = [];

//     @computed report() {
// 		if (this.leaderboard.length === 0)
// 			return "<none>";
//         return `Playername: "${this.leaderboard[0].playername}" 
//                 <br/> Wins: ${this.leaderboard.win}
//                 <br/> Loses: ${this.leaderboard.lose}`
// 	}

//     @action addWinner = (name,win,lose) =>{
//         this.leaderboard.push({
//             playername: name,
//             win: win,
//             lose: lose,
//         });
//     }
// }

// const Game = new Game();