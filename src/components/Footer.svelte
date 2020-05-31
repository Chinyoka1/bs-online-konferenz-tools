<script>
import {navigateTo} from 'svelte-router-spa';
</script>

<footer>
	<nav>
		<button
				tabindex="2"
				on:click={() => navigateTo('/impressum')}
		>
			<i class="fa fa-address-book"></i> Impressum
		</button>
		<button
				tabindex="3"
				on:click={() => navigateTo('/datenschutzerklaerung')}
		>
			<i class="fa fa-user-shield"></i> Datenschutzerklärung
		</button>
        <button 
            tabindex="4"
            on:click={() => {window.scroll(0,0)}}
        >
            <i class="fa fa-arrow-up"></i>
        </button>
	</nav>
</footer>

<style>
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
        font-size: large;
		margin-left: 20px;
		cursor: pointer;
	}
</style>