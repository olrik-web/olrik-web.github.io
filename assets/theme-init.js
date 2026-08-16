// Sets data-theme before first paint to avoid a flash of the wrong theme.
// Also adds .js to <html> so UI that only works with JavaScript can be shown.
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  var stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {
    // storage can be unavailable (private mode); fall back to system preference
  }

  var theme =
    stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  root.setAttribute("data-theme", theme);
})();
