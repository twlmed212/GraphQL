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

    const max = Math.max(TotalUp, TotalDown);
    const Up = 170 * (TotalUp / max);
    const Down = 170 * (TotalDown / max);
    // Create SVG Element
    const ratioCircle = new svgElement("200", "100")
    
    ratioCircle.addRectange(10, 35, Up, 7, 1,  "DoneRect"); // Background
    ratioCircle.addRectange(10, 50, Down, 7, 1,  "ReciveRect"); // Background

    ratioCircle.addText(12, 40, `Done: ${byteToKb(TotalUp)}`, "white", "DoneText"); // textValues 
    ratioCircle.addText(12, 55,`Received: ${byteToKb(TotalDown)}`, "#5c5205", "ReciveText"); // textValues
    let className = ""
    if (AuditRatio < 0.8){
        className = "WarningText"
    }else if (AuditRatio < 1.2){
        className = "OrangeText"
    }else if (AuditRatio >= 1.2){
        className = "GreenText"
    }
    ratioCircle.addRectange(0, 0, 200, 20, 1,className); // Background
    ratioCircle.addText(70, 13,`Total ratio: ${AuditRatio}`, "white", "TotalRatio"); // textValues of Total Ratio

    // This GridPaint Helps when drawing on svg file
    GridPaint(ratioCircle)
    // Then render everything into DOM
    ratioCircle.render(1)

}