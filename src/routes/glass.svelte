<script>
    import SubHeader from '../components/SubHeader.svelte';
    import Menu from '../components/Menu.svelte';

    let images = [
        {
            src: '/images/menus/ice-cream.png',
            alt: 'Glassmeny',
        },
    ];
</script>

<svelte:head>
    <title>Glass - The Coffee Lounge</title>
</svelte:head>

<SubHeader
    title="Glassmeny" />
<Menu {images} />
