<script>
  import { onMount, onDestroy } from 'svelte';
  import { base } from "$app/paths";

  function handleKey(e) {
    if (e.code === 'Space') {
      window.location.href = base + "/end/player2"
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKey);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKey);
  });
</script>