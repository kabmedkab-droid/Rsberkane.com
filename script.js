(() => {
  const supported = ["fr", "en", "ar"];
  const langButtons = document.querySelectorAll(".lang-btn");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  function setLanguage(lang) {
    if (!supported.includes(lang)) lang = "fr";
    const dict = window.RSB_TRANSLATIONS[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    const playerName = document.body.dataset.player;
    if (playerName) {
      const suffix = lang === "ar" ? " — نهضة بركان" : (lang === "en" ? " — RS Berkane" : " — RS Berkane");
      document.title = playerName + suffix;
    } else {
      document.title = lang === "ar" ? "نهضة بركان — النادي" : (lang === "en" ? "RS Berkane — The Club" : "RS Berkane — Le club");
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) element.innerHTML = dict[key];
    });

    langButtons.forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem("rsb-language", lang); } catch (_) {}
  }

  langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));

  document.getElementById("year").textContent = new Date().getFullYear();
  let saved = "fr";
  try { saved = localStorage.getItem("rsb-language") || "fr"; } catch (_) {}
  setLanguage(saved);
})();
