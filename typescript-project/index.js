"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let chiste;
;
const reportJokes = [];
const mostrarBotones = () => {
    const botonesScore = document.querySelectorAll(".boton-score");
    botonesScore.forEach((boton) => {
        boton.style.display = "inline-block";
    });
};
const ocultarBotones = () => {
    const botonesScore = document.querySelectorAll(".boton-score");
    botonesScore.forEach((boton) => {
        boton.style.display = "none";
    });
};
const llamarChiste1 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        const datos = yield respuesta.json();
        document.getElementById("texto-chiste").innerHTML = datos.joke;
        chiste = datos.joke;
        console.log('JOKE=>', datos);
    }
    catch (error) {
        console.log("Error al llamar a la API:", error);
    }
    mostrarBotones();
});
const llamarChiste2 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield fetch("https://api.chucknorris.io/jokes/random");
        const datos = yield respuesta.json();
        document.getElementById("texto-chiste").innerHTML = datos.value;
        chiste = datos.value;
        console.log('JOKE2=>', datos);
    }
    catch (error) {
        console.log("Error al llamar a la API:", error);
    }
    mostrarBotones();
});
const llamarChistes = () => {
    const random = Math.trunc(Math.random() * 2);
    console.log(random);
    if (random <= 0)
        llamarChiste1();
    else
        llamarChiste2();
};
function puntuacion(score) {
    let report = {
        joke: chiste,
        score: score,
        date: new Date().toISOString(),
    };
    reportJokes.push(report);
    console.table(reportJokes);
    ocultarBotones();
}
