<script>
    import HamburgerButton from './HamburgerButton.svelte';
	export let segment;
	
	let active = false;
</script>

<style>
    header {
        background-color: #000;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 164px;
        padding: 0 32px;
    }

    .logo {
        width: 100px;
    }

    nav {
        /* 100% - logo_size */
        width: calc(100% - 100px);
        z-index: 10;
    }

    nav > :global(button) {
        display: none;
    }

    nav > ul {
        margin: 0;
        padding: 0;
        height: 100%;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
    }

    nav > ul > li > a {
        text-decoration: none;
        font-size: 1.5rem;
        color: #b5b5b5;
    }

    [aria-current] {
        position: relative;
        display: inline-block;
    }

    [aria-current]::after {
        position: absolute;
        content: '';
        width: 100%;
		height: 2px;
		border-radius: 1px;
        background-color: #b5b5b5;
        display: block;
        bottom: -1px;
    }

    @media (max-width: 800px) {
        nav {
            position: absolute;
            width: 100vw;
            height: calc(100vh - 164px);
            top: 164px;
            left: 0;
        }

        nav > :global(button) {
            display: block;
            position: absolute;
            top: -100px;
            right: 32px;
        }

        nav > ul {
            display: none;
        }

        nav.is-active > ul {
            display: block !important;
            background-color: #000;
        }

        nav > ul > li > a {
            font-size: 2rem;
        }
    }
</style>

<header>
    <a href=".">
        <img
            class="logo"
            src="/images/logo.png"
            alt="The Coffee Lounge"
            title="Startsida" />
    </a>
    <nav class="{active ? 'is-active' : ''}">
		<HamburgerButton bind:active={active} />
        <ul>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === undefined ? 'page' : undefined}
                    href="mat">
                    Mat
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'dryck' ? 'page' : undefined}
                    href="dryck">
                    Dryck
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'fika' ? 'page' : undefined}
                    href="fika">
                    Fika
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'glass' ? 'page' : undefined}
                    href="glass">
                    Glass
                </a>
            </li>
            <li>
                <a
                    aria-current={segment === 'kontakt' ? 'page' : undefined}
                    href="kontakt">
                    Kontakt
                </a>
            </li>
        </ul>
    </nav>
</header>
