export function clearChildren() {
    const contentDiv = document.getElementById('content');

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
}

export function createElement(ele, className = null, text = null) {
    const element = document.createElement(ele);
    if (text) element.textContent = text;
    if (className) element.classList.add(className);
   
    return element;
}