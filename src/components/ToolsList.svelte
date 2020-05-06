<script>
    import {tools} from '../store.js';
    import {Navigate} from 'svelte-router-spa';
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
                <div class="heading-1">
                    {tool.displayName}
                </div>
                <Navigate to="tool-view/{tool.route}">
                    <button class="icon-button">
                        <i class="fas fa-info"></i>
                    </button>
                </Navigate>
            </div>
            <div class="card-content">
                <ul>
                    <li>
                        <b>Mindestpreis:</b> {displayPrice(tool.minPricePerMonth)}
                    </li>
                    <li>
                        <b>Maximale Teilnehmer:</b> {tool.maxParticipants}
                        <i class="fa fa-user"></i>
                    </li>
                </ul>
            </div>
        </div>
    {/each}
</div>

<style>
    .icon-button {
        background-color: rgba(255, 255, 255, 0);
        border: none;
        color: white;
        width: 30px;
        border-radius: 7px;
        background-position: center;
        transition: background 0.5s;
    }
    .icon-button:hover {
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