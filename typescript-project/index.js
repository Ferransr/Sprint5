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
let temperatura;
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
    cambiarImagenDeFondo();
};
const puntuacion = (score) => {
    let report = {
        joke: chiste,
        score: score,
        date: new Date().toISOString(),
    };
    reportJokes.push(report);
    console.table(reportJokes);
    ocultarBotones();
};
const weather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.3851&lon=2.1734&units=metric&appid=ee11567202766ed1b15e51654dcbf58e');
        const datos = yield respuesta.json();
        const temperatura = datos.main.temp;
        const icono = datos.weather[0].icon;
        document.getElementById('temp').innerHTML = temperatura.toFixed(1) + 'º' + 'C';
        const iconoURL = `http://openweathermap.org/img/w/${icono}.png`;
        const iconoElemento = document.createElement('img');
        iconoElemento.src = iconoURL;
        document.getElementById('iconoWeather').appendChild(iconoElemento);
        console.log(datos);
    }
    catch (error) {
        console.log("Error al llamar a la API:", error);
    }
});
weather();
function cambiarImagenDeFondo() {
    const imagenesDeFondo = [
        'assets/layered-waves-haikei.svg',
        'assets/layered-waves-haikei1.svg',
        'assets/layered-waves-haikei2.svg',
        'assets/layered-waves-haikei3.svg',
        'assets/layered-waves-haikei4.svg'
    ];
    const indiceAleatorio = Math.floor(Math.random() * imagenesDeFondo.length);
    const imagenSeleccionada = imagenesDeFondo[indiceAleatorio];
    document.body.style.backgroundImage = `url(${imagenSeleccionada})`;
}
