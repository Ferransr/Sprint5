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
function mostrarChiste() {
    const botonScore = document.getElementById('boton-score');
    if (botonScore) {
        botonScore.style.display = 'block';
    }
}
;
const llamarChiste = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        const datos = yield respuesta.json();
        document.getElementById("texto-chiste").innerHTML = datos.joke;
        console.log(datos);
    }
    catch (error) {
        console.log("Error al llamar a la API:", error);
    }
    mostrarChiste();
});
