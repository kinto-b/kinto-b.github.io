<script>
    export let title;
    export let description;
</script>
  
<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content="Kinto Behr" />
    <meta property="og:description" content={description} />
    <meta
        property="og:image"
        content="https://kinto-b.github.io/assets/images/simplon-pass.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>