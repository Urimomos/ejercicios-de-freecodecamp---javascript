const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value){
  const {...copiaObjeto} = records;
  if(value.length == 0){
    delete copiaObjeto[id][prop];
    return copiaObjeto;
  }else if(prop != "tracks"){
    copiaObjeto[id][prop] = value;
    return copiaObjeto;
  }else if(copiaObjeto[id]?.tracks == undefined){
    copiaObjeto[id].tracks = [];
    copiaObjeto[id].tracks.push(value);
    return copiaObjeto;
  }else{
    copiaObjeto[id].tracks.push(value);
    return copiaObjeto;
  }
}


console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));