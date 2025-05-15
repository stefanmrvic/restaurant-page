import "./styles.css";
import { generateHome } from "./pages/home";
import { generateMenu } from "./pages/menu";
import { generateContact } from "./pages/contact";

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

generateHome();

home.addEventListener('click', generateHome);
menu.addEventListener('click', generateMenu);
contact.addEventListener('click', generateContact);