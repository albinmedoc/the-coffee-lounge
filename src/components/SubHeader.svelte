<script>
    export let title = undefined;
    export let description = undefined;
</script>

<style>
    section {
        text-align: center;
    }

    section > h3 {
        font-size: 3rem;
        margin: 10px 0;
    }

    section > p {
        font-size: 1rem;
    }
</style>

<section>
    {#if title}
        <h3>{title}</h3>
    {/if}
    {#if description}
        <p>{description}</p>
    {/if}
</section>
