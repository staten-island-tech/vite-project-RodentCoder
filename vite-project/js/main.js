import { Doms } from "./doms";
import { Monkeys } from "./arrays";
import { isPri, isMag, isMil, isSup } from "./Somethingcool";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init();

console.log("man");
console.log(Doms.Dark)

Doms.Dark.addEventListener("click", function () {
  if (document.body.classList.contains("whitemode")) {
    document.body.classList.remove("whitemode");
    document.body.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
    document.body.classList.add("whitemode");
  }
});

Doms.Sup.addEventListener("click", () => {
  (Doms.items.innerHTML = ""),
    Monkeys.filter(isSup).forEach((el) =>
      Doms.items.insertAdjacentHTML(
        "afterbegin",
        `
<div class="card">
<h2 class="item">${el.name}</h2>
<img class="monkey" src="${el.img}"/>
</br>
<h2 class="class">${el.class}</h2>
<h3 class="cost">$:${el.cost}</h3>
</div>
`
      )
    );
});

Doms.Mag.addEventListener("click", () => {
  (Doms.items.innerHTML = ""),
    Monkeys.filter(isMag).forEach((el) =>
      Doms.items.insertAdjacentHTML(
        "afterbegin",
        `
<div class="card">
<h2 class="item">${el.name}</h2>
<img class="monkey" src="${el.img}"/>
</br>
<h2 class="class">${el.class}</h2>
<h3 class="cost">$:${el.cost}</h3>
</div>
`
      )
    );
});

Doms.Mil.addEventListener("click", () => {
  (Doms.items.innerHTML = ""),
    Monkeys.filter(isMil).forEach((el) =>
      Doms.items.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="card">
    <h2 class="item">${el.name}</h2>
    <img class="monkey" src="${el.img}"/>
    </br>
    <h2 class="class">${el.class}</h2>
    <h3 class="cost">$:${el.cost}</h3>
    </div>
    `
      )
    );
});

Doms.Pri.addEventListener("click", () => {
  (Doms.items.innerHTML = ""),
    Monkeys.filter(isPri).forEach((el) =>
      Doms.items.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="card">
    <h2 class="item">${el.name}</h2>
    <img class="monkey" src="${el.img}"/>
    </br>
    <h2 class="class">${el.class}</h2>
    <h3 class="cost">$:${el.cost}</h3>
    </div>
    `
      )
    );
});

Monkeys.forEach((el) => {
  Doms.items.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card">
    <h2 class="item">${el.name}</h2>
    <img class="monkey" src="${el.img}"/>
    </br>
    <h2 class="class">${el.class}</h2>
    <h3 class="cost">$:${el.cost}</h3>
    </div>
    `
  );
});
