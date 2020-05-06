<script>
    export let color;
    export let packageOption;
</script>

<div class="card package-card" style="background-color: {color}">
    <div class="card-title">
        <div class="heading-2">
            {packageOption.displayName}
        </div>
    </div>
    <div class="card-content">
        <ul class="package-data-list">
            <li>
                <b>Preis pro Monat:</b> {packageOption.pricePerMonth}
            </li>
            <li>
                <b>max. Teilnehmer/Meeting:</b>
                <span>
                                {packageOption.maxParticipants}
                    <i class="fa fa-user"></i>
                            </span>
            </li>
        </ul>
        {#if packageOption.features.length > 0}
            <ul>
                {#each packageOption.features as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
        {/if}
    </div>
</div>

<style>
    @media(min-width: 400px) {
        .package-card {
            margin: 10px;
            min-width: 350px;
        }
    }
    .package-data-list li {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
    }
</style>