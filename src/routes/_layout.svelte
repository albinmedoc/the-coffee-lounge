<script>
	import Notifications from 'svelte-notifications';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<Notifications>
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>

	<Footer/>
</Notifications>