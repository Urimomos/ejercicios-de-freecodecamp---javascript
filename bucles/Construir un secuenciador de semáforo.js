const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};


function runSequence(config, cycles) {
  if(config.phases.length == 0){
    console.log("No phases found");
    return;
  }

  if(config.fault){
    console.log("Faulted phase!");
    return;
  }

  for(let i = 0; i < cycles ; i++){
    config.phases.forEach(element => {
      if(element.duration <= 0){
        console.log("Invalid phase detected");
      }else {
        console.log(`Switching to ${element.color} for ${element.duration} s`);
      }
    });
  }
}

function generateTimeline(config , cycles){
  let contador = 0;
  let arregloResult = [];
  for (let i = 0; i < cycles; i++) {
      let arregloTemp = config.phases.reduce((acumulador , elemento) => {
      contador += elemento.duration;
      acumulador.push(contador);
      return acumulador;
    }, []);
    arregloResult = arregloResult.concat(arregloTemp);
  }
  return arregloResult;
}

console.log(generateTimeline(config1, 2));

