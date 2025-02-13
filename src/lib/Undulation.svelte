<script>
    export let canvas_width;
    export let canvas_height;

    import { bezierPath, bezierUpdate } from "$lib/bezier.js";
    let bezier1 = { M: [10, 10], C: [100, 200, 0, 20, 600, 300] };
    let bezier2 = { M: [200, 100], C: [300, 0, 100, 20, 600, 10] };
    let bezier3 = { M: [120, 400], C: [400, 0, 10, 200, 100, 200] };
    let bezier4 = { M: [300, 200], C: [400, 0, 100, 200, 300, 100] };

    let t = 0;
    setInterval(function () {
        t++;
    }, 25);

    $: path1 = bezierPath(
        bezierUpdate(bezier1, t / 100, [1, -1], [0, -0.1, 0, 0, -1, -0.5]),
    );
    $: path2 = bezierPath(
        bezierUpdate(bezier2, t / 100, [0.2, 1], [0, -0.1, 0, 0, -0.5, -0.1]),
    );
    $: path3 = bezierPath(
        bezierUpdate(bezier3, t / 100, [0.2, 1], [0, -0.1, 0, 0, -0.5, -0.5]),
    );
    $: path4 = bezierPath(
        bezierUpdate(bezier4, t / 100, [-0.2, -0.1], [0, 0, 0, 0.1, 1, -0.1]),
    );
</script>

<div class="canvas">
    <svg width={canvas_width} height={canvas_height} viewBox="0 -200 100 800">
        <path d={path1} stroke="#66753C" stroke-width="2" fill="transparent" />
        <path
            d={path2}
            stroke="#D7AF11"
            stroke-width="1.2"
            fill="transparent"
        />
        <path d={path3} stroke="#BF3324" stroke-width="1" fill="transparent" />
        <path
            d={path4}
            stroke="#8C4237"
            stroke-width="1.5"
            fill="transparent"
        />
    </svg>
</div>

<style>
    .canvas {
        padding: 50px 0;
    }
</style>
