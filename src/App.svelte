<script>
	import {Router, navigateTo} from 'svelte-router-spa';
	import {routes} from './routes';
	import Footer from './components/Footer.svelte';
</script>

<nav class="top-nav">
	<button
			tabindex="1"
			class="home-heading"
			on:click={() => navigateTo('/')}
	>
		<i class="fa fa-home"></i> Home
	</button>
</nav>
<main>
	<Router {routes} />
</main>
<Footer/>

<style>
	.top-nav {
		padding-left: 25px;
		padding-top: 15px;
	}
	.home-heading {
		font-size: x-large;
		cursor: pointer;
		padding: 5px;
		border-radius: 5px;
	}
	.home-heading:hover {
		background-color: #343434;
	}
	:global(body) {
		background-color: #232323;
		color: #c8c8c8;
	}
	button {
		background: none;
		border: none;
		color: inherit;
	}
</style>