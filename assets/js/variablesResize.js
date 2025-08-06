function setStyleVariables() {
  document.querySelectorAll(".style-crystal-container").forEach((container) => {
    const width = container.offsetWidth + "px";
    const height = container.offsetHeight + "px";
    container.style.setProperty("--banner-width", width);
    container.style.setProperty("--banner-height", height);
    console.log("properties changed after resize");
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", setStyleVariables);
  // resize again after 0.7s in case of transitions
  window.addEventListener("resize", () => setTimeout(setStyleVariables, 700));

  setStyleVariables();
});
