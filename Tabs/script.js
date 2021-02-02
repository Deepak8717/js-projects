const tabs = document.getElementsByClassName("tab");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", tabSwitch);
}

function tabSwitch() {
  document.getElementsByClassName("is-active")[0].classList.remove("is-active");
  this.classList.add("is-active");
  document
    .getElementsByClassName("show-panel")[0]
    .classList.remove("show-panel");
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName("panel")[index].classList.add("show-panel");
}
