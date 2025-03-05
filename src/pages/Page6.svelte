<script>
  import CookieButton from "../lib/CookieButton.svelte";
  import Page from "../lib/Page.svelte";
  import { getCookieProgress } from "../lib/state.svelte";
</script>

<Page title="最後に">
  <div class:blur-xs={getCookieProgress() === 8}>
    <p>Web開発は技術の変化がとても激しい分野です。</p>
    <p class="mt-8">
      また、出来ることの幅広さから、創造性や<CookieButton progress={8} fallback>
        柔軟性
      </CookieButton>を求められる分野でもあります。
    </p>
    <p class="mt-8">Web開発は大変なことも多いですが、試行錯誤しながら学び、</p>
    <p class="mt-8">制作して形にすることは、とても楽しいことだと思います！</p>
    <p class="mt-16">皆さんも、一緒に挑戦してみませんか？</p>
  </div>
</Page>
