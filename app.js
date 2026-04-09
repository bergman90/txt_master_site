const grid = document.querySelector("#adventure-grid");

async function loadCatalog() {
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Registration failures are non-blocking for the static site.
    });
  });
}

loadCatalog();
