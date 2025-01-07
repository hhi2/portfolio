const button = document.getElementById("change-lang");
const title = document.getElementById("title");
const content = document.getElementById("content");
let isEnglish = true;

button.addEventListener("click", () => {
  if (isEnglish) {
    // تغيير النصوص إلى العربية
    title.textContent = "مرحبًا اهلا بك في موقعي ";
    content.textContent = "هذا مثال بسيط لتبديل اللغة.";
    document.body.className = "arabic";
  } else {
    // تغيير النصوص إلى الإنجليزية
    title.textContent = "hello welcome in my wibsite";
    content.textContent = "";
    document.body.className = "english";
  }
  isEnglish = !isEnglish; // تبديل الحالة
});
