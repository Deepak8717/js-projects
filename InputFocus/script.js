window.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("search");
  form.addEventListener("focus", function () {
    document.body.style.background = "rgba(0, 0, 0, 0.8)";
  });
  form.addEventListener("blur", function () {
    document.body.style.background = "";
  });
});
