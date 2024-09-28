<script>
    export let title;
    export let color;
</script>

<header style="color: {color}">
    <h1>{title}</h1>
    <p><em><slot /></em></p>
</header>
