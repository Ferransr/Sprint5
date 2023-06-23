let temperatura: string;
let chiste: string;
interface tipoChiste {
  joke: string;
  score: number;
  date: string;
}
const reportJokes: tipoChiste[] = [];

const mostrarBotones = () => {
  const botonesScore: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".boton-score");
  botonesScore.forEach((boton: HTMLButtonElement) => {
    boton.style.display = "inline-block";
  });
};

const ocultarBotones = () => {
  const botonesScore: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".boton-score");
  botonesScore.forEach((boton: HTMLButtonElement) => {
    boton.style.display = "none";
  });
};

const llamarChiste1 = async () => {
  try {
    const respuesta = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });

    const datos = await respuesta.json();
    document.getElementById("texto-chiste")!.innerHTML = datos.joke;
    chiste = datos.joke;
    console.log("JOKE=>", datos);
  } catch (error) {
    console.log("Error al llamar a la API:", error);
  }
  mostrarBotones();
};

const llamarChiste2 = async () => {
  try {
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
    const datos = await respuesta.json();
    document.getElementById("texto-chiste")!.innerHTML = datos.value;
    chiste = datos.value;
    console.log("JOKE2=>", datos);
  } catch (error) {
    console.log("Error al llamar a la API:", error);
  }
  mostrarBotones();
};

const llamarChistes = () => {
  const random: number = Math.trunc(Math.random() * 2);
  console.log(random);
  if (random <= 0) llamarChiste1();
  else llamarChiste2();
  cambiarImagenDeFondo();
};

const puntuacion = (score: number) => {
  let report: tipoChiste = {
    joke: chiste,
    score: score,
    date: new Date().toISOString(),
  };
  reportJokes.push(report);
  console.table(reportJokes);
  ocultarBotones();
};

const weather = async () => {
  try {
    const respuesta = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=41.3851&lon=2.1734&units=metric&appid=ee11567202766ed1b15e51654dcbf58e"
    );
    const datos = await respuesta.json();
    const temperatura = datos.main.temp;
    const icono = datos.weather[0].icon;

    document.getElementById("temp")!.innerHTML =
      temperatura.toFixed(1) + "º" + "C";

    const iconoURL = `http://openweathermap.org/img/w/${icono}.png`;
    const iconoElemento = document.createElement("img");
    iconoElemento.src = iconoURL;
    document.getElementById("iconoWeather")!.appendChild(iconoElemento);

    console.log(datos);
  } catch (error) {
    console.log("Error al llamar a la API:", error);
  }
};
weather();

function cambiarImagenDeFondo(): void {
  const imagenesDeFondo: string[] = [
    "assets/layered-waves-haikei.svg",
    "assets/layered-waves-haikei1.svg",
    "assets/layered-waves-haikei2.svg",
    "assets/layered-waves-haikei3.svg",
    "assets/layered-waves-haikei4.svg",
  ];

  const indiceAleatorio: number = Math.floor(
    Math.random() * imagenesDeFondo.length
  );
  const imagenSeleccionada: string = imagenesDeFondo[indiceAleatorio];

  document.body.style.backgroundImage = `url(${imagenSeleccionada})`;
}
