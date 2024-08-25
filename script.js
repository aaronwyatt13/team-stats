onst team = {
    _players: [
      {firstName: 'Trevor', lastName: 'Lawrence', age: 22},
      {firstName: 'Dak', lastName: 'Prescott' ,age: 3},
      {firstName: 'Aaron', lastName: 'Rodgers', age: 1}
    ],
    _games: [
      {opponent: 'jaguars ', teamPoints: 13, opponentPoints: 24,},
      {opponent: 'cowboys', teamPoints: 21, opponentPoints: 32,},
      {opponent: 'packers ', teamPoints: 14, opponentPoints: 35,}
      ],
  
    get players (){
      return this._players;
    },
    get games () {
      return this._games
    },
  
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game)
    }
  
  
  }
  
  team.addPlayer('buggs', 'bunny', 76);
  console.log(team.players);
  team.players;
  
  team.addGame('titans', 98, 100);
  console.log(team.games);