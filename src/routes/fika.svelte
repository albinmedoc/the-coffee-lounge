<script>
    import SubHeader from '../components/SubHeader.svelte';
    import Menu from '../components/Menu.svelte';

    let images = [
        {
            src: '/images/menus/dessert.png',
            alt: 'Fikameny',
        },
    ];
</script>

<svelte:head>
    <title>Fika - The Coffee Lounge</title>
</svelte:head>

<SubHeader
    title="Fikameny" />
<Menu {images} />
