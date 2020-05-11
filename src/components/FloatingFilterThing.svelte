<script>
    export let sortBy;
    let options = [
        {value: 'min-price-per-month', text: 'geringstem Mindestpreis', id: 1},
        {value: 'max-participants', text: 'maximaler Teilnehmerzahl', id: 2},
        {value: 'free-option', text: 'nur mit kostenloser Option', id: 3},
        {value: 'large-meeting', text: 'min. 100 Teilnehmer', id: 4}
    ];
</script>

<div class="card floater">
    <label>Sortieren nach:</label>
    <select bind:value="{sortBy}">
        {#each options as option (option.id)}
            <option id="{option.id}" value="{option.value}">
                {option.text}
            </option>
        {/each}
    </select>
</div>

<style>
    .floater {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4b4b4b;
        padding: 5px;
    }
</style>