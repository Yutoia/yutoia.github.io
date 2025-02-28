const cookiesCookie = void document.cookie
  .split("; ")
  .find(row => row.startsWith("cookies="))
  ?.split("=")[1];

if (!cookiesCookie) {
  document.cookie = "cookies=0";
}

let cookieProgress = $state(cookiesCookie ? Number(cookiesCookie) : 0);

export function getCookieProgress() {
  return cookieProgress;
}

export function advanceProgress() {
  document.cookie = `cookies=${++cookieProgress}`;
}
