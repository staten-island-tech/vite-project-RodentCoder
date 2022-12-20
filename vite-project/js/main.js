import { Doms } from "./doms";
import { Monkeys } from "./arrays";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

console.log(Doms);
console.log(Monkeys);



Doms.Mil.addEventListener("click", () => {
  Doms.items.innerHTML = "",
  Monkeys.filter((el) => el.class === "Military").forEach((el) => 
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
  )
});

Doms.Pri.addEventListener("click", () => {
  Doms.items.innerHTML = "",
  Monkeys.filter((el) => el.class === "Primary").forEach((el) => 
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
  )
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
