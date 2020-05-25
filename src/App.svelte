<script>
	import {Router, navigateTo} from 'svelte-router-spa';
	import {routes} from './routes';
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
<footer>
	<nav>
		<button
				tabindex="2"
				class="footer-item"
				on:click={() => navigateTo('/impressum')}
		>
			<i class="fa fa-address-book"></i> Impressum
		</button>
		<button
				tabindex="3"
				class="footer-item"
				on:click={() => navigateTo('/datenschutzerklaerung')}
		>
			<i class="fa fa-user-shield"></i> Datenschutzerklärung
		</button>
	</nav>
</footer>

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
	.footer-item {
		font-size: large;
		margin-left: 20px;
		cursor: pointer;
	}
	:global(body) {
		background-color: #232323;
		color: #c8c8c8;
	}
	footer {
		display: flex;
		justify-content: flex-end;
		padding: 40px;
		background-color: #424242;
		margin-top: auto;
	}
	button {
		background: none;
		border: none;
		color: inherit;
	}
</style>