<script lang="ts">
  import { advanceProgress, getCookieProgress } from "./state.svelte";

  interface Props {
    progress: number;
    size?: "inherit" | "verysmall" | "small" | "normal" | "big" | "verybig";
  }

  const { progress, size = "inherit" }: Props = $props();
</script>

{#if progress === getCookieProgress()}
  <button
    onclick={advanceProgress}
    class="cursor-pointer"
    class:text-xl={size === "verysmall"}
    class:text-3xl={size === "small"}
    class:text-5xl={size === "normal"}
    class:text-7xl={size === "big"}
    class:text-9xl={size === "verybig"}
  >
    🍪
  </button>
{/if}
