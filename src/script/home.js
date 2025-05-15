import { clearPage } from "../index.js"

function createElement(ele, className = null, text = null) {
    const element = document.createElement(ele);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
   
    return element;
}


export function generateHome() {
    clearPage();

    const divContent = document.getElementById('content');

    const divPageName = createElement("div", "page-name");
    const h1PageHeading = createElement("h1", "page-heading", "Pixel Ramen Shack");

    divPageName.append(h1PageHeading);

    const divHomeIntro = createElement("div", "home__intro");
    const h2HomeIntroHeading = createElement("h2", "home__intro__heading", "🍜 Welcome to Pixel Ramen Shack!");
    const pHomeIntroText = createElement("p", "home__intro__text", "Pull up a pixelated stool and enjoy a warm bowl of code, creativity, and noodles. At the Pixel Ramen Shack, every byte is hand-crafted, every line of code is seasoned to perfection. Whether you're here to explore tasty front-end projects or just vibe with the retro noodle aesthetic — there's always a seat waiting for you.");

    divHomeIntro.append(h2HomeIntroHeading, pHomeIntroText);
    
    const divHomeHours = createElement("div", "home__hours");
    const h2HomeHoursHeading = createElement("h2", "home__hours__heading", "Working Hours");
    
    const ul = document.createElement("ul");
    
    const liMonday = createElement("li", "home__hours__day", "Monday: 8am - 10pm");
    const liTuesday = createElement("li", "home__hours__day", "Tuesday: 8am - 10pm");
    const liWednesday = createElement("li", "home__hours__day", "Wednesday: 8am - 10pm");
    const liThursday = createElement("li", "home__hours__day", "Thursday: 8am - 10pm");
    const liFriday = createElement("li", "home__hours__day", "Friday: 8am - 10pm");
    const liSaturday = createElement("li", "home__hours__day", "Saturday: 8am - 10pm");
    const liSunday = createElement("li", "home__hours__day", "Sunday: 8am - 10pm");
    
    ul.append(liMonday, liTuesday, liWednesday, liThursday, liFriday, liSaturday, liSunday);
    divHomeHours.append(h2HomeHoursHeading, ul);
    
    const divHomeLocation = createElement("div", "home__location");
    const h2HomeLocationHeadline = createElement("h2", "home__location__headline", "Location");
    const pHomeLocationText = createElement("p", "home__location__text", "21 West 52nd Street");
    
    divHomeLocation.append(h2HomeLocationHeadline, pHomeLocationText);

    divContent.append(divPageName, divHomeIntro, divHomeHours, divHomeLocation);
}