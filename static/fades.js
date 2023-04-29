function unfade(element) {
    var op = element.style.opacity;  // initial opacity
    if (op < 1) {
        var op = 0.01;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }
}

// Fade in one-by-one
const timer = ms => new Promise(res => setTimeout(res, ms))
async function unfade_all() { // Needs to be async to get await to work
    var fades = document.getElementsByClassName("fade");
    for (var i = 0; i < fades.length; i++) {
        unfade(fades.item(i));
        await timer(400); // Pause before fading in next element
    }
}

document.getElementById("title").onclick = unfade_all


