<script>
import {tools} from '../store.js';

export let currentRoute;
export let params;
const currentToolName = currentRoute.namedParams.tool;
const tool = tools.find(tool => tool.route === currentToolName);
let logo = `../images/${tool.route}.png`;
function displayPrice(price) {
    price = parseFloat(price);
    if (price > 0) {
        return `${price} €`;
    }
    return 'kostenlos';
}
</script>

<div class="content">
    <h1>{tool.displayName}</h1>
    <div class="flex-wrapper">
        <div class="tool-data-list">
            <ul>
                <li>
                    <b>Mindestpreis:</b> {displayPrice(tool.minPricePerMonth)}
                </li>
                <li>
                    <b>Maximale Teilnehmer:</b> {tool.maxParticipants}
                    <i class="fa fa-user"></i>
                </li>
                {#if tool.packages.length > 0}
                    <li>Hat mehrere verschiedene Pakete/Kaufoptionen (s. unten)</li>
                {/if}
            </ul>
            {#if tool.functions.length > 0}
                <div>
                    <div class="heading-2">
                        Features
                    </div>
                    <ul>
                        {#each tool.functions as feature}
                            <li>{feature}</li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
        <img src="{logo}" alt="Logo von {tool.displayName}">
    </div>
    <div class="flex-wrapper-packages">
        {#each tool.packages as packageOption}
            <div class="card package-card" style="background-color: {tool.color}">
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
        {/each}
    </div>
</div>

<style>
    .package-data-list li {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
    }
    h1 {
        text-align: start;
        padding-left: 40px;
        font-size: 2.5em;
        font-weight: 100;
    }

    @media(max-width: 900px) and (min-width: 650px) {
        img {
            width: 5%;
            height: 5%;
        }
    }

    @media(min-width: 650px) {
        .flex-wrapper {
            display: flex;
            flex-wrap: wrap;
        }
    }

    @media(min-width: 900px) {
        .flex-wrapper-packages {
            display: flex;
            margin-top: 30px;
        }
    }

    @media(max-width: 1500px) {
        .flex-wrapper-packages {
            flex-wrap: wrap;
        }
    }

    @media(min-width: 400px) {
        .package-card {
            margin: 10px;
            min-width: 350px;
        }
    }

    .tool-data-list {
        flex: 1;
        text-align: start;
        padding-left: 2%;
    }

    img {
        flex: 1;
        width: 100%;
        height: 100%;
        max-width: 300px;
    }
    .content {
        padding: 1em;
        margin: 0 auto;
    }
</style>