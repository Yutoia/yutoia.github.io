<script lang="ts">
  import type { Snippet } from "svelte";
  import { advanceProgress, getCookieProgress } from "./state.svelte";

  type Props = {
    progress: number;
    size?: "inherit" | "verysmall" | "small" | "normal" | "big" | "verybig";
  } & (
    | {
        fallback: true;
        children: Snippet;
      }
    | {
        fallback?: false;
        children?: undefined;
      }
  );

  const { progress, size = "inherit", ...other }: Props = $props();
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
{:else if other.fallback}
  {@render other.children()}
{/if}
