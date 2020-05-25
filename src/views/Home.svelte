<script>
    import ToolsList from '../components/ToolsList.svelte';
</script>

<section>
    <article>
        <h1>Herzlich Willkommen!</h1>
        <p>
            Auf dieser Webseite werden Ihnen mehrere Programme und Tools zum Thema Online-Konferenzen aufgelistet und vorgestellt.<br>
            Hier finden Sie detaillierte Beschreibungen, Vergleiche und Anleitungen zu den verschiedenen Tools.
            Klicken Sie auf den Namen eines Programmes oder den Info-Button daneben, um eine genauere Beschreibung zu erhalten.
        </p>
    </article>
    <div class="tools-list">
        <ToolsList />
    </div>
</section>

<style>
    h1 {
        color: #80f9ff;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
        margin-top: 20px;
    }

    @media(max-width: 450px) {
        h1 {
            font-size: 3em;
        }
    }
    @media(max-width: 350px) {
        h1 {
            font-size: 2em;
        }
    }
    article {
        margin-bottom: 75px;
        text-align: center;
    }
    @media(min-width: 1130px) {
        .tools-list {
            margin: 0 50px;
        }
    }
    section {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
    p {
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
    }
</style>