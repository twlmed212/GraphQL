import { P } from "../main.js";
import { GridPaint } from "./gridPaint.js";
import { byteToKb, svgElement } from "./SVGClass.js";

export function Generate_Audit_Ratio_Graph(){
//---------------------------------------------------------------//
//                   Audit Pass/Fail Ratio Graph                 //
//---------------------------------------------------------------//
    const TotalUp = P.user.data.profile[0].totalUp
    const TotalDown = P.user.data.profile[0].totalDown
    const AuditRatio = (P.user.data.profile[0].auditRatio).toFixed(1)
    const circumfrenceUP = (2 * Math.PI) * 25
    const circumfrenceDown = (2 * Math.PI) * 25
    // 187 157

    const isUpBig = TotalUp > TotalDown 

    const Up = isUpBig ? circumfrenceUP  : circumfrenceUP - ((((TotalDown * 100) / TotalUp) - 100) * circumfrenceUP) / 100
    const Down = !isUpBig ? circumfrenceDown : circumfrenceDown - ((((TotalUp * 100) / TotalDown) - 100) * circumfrenceDown) / 100
    const DownPercente = isUpBig ?  Math.abs((((TotalDown * 100) / TotalUp))).toFixed(0) :  Math.abs((((TotalUp * 100) / TotalDown))).toFixed(0)

    // Debug values
    console.log("Debug - TotalUp:", TotalUp)
    console.log("Debug - TotalDown:", TotalDown)
    console.log("Debug - AuditRatio:", AuditRatio)
    console.log("Debug - circumfrenceUP:", circumfrenceUP)
    console.log("Debug - circumfrenceDown:", circumfrenceDown)
    console.log("Debug - isUpBig:", isUpBig)
    console.log("Debug - Up:", Up)
    console.log("Debug - Down:", Down)
    console.log("Debug - DownPercente:", DownPercente)
    // Create SVG Element
    const ratioCircle = new svgElement("200", "100")
    // Draw Circles :D

    if(isUpBig){
        ratioCircle.addCircle("25", "50", "45", "CircleUp", circumfrenceUP - Up, `${circumfrenceUP}`)
        ratioCircle.addCircle("25", "50", "45", "CircleDown", circumfrenceDown - Down, `${circumfrenceDown}`)
    }else{
        ratioCircle.addCircle("25", "50", "45", "CircleDown", circumfrenceDown - Down, `${circumfrenceDown}`)
        ratioCircle.addCircle("25", "50", "45", "CircleUp", circumfrenceUP - Up, `${circumfrenceUP}`)
    }
    // Draw Rectangles as Background and add text :D
    ratioCircle.addRectange(80, 25, 43, 10, 1,  "DoneRect"); // Background
    ratioCircle.addText(82, 31, `Done: ${byteToKb(TotalUp)}`, "white", "DoneText"); // textValues 
    
    // Draw Rectangles as Background and add text :D
    ratioCircle.addRectange(80, 40, 43, 10, 1,"ReciveRect"); // Background
    ratioCircle.addText(82, 46.5,`Received: ${byteToKb(TotalDown)}`, "white", "ReciveText"); // textValues
    
    // Percent of Progress of Yellow Circle Total Recived Audits
    ratioCircle.addText(42, 48, `${DownPercente}%`, "black", `${isUpBig ? "DownPercent" : "UPPercent"}`); // textValues


    ratioCircle.addRectange(80, 55, 43, 10, 1,"RatioRect"); // Background
    ratioCircle.addText(82, 61.5,`Ratio: ${AuditRatio}`, "white", "TotalRatio"); // textValues of Total Ratio

    // This GridPaint Helps when drawing on svg file
    GridPaint(ratioCircle)
    // Then render everything into DOM
    ratioCircle.render(1)

}