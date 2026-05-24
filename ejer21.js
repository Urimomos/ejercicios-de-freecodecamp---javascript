function getAverage(arregloDeCalificaciones){
    let promedio = 0;
    for(let calificacion of arregloDeCalificaciones){
        promedio += calificacion;
    }
    return promedio/arregloDeCalificaciones.length;
}

function getGrade(promedio){
    switch(parseInt(promedio/10)){
        case 10:{
            return "A+";
        }
        case 9:{
            return "A";
        }
        case 8:{
            return "B";
        }
        case 7:{
            return "C";
        }
        case 6:{
            return "D";
        }
        default:{
            return "F";
        }
    }
}

function hasPassingGrade(puntaje){ 
   const  puntuacion = getGrade(puntaje);
   if(puntuacion != "F"){
    return true;
   }
   else{
    return false;
   }
}

function studentMsg(arregloDeCalificaciones, promedioInvididual){
    const mensaje = [" You failed the course.", " You passed the course."];
    return `Class average: ${getAverage(arregloDeCalificaciones)}. Your grade: ${getGrade(promedioInvididual)}.${mensaje[0 + hasPassingGrade(promedioInvididual)]}`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 85));