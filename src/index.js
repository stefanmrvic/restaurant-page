import "./styles.css";
import { generateHome } from "./pages/home";
import { generateMenu } from "./pages/menu";
import { generateContact } from "./pages/contact";
import { clearChildren } from "./utils/dom";

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

loadHomePage();

home.addEventListener('click', loadHomePage);
menu.addEventListener('click', loadMenuPage);
contact.addEventListener('click', loadContactPage);

function loadHomePage() {
    clearChildren();
    generateHome();
}

function loadMenuPage() {
    clearChildren();
    generateMenu();
}

function loadContactPage() {
    clearChildren();
    generateContact();
}