<script>
  import Page from "../lib/Page.svelte";
  import webService from "../assets/web-service.webp";
  import game from "../assets/game.webp";
  import nativeApp from "../assets/native-app.webp";
</script>

<Page title="例えば...">
  <div class="flex justify-center">
    <img class="w-[25%]" src={webService} alt="Webサービス" />
    <img class="w-[25%]" src={game} alt="ゲーム" />
    <img class="w-[25%]" src={nativeApp} alt="ネイティブアプリ" />
  </div>
</Page>
