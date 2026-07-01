const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

const dupes = [
  { trackId: "t1", artist: "A", title: "Song 1", votes: 1, bpm: 120, source: [0, 0], score: 10 },
  { trackId: "t2", artist: "B", title: "Song 2", votes: 2, bpm: 119, source: [0, 1], score: 19 },
  { trackId: "t1", artist: "A", title: "Song 3", votes: 9, bpm: 140, source: [1, 0], score: 70 }
];

const quotaTracks = [
  { trackId: "t1", artist: "A", title: "Song 1", votes: 1, bpm: 120, source: [0, 0], score: 10 },
  { trackId: "t2", artist: "A", title: "Song 2", votes: 1, bpm: 121, source: [0, 1], score: 9 },
  { trackId: "t3", artist: "B", title: "Song 3", votes: 1, bpm: 118, source: [0, 2], score: 8 },
  { trackId: "t4", artist: "A", title: "Song 4", votes: 1, bpm: 110, source: [1, 0], score: 0 }
];


function flattenPlaylists(listas){
   let resultado = [];
  if(!Array.isArray(listas)){
    return resultado;
  }

  for(let i = 0; i < listas.length; i++){
      for(let j = 0; j < listas[i].length; j++){
         listas[i][j].source = [i, j];
         resultado.push(listas[i][j]);
      }
  }
  return resultado;
}

function scoreTracks(arreglosDePistas){
   let resultado = [];
   for(let objeto of arreglosDePistas){
      objeto.score = objeto.votes * 10 - Math.abs(objeto.bpm - 120);
      resultado.push(objeto);
   }
   return resultado;
}

function dedupeTracks(lista){
   let id = [];
   let resultado = lista.slice();
   for(let track of lista){
      id.push(track.trackId);
   }
   for(let i = 0; i < lista.length; i++){
      let index = id.indexOf(lista[i].trackId, i+1);
      if(index != -1) resultado.splice(index,1);
   }
   return resultado;
}

function enforceArtistQuota(lista, apariciones){
   let artistas = [];
   let resultado = lista.slice();
   for(let objeto of lista){
      artistas.push(objeto.artist);
   }
   for(let i = 0; i < lista.length; i++){
      if() resultado.splice(index,1);
   }
}


console.log(enforceArtistQuota(quotaTracks));