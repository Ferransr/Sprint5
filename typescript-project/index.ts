let chiste : string;
interface tipoChiste { joke: string; score: number; date: string };
const reportJokes: tipoChiste[] = [];

const mostrarBotones = () => {
  const botonesScore: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".boton-score");
  botonesScore.forEach((boton: HTMLButtonElement) => {
    boton.style.display = "inline-block";
  });
}
const ocultarBotones = () => {
  const botonesScore: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".boton-score");
  botonesScore.forEach((boton: HTMLButtonElement) => {
    boton.style.display = "none";
  });
}

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
    console.log('JOKE=>',datos);

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
    console.log('JOKE2=>',datos);

  } catch (error) {
    console.log("Error al llamar a la API:", error);
  }
  mostrarBotones();
};

const llamarChistes = () => {
  const random : number = Math.trunc(Math.random() * 2);
  console.log(random);
  if (random <= 0) llamarChiste1();
  else llamarChiste2();
};

function puntuacion(score: number) :void {
  let report: tipoChiste = {
    joke : chiste,
    score: score,
    date: new Date().toISOString(),
  };
  reportJokes.push(report);
  console.table(reportJokes);
  ocultarBotones();
}
