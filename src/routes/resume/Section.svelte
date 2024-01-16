<script>
    export let title;
</script>

<div class="resume-section">
    <h2>{title}</h2>
    <div style="display:flex;">
        <div class="stub"></div>
    </div>
    <div>
        <slot/>
    </div>
</div>

<style>
    .resume-section {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    .stub {
        float: left;
        background: #797d80;
        height: 10px;
        width: 10%;
        margin-bottom: 1rem;
    }
</style>