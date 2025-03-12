<script>
  import CookieButton from "../lib/CookieButton.svelte";
  import Page from "../lib/Page.svelte";
  import { getCookieProgress } from "../lib/state.svelte";
</script>

<Page>
  <h2 class="text-5xl">ご清聴ありがとうございました！</h2>
  <div class="mt-8">
    <CookieButton progress={0} size="big" fallback>
      <p>
        見つけたクッキーの数: {getCookieProgress()}/10
        {#if getCookieProgress() === 10}
          🎉
        {/if}
      </p>
    </CookieButton>
  </div>
  <p class="absolute right-8 bottom-8 text-xl">
    (ソースコードは
    <a
      href="https://github.com/Yutoia/yutoia.github.io"
      target="_blank"
      rel="noopener noreferrer"
      class="text-yellow-200"
    >
      GitHub
    </a>
    にあります！)
  </p>
</Page>
