

function normalizeUnits(manifest){
    const {...copia} = manifest;
    if(manifest.unit == "lb"){
        copia.unit = "kg";
        copia.weight *= 0.45;
        return copia;
    }else return copia;
}


function validateManifest(manifest){
    const {...copia} = manifest;
    Object.hasOwn(copia, "containerId") ? (Number.isInteger(copia.containerId) ? copia.containerId : copia.containerId = -1) : null; 
    Object.hasOwn(copia, "hazmat") ? (Number.isInteger(copia.hazmat) ? copia.hazmat = undefined : copia.hazmat) : null; 
    Object.hasOwn(copia, "weight") ? (Number.isInteger(copia.weight) ? copia.weight : copia.weight = undefined) : null;
    if(Object.hasOwn(copia, "destination") && !Number.isInteger(copia.destination)){
        copia.destination = copia.destination.trim();
    }
    if(Object.hasOwn(copia, "containerId") && Object.hasOwn(copia, "destination") && Object.hasOwn(copia, "weight") && Object.hasOwn(copia, "unit") && Object.hasOwn(copia, "hazmat")){
        if(copia.containerId > 0 && copia.destination.length > 0 && copia.weight > 0 && (copia.unit == "kg" || copia.unit == "lb") && typeof(copia.hazmat) == "boolean") {
            return {};
        }else{
        Object.hasOwn(copia, "containerId") ? (copia.containerId > 0 ?  delete copia.containerId : copia.containerId = "Invalid") : copia.containerId = "Missing";
        Object.hasOwn(copia, "destination") ? (copia.destination.length > 0 ? delete copia.destination : copia.destination = "Invalid") : copia.destination = "Missing";
        Object.hasOwn(copia, "weight") ? (copia.weight > 0 ? delete copia.weight : copia.weight = "Invalid") : copia.weight = "Missing";
        Object.hasOwn(copia, "unit") ? ((copia.unit == "kg" || copia.unit == "lb") ? delete copia.unit : copia.unit = "Invalid") : copia.unit = "Missing";
        Object.hasOwn(copia, "hazmat") ? (typeof(copia.hazmat) == "boolean" ? delete copia.hazmat : copia.hazmat = "Invalid") : copia.hazmat = "Missing";
        return copia;
        }
    }else{
        Object.hasOwn(copia, "containerId") ? (copia.containerId > 0 ?  delete copia.containerId : copia.containerId = "Invalid") : copia.containerId = "Missing";
        Object.hasOwn(copia, "destination") ? (copia.destination.length > 0 ? delete copia.destination : copia.destination = "Invalid") : copia.destination = "Missing";
        Object.hasOwn(copia, "weight") ? (copia.weight > 0 ? delete copia.weight : copia.weight = "Invalid") : copia.weight = "Missing";
        Object.hasOwn(copia, "unit") ? ((copia.unit == "kg" || copia.unit == "lb") ? delete copia.unit : copia.unit = "Invalid") : copia.unit = "Missing";
        Object.hasOwn(copia, "hazmat") ? (typeof(copia.hazmat) == "boolean" ? delete copia.hazmat : copia.hazmat = "Invalid") : copia.hazmat = "Missing";
        return copia;
    }
}

function processManifest(manifest){
    const validar = validateManifest(manifest);
    if(!Object.hasOwn(validar, "containerId") && !Object.hasOwn(validar, "destination") && !Object.hasOwn(validar, "weight") && !Object.hasOwn(validar, "unit") && !Object.hasOwn(validar, "hazmat")){
        const correcto = normalizeUnits(manifest);
        console.log(`Validation success: ${correcto.containerId}`);
        console.log(`Total weight: ${correcto.weight} kg`);
    }else{
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validar);
    }
}


console.log(typeof validateManifest({
    containerId: NaN,
    destination: "",
    weight: 234,
    unit: "ab",
    hazmat: 1
  }));