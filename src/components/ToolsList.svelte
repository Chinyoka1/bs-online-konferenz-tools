<script>
    export let tools;

    function displayPrice(price) {
        price = parseFloat(price);
        if (price > 0) {
            return `${price} €`;
        }
        return 'kostenlos';
    }
</script>

<div class="flex-wrapper">
    {#each tools as tool}
        <div class="card" style="background-color: {tool.color}">
            <div class="card-title">
                <div class="heading">
                    {tool.displayName}
                </div>
                <button class="icon-button">
                    <i class="fas fa-info"></i>
                </button>
            </div>
            <div class="card-content">
                <ul>
                    <li>
                        <b>Mindestpreis:</b> {displayPrice(tool.minPricePerMonth)}
                    </li>
                    <li>
                        <b>Maximale Teilnehmer:</b> {tool.maxParticipants}
                    </li>
                </ul>
            </div>
        </div>
    {/each}
</div>

<style>
    .card {
        flex-basis: 30%;
        border-radius: 5px;
        margin-bottom: 10px;
        box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.5);
        color: rgba(255, 255, 255, 0.8);
    }
    .heading {
        font-size: x-large;
        padding-left: 20px;
    }
    .card-title {
        text-align: start;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
    .card-content {
        text-align: start;
        padding: 5px;
    }
    .icon-button {
        background-color: rgba(255, 255, 255, 0);
        border: none;
        color: white;
        flex-basis: 30px;
        border-radius: 7px;
        background-position: center;
        transition: background 0.5s;
    }
    .icon-button:hover {
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        background: rgba(255, 255, 255, 0.4) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.1) 1%) center/15000%;
    }
    .icon-button:active {
        cursor: pointer;
        background-size: 100%;
        transition: background 0s;
    }
    .icon-button:focus {
        background-color: rgba(255, 255, 255, 0.3);
        outline: 0;
    }
    @media(min-width: 900px) {
        .flex-wrapper {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }
</style>