<script>
    import { draw, fly, slide } from "svelte/transition"; 
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    let toggle = $state(false);


    onMount(function() {
        setTimeout(function() {
            toggle = true;
        }, 100)
    })
</script>
<style>
    h1, h2, h4 {
        text-align: center;
    }

    #trophy {
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        align-items: center;

        /* scale down */
        transform: scale(0.4);
        transform-origin: center;

        /* optional: smooth scaling animation */
        transition: transform 0.5s ease;
    }
</style>
{#if toggle}
    <br><br><br>

    <h1 transition:fly={{y:500, duration:1000}} class="action" style:font-weight="900">PLAYER 2 WINS</h1>
    <h2 transition:fly={{y:500, duration:1000, delay:1000}} class="action" style:font-weight="700">GAME OVER</h2>
    <br>
    <h4 transition:slide={{duration:1000, delay:2000}}><button style:background-color="rgb(222, 45, 155)" onclick = {() => {window.location.href = base;}}>Return</button></h4>

    <div id="trophy">
        <svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path transition:draw={{delay:2000}} d="M4 14.5H11M7.5 14.5V9.5M7.5 9.5C9.70914 9.5 11.5 7.70914 11.5 5.5V1.5C11.5 0.947715 11.0523 0.5 10.5 0.5H4.5C3.94772 0.5 3.5 0.947715 3.5 1.5V5.5C3.5 7.70914 5.29086 9.5 7.5 9.5ZM3.5 2.5H2.5C1.39543 2.5 0.5 3.39543 0.5 4.5C0.5 5.60457 1.39543 6.5 2.5 6.5H3.5M11.5 2.5H12.5C13.6046 2.5 14.5 3.39543 14.5 4.5C14.5 5.60457 13.6046 6.5 12.5 6.5H11.5" stroke="white"/>
        </svg>
    </div>
{/if}