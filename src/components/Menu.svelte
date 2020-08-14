<script>
    export let images;
</script>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    div > img {
        width: calc(50% - 30px);
        max-width: 650px;
        margin: 30px 0;
    }

    @media (max-width: 800px) {
        div > img {
            width: 500px;
            max-width: 100%;
        }
    }
</style>

<div>
    {#each images as image}
        <img src={image.src} alt={image.alt} />
    {/each}
</div>
