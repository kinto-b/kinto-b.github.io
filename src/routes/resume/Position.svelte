<script>
    export let title;
    export let org;
    export let tenure;
</script>

<div class = "position">
    <h3>{title}</h3>
    <h4>{org} | {tenure}</h4>
    <div>
        <slot/>
    </div>
</div>

<style>
    .position {
        margin-bottom: 1.5rem;
    }

    h3 {
        margin-bottom: 0.25rem;
    }

    h4 {
        font-weight: 400;
        margin-bottom: 0px;
        margin-top: 0;
        color: #777;
    }
</style>