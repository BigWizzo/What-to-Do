import "./scss/styles.scss";
import tabs from "./components/main";

function component() {
    const element = document.querySelector('#content');
  
    element.innerHTML = tabs();
    return element;
}
  
component();