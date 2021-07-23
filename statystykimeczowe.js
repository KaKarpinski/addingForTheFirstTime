const team = {
  _players: [],
  _games: [],

  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },

addPlayerToTeam(firstName, lastName, age){
  const player = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  }
  return this._players.push(player);
},

addGamesToTeam(opponent, teamPoints, opponentPoints){
  const game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints,
  }
  return this._games.push(game);
}
}

team.addPlayerToTeam('Dominico', 'Kikita', 23);
team.addPlayerToTeam('Sandro', 'Paulinez', 26);
team.addPlayerToTeam('Enrico', 'Morricone', 23);
team.addPlayerToTeam('Bugs', 'Bunny', 76);
team.addPlayerToTeam('Lisa', 'Leslie', 44);
team.addPlayerToTeam('Steph', 'Curry', 28);

team.addGamesToTeam('Mediolano', 32, 12);
team.addGamesToTeam('Szczebodzin', 12, 23);
team.addGamesToTeam('Concordia Knurow', 4, 65);

console.log(team._players)
console.log(team._games)