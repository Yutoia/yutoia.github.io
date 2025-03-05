<script>
  import CookieButton from "../lib/CookieButton.svelte";
  import Page from "../lib/Page.svelte";
</script>

<Page title="まとめ">
  <ol class="list-inside list-decimal">
    <li>Web開発は学習コストが比較的低い</li>
    <li class="mt-8">
      Web開発を学ぶことによって、Webサービスだけでなく
      <br />
      ゲームやスマホアプリも制作することができる
    </li>
    <li class="mt-8">Web開発は時代に合わせて変化する分野である</li>
    <li class="mt-16">
      Web開発は楽しい
      <CookieButton progress={4} fallback>🎉</CookieButton>
    </li>
  </ol>
</Page>
