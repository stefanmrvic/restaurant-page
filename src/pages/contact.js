import { createElement } from "../utils/dom";

export function generateContact() {
    const divContent = document.getElementById('content');

    const divPageName = createElement("div", "page-name");
    const h1PageHeading = createElement("h1", "page-heading", "Working Hours!");

    divPageName.append(h1PageHeading);

    const divContactIntro = createElement("div", "contact__intro");
    const h2ContactIntroHeading = createElement("h2", "contact__intro__heading", "These are our working hours, homie.");
    const pContactIntroText = createElement("p", "contact__intro__text", "If you're wondering if you should pull up or not, that's a sign that you definitely should, homie.");

    divContactIntro.append(h2ContactIntroHeading, pContactIntroText);
    
    const ul = document.createElement("ul");
    
    const liMonday = createElement("li", "contact__hours__day", "Monday: Ask yo momma");
    const liTuesday = createElement("li", "contact__hours__day", "Tuesday: Ask yo momma");
    const liWednesday = createElement("li", "contact__hours__day", "Wednesday: Ask yo momma");
    const liThursday = createElement("li", "contact__hours__day", "Thursday: Ask yo momma");
    const liFriday = createElement("li", "contact__hours__day", "Friday: Ask yo momma");
    const liSaturday = createElement("li", "contact__hours__day", "Saturday: Ask yo momma");
    const liSunday = createElement("li", "contact__hours__day", "Sunday: Ask yo momma");
    
    ul.append(liMonday, liTuesday, liWednesday, liThursday, liFriday, liSaturday, liSunday);
    divContactIntro.append(ul);
    
    const divContactLocation = createElement("div", "contact__location");
    const h2ContactLocationHeadline = createElement("h2", "contact__location__headline", "Location");
    const pContactLocationText = createElement("p", "contact__location__text", "You already know man, stop fooling around!");
    
    divContactLocation.append(h2ContactLocationHeadline, pContactLocationText);
    divContent.append(divPageName, divContactIntro, divContactLocation);
}