<script>

    import { onMount } from "svelte";
    import { base } from "$app/paths"; 
    import { page } from '$app/stores';

    let gamekey = $derived($page.url.searchParams.get("gamekey"));
    let player =  $derived($page.url.searchParams.get("player"));
    onMount(() => {
        console.log(player);
    })


    onMount(() => {
        if (player == "a") {
            sessionStorage.setItem("player", "a");
            sessionStorage.setItem("gamekey", gamekey);
            window.location.href = base + "/a";
        }
        else if (player == "b") {
            sessionStorage.setItem("player", "b");
            window.location.href = base + "/b";
            sessionStorage.setItem("gamekey", gamekey);
        }
        else {
            window.location.href = base + "/error/error";
        }
    })

</script>
<style>
    * {
        text-align: center;

    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    #loadIcon {
        animation: rotate 2s infinite;
        font-size: 80px;
    }
</style>
<h1><span id="loadIcon" class="material-symbols-outlined">
cached
</span></h1>
<br>
<h2>Loading</h2>
<h5>TAGGIE</h5>

