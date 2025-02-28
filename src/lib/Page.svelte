<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title?: string;
    children: Snippet;
  }

  const { title, children }: Props = $props();
</script>

{#if title?.length}
  <h2 class="text-5xl underline">{title}</h2>
{/if}
<div class="grid grow-1 place-content-center place-items-center">{@render children()}</div>
