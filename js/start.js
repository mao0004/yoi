 
 
 
// ページの読み込み完了後
window.addEventListener("load", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 2500); // ← ロゴアニメより少し後にローディングを消す
});

