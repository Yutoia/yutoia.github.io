<script lang="ts">
  import type { Component } from "svelte";
  import { fade } from "svelte/transition";

  const pages = new Map<string, Component>(
    Object.entries(import.meta.glob("./pages/*.svelte", { eager: true, import: "default" })),
  );

  let page = $state(
    (() => {
      const p = new URLSearchParams(window.location.search).get("p");
      if (p === null) {
        return 0;
      }
      const pn = Number(p) - 1;
      return Number.isFinite(pn) ? pn : 0;
    })(),
  );
  let PageComponent = $derived(pages.get(`./pages/Page${page}.svelte`));

  function setPage(p: number) {
    window.history.replaceState(null, "", `?p=${p + 1}`);
    page = p;
  }
</script>

<main class="flex h-svh bg-linear-to-br from-teal-500 to-indigo-500 text-white">
  <nav class="grid w-20 grid-rows-9 border-r-4">
    {#each Array(9) as _, i}
      <button onclick={() => setPage(i)} class="text-2xl transition" class:bg-zinc-900={page !== i}>
        {i + 1}
      </button>
    {/each}
  </nav>
  <section class="relative grow-1">
    <div class="absolute top-12 right-12 bottom-12 left-12 rounded-sm bg-white/25 px-8 py-20">
      {#key page}
        <div class="flex h-full flex-col overflow-y-auto text-center text-3xl font-bold" in:fade>
          <PageComponent />
        </div>
      {/key}
    </div>
  </section>
</main>
