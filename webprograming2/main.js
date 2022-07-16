function draw() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(0, 141, 213)";
        ctx.strokeStyle = "rgb(0, 141, 213)";
        ctx.strokeRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.moveTo(1000, 0);
        ctx.arc(1000, 0,1000, 90/180*Math.PI, 0);
        ctx.fill();
        ctx.strokeRect(1000, 382, 1618, 618)
        ctx.beginPath();
        ctx.moveTo(1000, 382);
        ctx.arc(1000, 382, 618, 0, 90/180*Math.PI, 0);
        ctx.fill();
        ctx.strokeRect(1236, 0, 1618, 382);
        ctx.beginPath();
        ctx.moveTo(1236, 382);
        ctx.arc(1236, 382, 382, 0, -90/180*Math.PI, 1);
        ctx.fill();
        ctx.strokeRect(1000, 0, 236, 236);
        ctx.beginPath();
        ctx.moveTo(1236, 236);
        ctx.arc(1236, 236, 236, Math.PI, -90/180*Math.PI, 0);
        ctx.fill();
        ctx.strokeRect(1000, 236, 146, 146);
        ctx.beginPath();
        ctx.moveTo(1146, 236);
        ctx.arc(1146, 236, 146, -Math.PI, 90/180*Math.PI, 1);
        ctx.fill();
        ctx.strokeRect(1146, 292, 90, 90);
        ctx.beginPath();
        ctx.moveTo(1146, 292);
        ctx.arc(1146, 292, 90, 90/180*Math.PI, 0*Math.PI, 1);
        ctx.fill();
        ctx.strokeRect(1180, 236, 56, 56);
        ctx.beginPath();
        ctx.moveTo(1180, 292);
        ctx.arc(1180, 292, 56, 0*Math.PI, -90/180*Math.PI, 1);
        ctx.fill();
    }
}

draw();