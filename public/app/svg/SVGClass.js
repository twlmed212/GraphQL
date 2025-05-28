
const SvgNS  = "http://www.w3.org/2000/svg"


export class svgElement {

    constructor(width, height){
        this.svg = document.createElementNS(SvgNS, "svg");
        this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
    }
    addRectange(x, y, width, height, radius, cls){
        this.rect = document.createElementNS(SvgNS, "rect");
        this.rect.setAttribute("x", x);
        this.rect.setAttribute("y", y);
        this.rect.setAttribute("width", width);
        this.rect.setAttribute("height", height);
        this.rect.setAttribute("rx", radius);
        this.rect.classList.add(cls)
        this.svg.appendChild(this.rect);
    }
    addText(x, y, value, clr, clss){
        this.text = document.createElementNS(SvgNS, "text")
        this.text.textContent = value
        this.text.setAttribute("x", x)
        this.text.setAttribute("y", y)
        this.text.setAttribute("fill", clr)
        this.text.classList.add(clss)
        this.svg.appendChild(this.text);
    }
    addPath(d, cls){
        this.path = document.createElementNS(SvgNS, "path")
        this.path.setAttribute("d", d)
        this.path.classList.add(cls)
        this.svg.appendChild(this.path);
    }
    addCircle(r, cx, cy, cls, offset, array){
        
        this.circle = document.createElementNS(SvgNS, "circle")
        this.circle.setAttribute("r", r)
        this.circle.setAttribute("cx", cx)
        this.circle.setAttribute("cy", cy)
        this.circle.setAttribute("stroke-dashoffset", offset)
        this.circle.setAttribute("stroke-dasharray", array)
        this.circle.classList.add(cls)
        this.svg.appendChild(this.circle);
        return this.circle
    }
    getCircleWidth(){
        return this.circle.getAttribute("r")
    }
    render(index){
        const DataSpace = document.querySelectorAll(".Data")
        DataSpace[index].append(this.svg)
    }
   
  }


  
export function byteToKb(byte){
    if (byte >= 1000000){
      return (byte / 1000000).toFixed(2) + "Mb"
    }else if (byte >= 1000){
      return Math.round(byte / 1000) + "Kb"
    }else{
      return byte + "b"
    }
  }