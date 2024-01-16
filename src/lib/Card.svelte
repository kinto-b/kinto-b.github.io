<script>
    export let title;
    export let titleLink = "";
</script>

<div class="flex-container">
    <div class="flex-column" style="align-items: end;">
        {#if titleLink === ""}
            <h1>{title}</h1>
        {:else}
            <h1><a href={titleLink}>{title}</a></h1>
        {/if}
    </div>
    <div class="flex-column">
        <slot/>
    </div>
</div>

<style>
    .flex-container {
        display: flex;
        justify-content: center;
        height: 100vh;
    }

    .flex-column {
        padding: 2rem;
        width:25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto 0 auto 0;
    }
</style>