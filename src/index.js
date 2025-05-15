import "./styles.css";
import { generateHome } from "./script/home";

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

home.addEventListener('click', generateHome);
// menu.addEventListener('click', generateMenu);
// contact.addEventListener('click', generateContact);

export function clearPage() {
    const contentDiv = document.getElementById('content');

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
}