<script>
    import SubHeader from '../components/SubHeader.svelte';
    import Menu from '../components/Menu.svelte';

    let images = [
        {
            src: '/images/menus/food-1.png',
            alt: 'Matmeny 1',
        },
        {
            src: '/images/menus/food-2.png',
            alt: 'Matmeny 2',
        },
    ];
</script>

<svelte:head>
    <title>Mat - The Coffee Lounge</title>
</svelte:head>

<SubHeader
    title="Matmeny"
    description="Lunch alla dagar mellan kl. 11-14, 79kr (inkl. bryggkaffe)." />
<Menu {images} />
