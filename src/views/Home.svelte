<script>
    import ToolsList from '../components/ToolsList.svelte';
    export let currentRoute;
    export let params;
</script>

<main>
    <h1>Herzlich Willkommen!</h1>
    <p>
        Auf dieser Webseite werden Ihnen mehrere Programme und Tools zum Thema Online-Konferenzen vorgestellt.<br>
        Hier finden Sie detaillierte Beschreibungen, Vergleiche und Anleitungen zu den verschiedenen Tools.
    </p>
    <ToolsList />
</main>

<style>
    h1 {
        color: #80f9ff;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
    p {
        margin-bottom: 75px;
    }
</style>