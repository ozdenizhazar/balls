window.onload = () => {
    const SW = 600;
    const SH = 400;
    const screen = document.createElement("div");
    const stl = {
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
        width: SW + "px",
        height: SH + "px",
        margin: "10px auto",
        border: "solid 4px #fff"
    }

    Object.assign(screen.style, stl);
    document.body.append(screen);
    document.body.style.backgroundColor = "#777";

    const balls = [];
    const count = 20;
    const colors = ["blue", "green", "red", "pink", "cyan", "orange"];
    const gravity = 0.01;

    for (let n = 0; n < count; n++) {
        const ball = document.createElement("div");
        ball.x = Math.round(Math.random() * SW) - 40;
        ball.y = Math.round(Math.random() * SH) - 40;
        ball.sx = 0;
        ball.sy = 0;

        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        const bs = {
            backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
            position: "absolute",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            left: ball.x + "px",
            top: ball.y + "px"
        }
        console.log(bs.backgroundColor);
        Object.assign(ball.style, bs);
        screen.append(ball);
        balls.push(ball);
    }

    setInterval(() => {
        for (ball of balls) {
            if (ball.y >= SH - 10) {
                ball.sy = -ball.sy;
            }
            if (ball.x >= SW - 10) {
                ball.sx = -ball.sx;
            }

            ball.sx += gravity;
            ball.x += ball.sx;
            ball.style.left = ball.x + "px";

            ball.sy += gravity;
            ball.y += ball.sy;
            ball.style.top = ball.y + "px";
        }
    }, 10);
}  