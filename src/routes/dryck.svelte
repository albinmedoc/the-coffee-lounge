<script>
    import SubHeader from '../components/SubHeader.svelte';
    import Menu from '../components/Menu.svelte';

    let images = [
        {
            src: '/images/menus/drinks-1.png',
            alt: 'Dryckmeny 1',
        },
        {
            src: '/images/menus/drinks-2.png',
            alt: 'Dryckmeny 2',
        },
    ];
</script>

<svelte:head>
    <title>Dryck - The Coffee Lounge</title>
</svelte:head>

<SubHeader
    title="Dryckmeny" />
<Menu {images} />
