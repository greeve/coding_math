window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * 0.5,
        centerX = width * 0.5,
        baseRadius = 100,
        baseAlpha = 0.5,
        offset = 0.5,
        speed = 0.1,
        angle = 0;

    // move();
    // blink();
    grow();

    function move() {
        var y = centerY + Math.sin(angle) * (offset * height);
        context.fillStyle = "rgba(0, 0, 255, 0.5)";
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, y, 50, 0, Math.PI * 2, false);
        context.fill();
        angle += speed;
        requestAnimationFrame(move);
    };

    function blink() {
        var alpha = baseAlpha + Math.sin(angle) * offset;
        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
        context.fill();
        angle += speed;
        requestAnimationFrame(blink);
    };

    function grow() {
        var radius = baseRadius + Math.sin(angle) * (offset + 45.5);
        context.fillStyle = "rgba(0, 150, 0, 0.75)";
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        context.fill();
        angle += speed;
        requestAnimationFrame(grow);
    }
}
