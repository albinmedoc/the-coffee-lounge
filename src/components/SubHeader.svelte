<script>
    export let title;
    export let description;
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
    <h3>{title}</h3>
    <p>{description}</p>
</section>
