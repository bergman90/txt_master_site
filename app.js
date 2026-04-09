const grid = document.querySelector("#adventure-grid");
const newsletterForm = document.querySelector("#newsletter-form");
const newsletterHiddenFields = document.querySelector("#newsletter-hidden-fields");
const newsletterProviderNote = document.querySelector("#newsletter-provider-note");

async function loadCatalog() {
  if (!grid) {
    return;
  }
  try {
    const response = await fetch("./adventures/catalog.json");
    if (!response.ok) {
      throw new Error(`Catalogo non disponibile (${response.status})`);
    }
    const catalog = await response.json();
    renderCatalog(catalog.entries ?? []);
  } catch (error) {
    renderError(error);
  }
}

function renderCatalog(entries) {
  if (!grid) return;
  if (!entries.length) {
    grid.innerHTML = `<div class="empty-state">Nessuna avventura pubblicata al momento.</div>`;
    return;
  }

  grid.innerHTML = entries.map((entry) => {
    const tags = [
      entry.kind ? `<span class="tag">${escapeHtml(entry.kind)}</span>` : "",
      entry.free ? `<span class="tag">Gratis</span>` : "",
      entry.difficulty ? `<span class="tag">${escapeHtml(entry.difficulty)}</span>` : ""
    ].join("");

    return `
      <article class="adventure-card">
        <div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.tagline ?? "")}</p>
        </div>
        <div class="adventure-meta">
          ${tags}
          <span>Lunghezza: ${escapeHtml(entry.length ?? "n/d")}</span>
        </div>
        <p>${escapeHtml(entry.description ?? "")}</p>
        <div class="card-actions">
          <a class="button button--primary" href="./adventures/${encodeURIComponent(entry.fileName)}" download>Scarica JSON</a>
          <a class="button button--ghost" href="./adventures/${encodeURIComponent(entry.fileName)}" target="_blank" rel="noopener">Apri file</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderError(error) {
  if (!grid) return;
  grid.innerHTML = `
    <div class="empty-state">
      Impossibile caricare il catalogo delle avventure.<br>
      Dettaglio: ${escapeHtml(error.message)}
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function initNewsletterForm() {
  if (!newsletterForm || !newsletterHiddenFields) {
    return;
  }

  const config = {
    provider: "formsubmit",
    formsubmitEndpoint: "https://formsubmit.co/txtmaster@yahoo.com",
    nextUrl: "https://bergman90.github.io/txt_master_site/",
    buttondownUsername: "",
    buttondownEndpoint: "",
    ...(window.TXT_MASTER_NEWSLETTER ?? {})
  };

  if (config.provider === "buttondown" && config.buttondownUsername) {
    newsletterForm.action = config.buttondownEndpoint || `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(config.buttondownUsername)}`;
    newsletterHiddenFields.innerHTML = "";
    if (newsletterProviderNote) {
      newsletterProviderNote.innerHTML = `Iscrizioni gestite da Buttondown. <a href="https://buttondown.com/refer/${encodeURIComponent(config.buttondownUsername)}" target="_blank" rel="noopener">Powered by Buttondown.</a>`;
    }
    return;
  }

  newsletterForm.action = config.formsubmitEndpoint;
  newsletterHiddenFields.innerHTML = `
    <input type="hidden" name="_subject" value="Nuova iscrizione newsletter .txt-Master">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="${escapeHtml(config.nextUrl)}">
    <input type="text" name="_honey" class="hp-field" tabindex="-1" autocomplete="off">
  `;
  if (newsletterProviderNote) {
    newsletterProviderNote.textContent = "Iscrizioni gestite con il form statico attuale. Quando configurerai Buttondown, il sito passerà al provider newsletter dedicato senza rifare il layout.";
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Registration failures are non-blocking for the static site.
    });
  });
}

initNewsletterForm();
loadCatalog();
