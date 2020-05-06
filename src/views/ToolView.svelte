<script>
import {tools} from '../store.js';
import ToolPackageCard from '../components/ToolPackageCard.svelte';

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
    <h1>
        {tool.displayName}
    </h1>
    <div class="flex-wrapper">
        <div class="tool-data-list">
            <ul class="tool-general-list">
                <li>
                    <b>Mindestpreis:</b> {displayPrice(tool.minPricePerMonth)}
                </li>
                <li>
                    <b>Maximale Teilnehmer:</b> {tool.maxParticipants}
                    <i class="fa fa-user"></i>
                </li>
                <li>
                    <b>Webseite:</b> <a href="{tool.url}">{tool.displayName}</a>
                </li>
                {#if tool.packages.length > 0}
                    <li>Hat mehrere verschiedene Pakete/Kaufoptionen (s. unten)</li>
                {/if}
            </ul>
            {#if tool.functions.length > 0}
                <div class="tool-feature-list">
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
            <ToolPackageCard color="{tool.color}" packageOption="{packageOption}" />
        {/each}
    </div>
</div>

<style>
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

    .flex-wrapper-packages {
        margin-top: 10px;
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

    @media(max-width: 1172px) {
        .flex-wrapper-packages {
            justify-content: center;
        }   
    }

    .tool-data-list {
        flex: 1;
        text-align: start;
        padding-left: 2%;
    }

    @media(min-width: 1200px) {
        .tool-data-list {
            display: flex;
        }
    }

    .tool-feature-list {
        flex: 1;
    }
    .tool-general-list {
        flex: 1;
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