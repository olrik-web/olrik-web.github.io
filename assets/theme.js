// Theme toggle: flips data-theme on <html> and remembers the choice
(function () {
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  var root = document.documentElement;

  function setLabel(theme) {
    var label =
      theme === "dark"
        ? button.getAttribute("data-label-to-light")
        : button.getAttribute("data-label-to-dark");
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  }

  setLabel(root.getAttribute("data-theme"));

  button.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // storage can be unavailable (private mode); the choice just won't persist
    }
    setLabel(next);
  });
})();
