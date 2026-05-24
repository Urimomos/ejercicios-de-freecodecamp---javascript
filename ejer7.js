const questions = [
    {
        category: "Matematicas",
        question: "¿30 + 100?",
        choices: ["60", "130", "120"],
        answer: "130"
    },
    {
        category: "Español",
        question: "¿Que palabra esta bien escrita?",
        choices: ["alcol", "alchol", "alcohol"],
        answer: "alcohol"
    },
    {
        category: "Programacion",
        question: "¿Como se declara un objeto en JavaGod?",
        choices: ["Clase variable = new Clase();", "const var = new Clase();", "<?php Clase clase = new Clase(); ?>"],
        answer: "Clase variable = new Clase();"
    },
    {
        category: "Fisica",
        question: "¿Quien escribio el Philosophiæ naturalis principia mathematica?",
        choices: ["Leonard Euler", "Issac Newton", "Gottfried Leibniz"],
        answer: "Issac Newton"
    },
    {
        category: "Fisica",
        question: "¿Quien escribio el Philosophiæ naturalis principia mathematica?",
        choices: ["Leonard Euler", "Issac Newton", "Gottfried Leibniz"],
        answer: "Issac Newton"
    },
];

function getRandomQuestion(arreglo){
    return arreglo[Math.floor(Math.random() * 4)];
}

function getRandomComputerChoice(arregloDeRespuestas){
    return arregloDeRespuestas[Math.floor(Math.random() * 3)];
}

function getResults(pregunta, respuestaAleatoria){
    return pregunta.answer === respuestaAleatoria ? `The computer's choice is correct!` : `The computer's choice is wrong. The correct answer is: ${pregunta.answer}`;
}

const preguntaSeleccionada = getRandomQuestion(questions);
const {choices} = preguntaSeleccionada;
const respuestaAleatoria = getRandomComputerChoice(choices);
console.log(preguntaSeleccionada);
console.log(respuestaAleatoria);
console.log(getResults(preguntaSeleccionada, respuestaAleatoria));
