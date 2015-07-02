window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * 0.5,
        centerX = width * 0.5,
        radius = 200,
        xRadius = 200,
        yRadius = 400,
        speed = 0.1,
        xSpeed = 0.1,
        ySpeed = 0.131,
        angle = 0,
        xAngle = 0,
        yAngle = 0,
        numObjects = 10,
        slice = Math.PI * 2 / numObjects,
        x, y;

    // orbitCircle()
    // orbitEllipse()
    // lissajousCurves()
    circleLayout()

    function orbitCircle() {
        context.clearRect(0, 0, width, height);
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        requestAnimationFrame(orbitCircle);
    }

    function orbitEllipse() {
        context.clearRect(0, 0, width, height);
        x = centerX + Math.cos(angle) * xRadius;
        y = centerY + Math.sin(angle) * yRadius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        requestAnimationFrame(orbitEllipse);
    }

    function lissajousCurves() {
        context.clearRect(0, 0, width, height);
        x = centerX + Math.cos(xAngle) * xRadius;
        y = centerY + Math.sin(yAngle) * yRadius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        xAngle += xSpeed;
        yAngle += ySpeed;
        requestAnimationFrame(lissajousCurves);
    }

    function circleLayout() {
        context.clearRect(0, 0, width, height);
        for (var i = 0; i < numObjects; i += 1) {
            angle = i * slice;
            x = centerX + Math.cos(angle) * radius;
            y = centerY + Math.sin(angle) * radius;
            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.fill();
        }
    }
}
