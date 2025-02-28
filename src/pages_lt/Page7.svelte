<script>
  import CookieButtonWithFallback from "../lib/CookieButtonWithFallback.svelte";
  import Page from "../lib/Page.svelte";
  import { getCookieProgress } from "../lib/state.svelte";
</script>

<Page>
  <h2 class="text-5xl">ご清聴ありがとうございました！</h2>
  <div class="mt-8">
    <CookieButtonWithFallback progress={0} size="big">
      <p>見つけたクッキーの数: {getCookieProgress()}/4</p>
    </CookieButtonWithFallback>
  </div>
</Page>
