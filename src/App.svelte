<script>
	import {Router} from 'svelte-router-spa';
	import {routes} from './routes';
</script>

<Router {routes} />

<style>
	:global(body) {
		background-color: #232323;
		color: #c8c8c8;
	}
</style>