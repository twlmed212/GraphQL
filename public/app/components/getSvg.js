export function getSvg(){
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svgElement.width = 500
    svgElement.height = 300
    svg
}

export class SvgElement {
    constructor(name, type) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", type || "svg");
        this.element.setAttribute("name", name || "");
    }
    addClass(className) {
        this.element.classList.add(className);
    }
    getElement() {
        return this.element;
    }
}