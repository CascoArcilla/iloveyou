let principal = document.getElementById("hola");
let myLove = document.getElementById("my-love");
let miChiquita = document.getElementById("mi-chiquita");
let corazonImagen = document.getElementById("corazon-nombre");

principal.addEventListener("animationend", outHola);
myLove.addEventListener("animationend", outMyLove);
miChiquita.addEventListener("animationend", outChiquita);
addClassName();

function outHola() {
  principal.removeEventListener("animationend", outHola);

  setTimeout(() => {
    principal.addEventListener("animationend", () => {
      hiddenElemment(principal, document.getElementById("my-love"));
    });

    setTimeout(() => {
      principal.classList.add(
        "animate__animated",
        "animate__lightSpeedOutRight"
      );
    }, 1000);
  }, 1000);
}

function outMyLove() {
  myLove.removeEventListener("animationend", outMyLove);

  let spanes = myLove.querySelectorAll("span");
  spanes[spanes.length - 1].addEventListener("animationend", () => {
    setTimeout(() => {
      hiddenElemment(myLove, miChiquita);
    }, 2000);
  });

  let isFirts = true;

  spanes.forEach((span, i) => {
    span.classList.forEach((styleClass) => span.classList.remove(styleClass));

    if (isFirts) {
      span.classList.add("animate__animated", "animate__zoomOutUp", "delay-1");
      isFirts = !isFirts;
    } else {
      span.classList.add(
        "animate__animated",
        "animate__zoomOutDown",
        "delay-3"
      );
    }
  });
}

function addClassName() {
  let p = corazonImagen.querySelector("p");
  let spanes = p.querySelectorAll("span");
  let img = corazonImagen.querySelector("img");

  spanes[spanes.length - 1].addEventListener("animationend", () => {
    img.classList.remove("animate__slideInUp");
    img.classList.add("animate__pulse", "animate__infinite");
  });

  let alter = true;
  let delay = 200;
  let aumento = 200;
  spanes.forEach((span) => {
    if (alter) {
      span.classList.add("animate__animated", "animate__fadeInDown");
      span.style.animationDelay = delay + "ms";
      delay += aumento;
      alter = !alter;
    } else {
      span.classList.add("animate__animated", "animate__fadeInUp");
      span.style.animationDelay = delay + "ms";
      delay += aumento;
      alter = !alter;
    }
  });
}

function outChiquita() {
  miChiquita.removeEventListener("animationend", outChiquita);

  setTimeout(() => {
    miChiquita.addEventListener("animationend", () => {
      hiddenElemment(miChiquita, corazonImagen);
    });
    miChiquita.classList.add("animate__animated", "animate__fadeOutRight");
  }, 1000);
}

/**
 *
 * @param {HTMLElement} element
 * @param {HTMLElement} showElement
 */
function hiddenElemment(element, showElement = null) {
  element.classList.add("hidden");

  if (showElement) {
    showElement.classList.remove("hidden");
  }
}
