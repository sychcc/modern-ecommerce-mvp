// DOM 元素
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileNavClose = document.getElementById("mobileNavClose");

// 開啟手機版選單
function openMobileMenu() {
  mobileNav.classList.add("show");
  mobileOverlay.classList.add("show");
  document.body.style.overflow = "hidden"; // 防止背景滾動
}

// 關閉手機版選單
function closeMobileMenu() {
  mobileNav.classList.remove("show");
  mobileOverlay.classList.remove("show");
  document.body.style.overflow = ""; // 恢復滾動
}

// 事件監聽
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openMobileMenu);
}

if (mobileNavClose) {
  mobileNavClose.addEventListener("click", closeMobileMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener("click", closeMobileMenu);
}

// ESC 鍵關閉選單
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMobileMenu();
  }
});
