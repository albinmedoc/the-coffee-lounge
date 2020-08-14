<script>
    import SubHeader from '../components/SubHeader.svelte';
</script>

<style>
    form {
        background-image: url('/images/lounge.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 700px;
        position: relative;
    }

    .info {
        font-size: 25px;
        text-align: center;
        width: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<svelte:head>
    <title>Kontakt - The Coffee Lounge</title>
</svelte:head>

<form>
    <SubHeader title="Kontakta oss" />
    <div class="info">
        <p>
            Vill du komma i kontakt med oss gör du det enklast via email,
            <a href="mailto:info@the-coffeelounge.se">
                info@the-coffeelounge.se
            </a>
            .
        </p>

        <p>
            Under våra öppettider befinner vi oss nere på Caféet och kan besvara
            era frågor på plats.
        </p>

        <p>
            Du hittar oss även på
            <a href="https://www.facebook.com/thecoffeeloungese/">Facebook</a>
            och
            <a href="https://www.instagram.com/thecoffeeloungese/">Instagram</a>
            .
        </p>
    </div>
</form>
