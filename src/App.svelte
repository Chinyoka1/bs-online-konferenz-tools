<script>
    import Home from './views/Home.svelte';
	export let tools;
</script>

<main>
    <Home tools={tools} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #80f9ff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		margin-bottom: 75px;
	}

	:global(body) {
		background-color: #232323;
		color: #c8c8c8;
	}
</style>