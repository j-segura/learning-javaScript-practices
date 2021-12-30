team ={
    _players: [
      {
        firstName: 'Cristiano', 
        lastName: 'Ronaldo', 
        age: 36
      },
      {
        firstName: 'Leonel', 
        lastName: 'Messi', 
        age: 35
      },
      {
        firstName: 'James', 
        lastName: 'Rodriguez', 
        age: 30
      }
    ],
    _games: [
      {
        opponent: 'Real Madrid', 
        teamPoints: 42, 
        opponentPoints: 30
      },
      {
        opponent: 'Barcelna', 
        teamPoints: 29, 
        opponentPoints: 30 
      },
      {
        opponent: 'Paris', 
        teamPoints: 50, 
        opponentPoints: 20 
      }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer('David', 'Segura', 16);
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Nacional', 30 , 26);
  team.addGame('Rusia', 60, 30);
  team.addGame('Medellin', 30, 50);
  
  console.log(team._games);