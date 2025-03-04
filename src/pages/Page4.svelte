<script>
  import Page from "../lib/Page.svelte";
  import webService from "../assets/web-service.webp";
  import webServiceCookie from "../assets/web-service-cookie.webp";
  import game from "../assets/game.webp";
  import nativeApp from "../assets/native-app.webp";
  import { advanceProgress, getCookieProgress } from "../lib/state.svelte";
</script>

<Page title="例えば...">
  <div class="flex justify-center">
    {#if getCookieProgress() === 6}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img class="w-[25%] cursor-pointer" src={webServiceCookie} alt="Webサービス" onclick={advanceProgress} />
    {:else}
      <img class="w-[25%]" src={webService} alt="Webサービス" />
    {/if}
    <img class="w-[25%]" src={game} alt="ゲーム" />
    <img class="w-[25%]" src={nativeApp} alt="ネイティブアプリ" />
  </div>
</Page>
