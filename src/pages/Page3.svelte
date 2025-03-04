<script>
  import Page from "../lib/Page.svelte";
  import { advanceProgress, getCookieProgress } from "../lib/state.svelte";
</script>

<Page title="Web開発の魅力は主にこの3つ！">
  <ol class="list-inside list-decimal">
    <li>昔からある技術なので情報が多い</li>
    <li class="mt-8">結果が視覚的に反映されやすく、開発のモチベが維持されやすい</li>
    <li class="mt-8">様々なニーズに応えられる (後述)</li>
    {#if getCookieProgress() === 5}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <li class="mt-8 cursor-pointer" onclick={advanceProgress}>クッキーによる情報保存が可能</li>
    {/if}
  </ol>
</Page>
