const KEY = "analytics_consent";

const banner = document.getElementById("consent-banner");
const accept = document.getElementById("consent-accept");
const decline = document.getElementById("consent-decline");

function updateConsent(granted) {
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
  }

  if (granted && window.enableAnalytics) {
    window.enableAnalytics();
  }
}

const saved = localStorage.getItem(KEY);

if (!saved) {
  banner?.classList.remove("hidden");
} else {
  updateConsent(saved === "granted");
}

accept?.addEventListener("click", () => {
  localStorage.setItem(KEY, "granted");
  updateConsent(true);
  banner?.remove();
});

decline?.addEventListener("click", () => {
  localStorage.setItem(KEY, "denied");
  updateConsent(false);
  banner?.remove();
});
