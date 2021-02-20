<style>
    .info-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90vh;
        min-height: 90vh;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .info-container.company-lunch {
        background-image: url('/images/company.png');
    }

    .info-container.take-away {
        background-image: url('/images/girl.png');
    }

    .info-container > div, .info-container > a {
        background: rgba(0, 0, 0, 0.8);
        width: 90%;
        max-width: 420px;
        height: 30vh;
        text-align: center;
        text-decoration: none;
    }

    .info-container > a:hover {
        background: rgba(0, 0, 0, 0.7);
    }

    .info-container > div > h4, .info-container > a > h4 {
        font-weight: 700;
        font-size: 1.8rem;
    }

    .meny-container {
        margin: 50px 0;
    }

    .meny-container > .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .meny-container > .row > div {
        margin-top: 15px;
        height: 350px;
        width: calc(50% - 30px);

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-origin: content-box;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .food-container {
        background-image: url('/images/food.png');
    }

    .drink-container {
        background-image: url('/images/drink.png');
    }

    .dessert-container {
        background-image: url('/images/dessert.png');
    }

    .ice-cream-container {
        background-image: url('/images/ice-cream.png');
    }

    .meny-container > .row > div > a {
        background: rgba(0, 0, 0, 0.8);
        width: 10rem;
        height: 10rem;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .meny-container > .row > div > a:hover {
        background: rgba(0, 0, 0, 0.7);
    }

    .meny-container > .row > div > a > h4 {
        font-size: 2rem;
    }

    @media (max-width: 800px) {
        .meny-container > .row > div {
            width: 100%;
        }
    }
</style>

<svelte:head>
    <title>The Coffee Lounge</title>
</svelte:head>

<!-- <section class="info-container company-lunch">
    <a href="/lunch-foretag">
        <h4>
            Företagslunch
        </h4>
        <h4>
            Klicka för att
            <br>
            beställa.
        </h4>
    </a>
</section> -->

<section class="info-container company-lunch">
    <a href="/lunch-bestall">
        <h4>
            Lunch
        </h4>
        <h4>
            Klicka för att
            <br>
            beställa hem.
        </h4>
    </a>
</section>

<section class="meny-container">
    <div class="row">
        <div class="food-container">
            <a href="/mat">
                <h4>Mat</h4>
            </a>
        </div>
        <div class="drink-container">
            <a href="/dryck">
                <h4>Dryck</h4>
            </a>
        </div>
    </div>
    <div class="row">
        <div class="dessert-container">
            <a href="/fika">
                <h4>Fika</h4>
            </a>
        </div>
        <div class="ice-cream-container">
            <a href="/glass">
                <h4>Glass</h4>
            </a>
        </div>
    </div>
</section>

<section class="info-container take-away">
    <div>
        <h4>The Coffee Lounge</h4>
        <h4>
            Take Away
            <br />
            076-0047267
        </h4>
    </div>
</section>
