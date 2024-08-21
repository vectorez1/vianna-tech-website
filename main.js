class Signal {
  listeners = [];

  addListener(listener) {
    this.listeners.push(listener);
  }

  emit() {
    this.listeners.map((e) => {
      e();
    });
  }
}

let container = document.querySelector(".container");

let openWindow = new Signal();

function createPopUp({ name, inner }) {
  let popUp = document.createElement("div");
  popUp.className = "popUp";
  popUp.innerHTML = /*html*/ `
    <h1>${name}</h1>
    <div>${inner}</div>
  `;
  let accept = document.createElement("button");
  accept.innerText = "Accept";
  accept.addEventListener("click", () => {
    popUp.remove();
  });
  popUp.appendChild(accept);
  return popUp;
}

let aboutPopUp = createPopUp({
  name: "Sobre Mi",
  inner: /*html*/ `
        <div class='aboutContainer'>
            <div></div>
            <p>
                Mi nombre es Vianna del Rosario, soy estudiante de la carrera de arquitectura en la Universidad Dominicana OyM Santo Domingo, tengo 21 años de edad a la fecha. Amo mi carrera porque me da la oportinudad de condisionar y mejorar en el espacio en el que esté, es una carrera muy hermosa y con muchas ramas profesionales que mediante la computación se nos hace más fácil desarrollarnos, gracias a ella tenemos el CAD y el BIM que nos permiten hacer nuestros diseños de manera computarizada y sencilla. 
            </p>
        </div>
    `,
});

let filePopUp = createPopUp({
  name: "Archivos",
  inner: /*html*/ `
        <div class='filesContainer'>
          <div class='filesPDF'>
            <h2>PDF</h2>
            <embed src='./assets/documents/trabajofinal.pdf'width='400px' height='420px'/>
          </div>
          <div class='filesAudios'>
            <h2>Audios</h2>
            <div class='audiosContainer'>
              <div>
                <h3>Tema 1</h3>
                <audio src="./assets/audios/tema1.m4a" controls="true"></audio>
              </div>
              <div>
                <h3>Tema 2</h3>
                <audio src="./assets/audios/tema2.m4a" controls="true"></audio>
              </div>
              <div>
                <h3>Tema 3</h3>
                <audio src="./assets/audios/tema3.m4a" controls="true"></audio>
              </div>
              <div>
                <h3>Tema 4</h3>
                <audio src="./assets/audios/tema4.m4a" controls="true"></audio>
              </div>

            </div>
          </div>
        </div>
  `,
});

let spawnPopUp = (popUp) => {
  let hasPopUp = false;
  container.childNodes.forEach((e) => {
    if (e.classList == null) {
      return;
    }
    if (e.classList.contains("popUp")) {
      //hasPopUp = true;
      e.remove();
    }
    container.appendChild(popUp);
  });
  //hasPopUp == false ? container.appendChild(popUp) : alert("already a pop up");
};

let fileButton = document.querySelector(".file-button");
let aboutButton = document.querySelector(".about-button");

aboutButton.addEventListener("click", () => {
  spawnPopUp(aboutPopUp);
});

fileButton.addEventListener("click", () => {
  spawnPopUp(filePopUp);
});
