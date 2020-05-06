<script>
	import {Router, navigateTo} from 'svelte-router-spa';
	import {routes} from './routes';
</script>

<div>
	<span class="home-heading" on:click={() => navigateTo('/')}>
		<i class="fa fa-home"></i> Home
	</span>
	<Router {routes} />
</div>

<style>
	.home-heading {
		font-size: x-large;
		padding-left: 20px;
		cursor: pointer;
	}
	:global(body) {
		background-color: #232323;
		color: #c8c8c8;
	}
</style>