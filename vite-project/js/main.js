import { Doms } from "./doms";
import { Monkeys } from "./arrays";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

console.log(Doms);
console.log(Monkeys);

function baseMonkeys() {
  Monkeys.forEach((el) => {
    Doms.items.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="card">
    <h2 class="item">${el.name}</h2>
    <img class="monkey" src="${el.img}/>
    <<h2 class="class">${el.class}</h2>
    <h3 class="cost">${el.cost}</h3>
    </div>`
    );
  });
}
