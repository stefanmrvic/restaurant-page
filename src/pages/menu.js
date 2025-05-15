import { clearChildren, createElement } from "../utils/dom.js";

export function generateMenu() {
    clearChildren();

    const divContent = document.getElementById('content');

    const divPageName = createElement("div", "page-name");
    const h1PageHeading = createElement("h1", "page-heading", "Menu");

    divPageName.append(h1PageHeading);

    const divMenuIntro = createElement("div", "menu__intro");
    const h2MenuIntroHeading = createElement("h2", "menu__intro__heading", "This is just a Menu...");
    const pMenuIntroText = createElement("p", "menu__intro__text", "Very delicious menu tho... Where you can eat all that you can while you can unless you can't.");

    divMenuIntro.append(h2MenuIntroHeading, pMenuIntroText);
    
    const divMenuHours = createElement("div", "menu__hours");
    const h2MenuHoursHeading = createElement("h2", "menu__hours__heading", "Something something");
    
    const ul = document.createElement("ul");
    
    const liMonday = createElement("li", "menu__hours__day", "Not working");
    const liTuesday = createElement("li", "menu__hours__day", "Not working");
    const liWednesday = createElement("li", "menu__hours__day", "Not working");
    const liThursday = createElement("li", "menu__hours__day", "Not working");
    const liFriday = createElement("li", "menu__hours__day", "Not working");
    const liSaturday = createElement("li", "menu__hours__day", "Not working");
    const liSunday = createElement("li", "menu__hours__day", "Not working");
    
    ul.append(liMonday, liTuesday, liWednesday, liThursday, liFriday, liSaturday, liSunday);
    divMenuHours.append(h2MenuHoursHeading, ul);
    
    const divMenuLocation = createElement("div", "menu__location");
    const h2MenuLocationHeadline = createElement("h2", "menu__location__headline", "Location");
    const pMenuLocationText = createElement("p", "menu__location__text", "Space Station - Mars");
    
    divMenuLocation.append(h2MenuLocationHeadline, pMenuLocationText);

    divContent.append(divPageName, divMenuIntro, divMenuHours, divMenuLocation);
}