
let x = 70;
let y = 80;
curves = [
        [68, 75, 75, 69, 80, 70],
        [87, 77, 88, 83, 90, 90],
        [95, 92, 105, 92, 110, 90],
        [115, 80, 128, 63, 135, 85],
        [150, 84, 160, 83, 180, 100],
        [194, 90, 194, 72, 180, 60],
        [177, 50, 187, 43, 200, 60],
        [214, 77, 214, 90, 190, 125],
        [190, 130, 185, 137, 187, 150],
        [190, 175, 190, 180, 160, 200],
        [147, 220, 140, 240, 140, 250],
        [140, 250, 135, 255, 130, 260],
        [133, 268, 112, 278, 110, 273],
        [100, 280, 108, 268, 120, 260],
        [115, 250, 130, 235, 135, 220],
        //
        [135, 195, 128, 192, 120, 191],
        [100, 190, 91, 220, 90, 240],
        [92, 260, 81, 281, 80, 277],
        [68, 273, 70, 270, 78, 243],
        [65, 235, 95, 219, 73, 180],

        [65, 179, 63, 170, 60, 160],
        [50, 142, 50, 137, 70, 123],
        //
        [75, 109, 78, 103, 80, 100],
        [78, 90, 73, 88, 70, 80],
        ];

const form = document.getElementById("form");
for(let i =0; i < curves.length; i++){
        let curve = curves[i];
        let e = document.createElement('div');
        e.innerHTML = `
<input class="form-control" type="number" value=${curve[0]} />
<input class="form-control" type="number" value=${curve[1]} />
<input class="form-control" type="number" value=${curve[2]} />
<input class="form-control" type="number" value=${curve[3]} />
<input class="form-control" type="number" value=${curve[4]} />
<input class="form-control" type="number" value=${curve[5]} />
`;

        form.appendChild(e)
}

    function draw(curves, startCoords) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
            ctx.lineWidth = 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(startCoords.x, startCoords.y);

            curves.forEach(curve => {
                    ctx.bezierCurveTo(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5]);
            });

            /* ctx.beginPath();
             x.moveTo(70, 80);
             //
             ctx.bezierCurveTo(68, 75, 75, 69, 80, 70);
             ctx.bezierCurveTo(87, 77, 88, 83, 90, 90);
             ctx.bezierCurveTo(95, 92, 105, 92, 110, 90);
             ctx.bezierCurveTo(115, 80, 128, 63, 135, 85);
             //
             ctx.bezierCurveTo(150, 84, 160, 83, 180, 100);
             //
             ctx.bezierCurveTo(194, 90, 194, 72, 180, 60);
             ctx.bezierCurveTo(177, 50, 187, 43, 200, 60);
             ctx.bezierCurveTo(214, 77, 214, 90, 190, 125);
             //
             ctx.bezierCurveTo(190, 130, 185, 137, 187, 150);
             ctx.bezierCurveTo(190, 175, 190, 180, 160, 200);
             ctx.bezierCurveTo(147, 220, 140, 240, 140, 250);
             ctx.bezierCurveTo(140, 250, 135, 255, 130, 260);
             ctx.bezierCurveTo(133, 268, 112, 278, 110, 273);
             ctx.bezierCurveTo(100, 280, 108, 268, 120, 260);
             ctx.bezierCurveTo(115, 250, 130, 235, 135, 220);
             //
             ctx.bezierCurveTo(135, 195, 128, 192, 120, 191);
             ctx.bezierCurveTo(100, 190, 91, 220, 90, 240);
             ctx.bezierCurveTo(92, 260, 81, 281, 80, 277);
             ctx.bezierCurveTo(68, 273, 70, 270, 78, 243);
             ctx.bezierCurveTo(65, 235, 95, 219, 73, 180);

             ctx.bezierCurveTo(65, 179, 63, 170, 60, 160);
             ctx.bezierCurveTo(50, 142, 50, 137, 70, 123);
             //
             ctx.bezierCurveTo(75, 109, 78, 103, 80, 100);
             ctx.bezierCurveTo(78, 90, 73, 88, 70, 80);*/
                ctx.save();
                ctx.strokeStyle = "rgb(0,0,0)";
                ctx.stroke();

                ctx.restore();
}
draw(curves,{x: x, y: y});

document.getElementById('form').addEventListener('change',() => {

        for (let i = 0; i < form.children.length; i++) {
                for(let j = 0; j < form.children[i].children.length; j++){
                        curves[i][j] = form.children[i].children[j].value;
                }

        }

        draw(curves,{x: x, y: y});

});




