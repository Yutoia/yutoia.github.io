<script lang="ts">
  import type { ComponentProps, Snippet } from "svelte";
  import CookieButton from "./CookieButton.svelte";
  import { getCookieProgress } from "./state.svelte";

  const { children, ...props }: { children: Snippet } & ComponentProps<typeof CookieButton> = $props();
</script>

<CookieButton {...props} />
{#if props.progress !== getCookieProgress()}
  {@render children()}
{/if}
