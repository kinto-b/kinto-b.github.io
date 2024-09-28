
export function bezierUpdate(bezier, t, m = [0, 0], c = [0, 0, 0, 0, 0, 0]) {
    bezier["M"][0] = bezier["M"][0] + m[0] * Math.sin(t);
    bezier["M"][1] = bezier["M"][1] + m[1] * Math.cos(t);

    bezier["C"][0] = bezier["C"][0] + c[0] * Math.sin(Math.pow(t, 2));
    bezier["C"][1] = bezier["C"][1] + c[1] * Math.sin(Math.pow(t, 2));
    bezier["C"][2] = bezier["C"][2] + c[2] * Math.cos(Math.pow(t, 3));
    bezier["C"][3] = bezier["C"][3] + c[3] * Math.cos(Math.pow(t, 3));
    bezier["C"][4] = bezier["C"][4] + c[4] * Math.pow(Math.sin(t), 3);
    bezier["C"][5] = bezier["C"][5] + c[5] * Math.pow(Math.sin(t), 2);

    return bezier;
}

export function bezierPath(bezier) {
    let m = bezier["M"].join(" ");
    let c = bezier["C"].join(" ");
    return `M ${m} C ${c}`;
}


export function pathSine() {
    const controls = [[0, 0], [0.5, 0.5], [1, 1], [Math.PI / 2, 1]];

    //Bezier control points:
    //https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Curve_commands
    var controlStart = controls[0],
        control1 = controls[1],
        control2 = controls[2],
        controlEnd = controls[3],
        x, y,
        x1, y1,
        x2, y2,
        quarterX = controlEnd[0],
        startX = -(4 * quarterX),
        negateY = false,
        data;

    function negateYs() {
        if (negateY) { y = -y; y1 = -y1; y2 = -y2; }
    }

    for (x = startX; x < 100;) {
        if (x === startX) {
            y = controlStart[1];
            x1 = x + control1[0];
            y1 = control1[1];

            negateYs();
            data = 'M' + [x, y] + ' C' + [x1, y1] + ' ';
        }
        else {
            //x1/y1 are always "mirrors" of the previous x2/y2,
            //so we can use the simpler "S" syntax instead of a new "C":
            data += ' S'
        }

        //Going from y=0 to y=+-1:
        x2 = x + control2[0];
        y2 = control2[1];
        x += quarterX;
        y = controlEnd[1];
        negateYs();
        data += [x2, y2] + ' ' + [x, y];

        //Going from y=+- back to y=0:
        x2 = (x + quarterX) - control1[0];
        y2 = control1[1];
        x += quarterX;
        y = controlStart[1];
        negateYs();
        data += ' S' + [x2, y2] + ' ' + [x, y];

        negateY = !negateY;
    }

    return data;
}

const rand = (min, max) => (min + Math.random() * (max - min));
