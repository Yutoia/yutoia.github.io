<script>
  import CookieButton from "../lib/CookieButton.svelte";
  import Page from "../lib/Page.svelte";
  import { advanceProgress, getCookieProgress } from "../lib/state.svelte";
</script>

<Page title="自己紹介">
  <div class="flex items-center">
    <div class="grid size-75 place-content-center bg-black text-9xl">
      <CookieButton progress={2} fallback>?</CookieButton>
    </div>
    <div class="ml-10 text-start">
      <h3 class="underline">Q. 名前は？</h3>
      <p>Yutoia (Slack名義)</p>
      <h3 class="mt-8 underline">Q. なにしてる人？</h3>
      <p>
        {#if getCookieProgress() === 1 || getCookieProgress() === 7}
          <button onclick={advanceProgress} class="cursor-pointer rounded-sm text-yellow-200">
            {#if getCookieProgress() === 1}
              [クッキーが欲しい]
            {:else}
              [もう一個？]
            {/if}
          </button>
        {:else}
          <button
            onclick={() => alert("Web、システム、AI、MinecraftのMod開発など。\n割と気が向いたらなんでもしています。")}
            class="cursor-pointer rounded-sm text-yellow-200"
          >
            [プログラミング全般]
          </button>
        {/if}
        ←
      </p>
      <h3 class="mt-8 underline">Q. N? S?</h3>
      <p>
        実は
        <span class="inline-block rotate-y-180">∽</span>
        なんです。
      </p>
    </div>
  </div>
</Page>
