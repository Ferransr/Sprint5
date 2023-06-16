function mostrarChiste(): void {
  const botonScore: HTMLElement | null = document.getElementById('boton-score');
  if (botonScore) {
    botonScore.style.display = 'block';
  }
};

const llamarChiste = async () => {
  try {
    const respuesta = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    
    const datos = await respuesta.json();
    document.getElementById("texto-chiste")!.innerHTML = datos.joke;
    console.log(datos);
  } catch (error) {
    console.log("Error al llamar a la API:", error);
  }
  mostrarChiste();
};
