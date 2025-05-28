import { P } from "../main.js";
import { byteToKb, svgElement } from "./SVGClass.js";
import { GridPaint } from "./gridPaint.js";

export  function Generate_XP_Progrees_Chart() {
    console.log(P);
    
    const ProjectData = P.user.data.projects;
    const chartWidth = 200;
    const chartHeight = 100;
    const offsetY = 10;
    const bottomPadding = 5;
    const totalHeight = chartHeight + offsetY + bottomPadding;

    const PxPerProject = chartWidth / (ProjectData.length - 1);
    const maxXP = ProjectData.reduce((sum, p) => {
        if (p.amount < 0){
            return sum; // Skip negative amounts
        }
        return sum + p.amount
    }, 0);

    const XPChart = new svgElement(chartWidth + 30, totalHeight);
    let PathLine = "M12 " + (offsetY + chartHeight);
    let x = 12;
    let cumulativeXP = 0;
    let circles = []
    ProjectData.forEach((element) => {
        cumulativeXP += element.amount;
        const y = (offsetY + chartHeight - (cumulativeXP / maxXP) * chartHeight).toFixed(2);
        
        PathLine += ` L${x.toFixed(2)} ${y}`;

        const projectName = element.path.split("/").pop();
        const sign = element.amount >= 0 ? "+" : "-";
        const xpAmount = byteToKb(Math.abs(element.amount));
        const date = new Date(element.createdAt);
        const dateLabel = `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear().toString().slice(-2)}`;

        const tooltip = document.createElement("div");
        tooltip.className = "svg-tooltip";
        tooltip.innerHTML = `
            <strong>${projectName}</strong>
            <span style="font-size: 10px; color: #aaa;">${dateLabel}</span><br>
            <strong> ${byteToKb(cumulativeXP)}</strong>
            <span style="font-size: 11px; color: #ccc;">${sign}${xpAmount}</span><br>
        `;

        circles.push({
            r: 2.5,
            cx: x,
            cy: y,
            cls: "xp-point",
            offset: null,
            array: null,
            element: tooltip
        })

        x += PxPerProject;
    });

    XPChart.addPath(PathLine, "XPLinePath");
    circles.forEach(element => {
        const circle = XPChart.addCircle(...Object.values(element))
        circle.addEventListener("mouseenter", function (e) {
            element.element.style.left = e.pageX + 10 + "px";
            element.element.style.top = e.pageY - 20 + "px";
            document.body.appendChild(element.element);
        });

        circle.addEventListener("mouseleave", function () {
            const tooltip = document.querySelector(".svg-tooltip");
            if (tooltip) tooltip.remove();
        });
    })
    GridPaint(XPChart);
    XPChart.render(0);
}