import { playerModel } from "../models/player.model.js";


export const getPlayers = async function(){
  //get all players
  try {
    const players = await playerModel.find();
    if (players) {
      return players;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const getPlayer = async function(id){
  //get one specific player
  try {
    const player = await playerModel.findById(id);
    if (player) {
      return player;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const filterPlayerByName = async function(name, limit = 5, sortDirection = 'ASC'){
  //get players by name
  try {
    let sortObj = {};
    if (sortDirection.toUpperCase() === 'DESC') {
      sortObj = {first_name: -1};
    } else {
      sortObj = {first_name: 1};
    }
    const players = await playerModel.find({first_name: { $regex: '.*' + name + '.*' }}).sort(sortObj).limit(limit);
    return players;
  } catch (error) {
    return null;
  }
}