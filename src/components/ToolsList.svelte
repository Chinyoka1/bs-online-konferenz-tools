<script>
    import {tools} from '../store.js';
    import {Navigate} from 'svelte-router-spa';
    import FloatingFilterThing from './FloatingFilterThing.svelte';
    let localTools = tools;
    function displayPrice(price) {
        price = parseFloat(price);
        if (price > 0) {
            return `${price} €`;
        }
        return 'kostenlos';
    }
    let sortBy = 'min-price-per-month';
    
    $: switch (sortBy) {
        case 'min-price-per-month': {
            localTools.forEach(tool => parseFloat(tool.minPricePerMonth));
            localTools = tools.sort((a, b) => {return a.minPricePerMonth - b.minPricePerMonth});
            break;
        }
        case 'max-participants': {
            localTools = tools.sort((a, b) => {return a.maxParticipants - b.maxParticipants});
            localTools.reverse();
            break;
        }
        case 'free-option': {
            localTools = tools.filter(tool => ['0', 0].includes(tool.minPricePerMonth))
            break;
        }
    }
</script>

<FloatingFilterThing bind:sortBy="{sortBy}" />
<div class="flex-wrapper">
    {#each localTools as tool}
        <div class="card" style="background-color: {tool.color}">
            <div class="card-title">
                <Navigate to="tool-view/{tool.route}">
                    <div class="heading-1">
                        {tool.displayName}
                    </div>
                </Navigate>
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