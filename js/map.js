/*Map JS*/

const mapWrap = document.getElementById("mapWrap");
const mapBase = document.querySelector(".map-base");
const mapStage = document.querySelector(".map-stage");

const hoverLens = document.getElementById("hoverLens");
const hoverLabel = document.getElementById("hoverLabel");
const hoverLabelText = document.getElementById("hoverLabelText");
const points = document.querySelectorAll(".map-hotspot");

const panel = document.getElementById("mapPanel");
const panelTitle = document.getElementById("panelTitle");
const panelSubtitle = document.getElementById("panelSubtitle");
const panelBody = document.getElementById("panelBody");
const closePanel = document.getElementById("closePanel");

function positionHotspots() {
  if (!mapBase || !mapStage) return;

  const imgRect = mapBase.getBoundingClientRect();
  const stageRect = mapStage.getBoundingClientRect();

  const offsetX = imgRect.left - stageRect.left;
  const offsetY = imgRect.top - stageRect.top;

  points.forEach((point) => {
    const x = parseFloat(point.dataset.x);
    const y = parseFloat(point.dataset.y);

    if (Number.isNaN(x) || Number.isNaN(y)) return;

    point.style.left = `${offsetX + imgRect.width * x}px`;
    point.style.top = `${offsetY + imgRect.height * y}px`;
  });
}

function positionLens(point) {
  const pointRect = point.getBoundingClientRect();
  const wrapRect = mapWrap.getBoundingClientRect();

  const left = pointRect.left - wrapRect.left + pointRect.width / 2;
  const top = pointRect.top - wrapRect.top + pointRect.height / 2;

  hoverLens.style.left = `${left}px`;
  hoverLens.style.top = `${top}px`;
}

function showLens(point) {
  positionLens(point);
  hoverLens.hidden = false;
  requestAnimationFrame(() => {
    hoverLens.classList.add("is-visible");
  });
}

function hideLens() {
  hoverLens.classList.remove("is-visible");
  setTimeout(() => {
    hoverLens.hidden = true;
  }, 180);
}

function positionHoverLabel(point) {
  const pointRect = point.getBoundingClientRect();
  const wrapRect = mapWrap.getBoundingClientRect();

  const left = pointRect.left - wrapRect.left + pointRect.width / 2;
  const top = pointRect.top - wrapRect.top - 2;

  hoverLabel.style.left = `${left}px`;
  hoverLabel.style.top = `${top}px`;
}

function showHoverLabel(point) {
  hoverLabelText.textContent = point.dataset.title || "";
  positionHoverLabel(point);
  hoverLabel.hidden = false;
  requestAnimationFrame(() => {
    hoverLabel.classList.add("is-visible");
  });
}

function hideHoverLabel() {
  hoverLabel.classList.remove("is-visible");
  setTimeout(() => {
    hoverLabel.hidden = true;
  }, 180);
}

function openPanel(point) {
  panelTitle.textContent = point.dataset.title || "";
  panelSubtitle.textContent = point.dataset.subtitle || "";
  panelBody.textContent = point.dataset.body || "";
  panel.hidden = false;
}

points.forEach((point) => {
  point.addEventListener("mouseenter", () => {
    showLens(point);
    showHoverLabel(point);
  });

  point.addEventListener("mouseleave", () => {
    hideLens();
    hideHoverLabel();
  });

  point.addEventListener("focus", () => {
    showLens(point);
    showHoverLabel(point);
  });

  point.addEventListener("blur", () => {
    hideLens();
    hideHoverLabel();
  });

  point.addEventListener("click", (event) => {
    event.stopPropagation();
    openPanel(point);
  });
});

if (closePanel) {
  closePanel.addEventListener("click", () => {
    panel.hidden = true;
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".map-hotspot") && !event.target.closest(".map-panel")) {
    hideLens();
    hideHoverLabel();
    panel.hidden = true;
  }
});

const legendToggle = document.getElementById("legendToggle");
const legendPanel = document.getElementById("legendPanel");
const legendClose = document.getElementById("legendClose");
const legendBackdrop = document.getElementById("legendBackdrop");

function openLegend() {
  if (!legendPanel) return;
  legendPanel.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLegendModal() {
  if (!legendPanel) return;
  legendPanel.hidden = true;
  document.body.style.overflow = "";
}

if (legendToggle) {
  legendToggle.addEventListener("click", openLegend);
}

if (legendClose) {
  legendClose.addEventListener("click", closeLegendModal);
}

if (legendBackdrop) {
  legendBackdrop.addEventListener("click", closeLegendModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && legendPanel && !legendPanel.hidden) {
    closeLegendModal();
  }
});

const mapIntro = document.getElementById("mapIntro");
const enterMapBtn = document.getElementById("enterMapBtn");
const skipMapIntro = document.getElementById("skipMapIntro");

function hideMapIntro() {
  if (!mapIntro) return;
  mapIntro.classList.add("is-hidden");
}

if (enterMapBtn) {
  enterMapBtn.addEventListener("click", hideMapIntro);
}

if (skipMapIntro) {
  skipMapIntro.addEventListener("click", hideMapIntro);
}

const mapIntroToggle = document.getElementById("mapIntroToggle");

if (mapIntroToggle && mapIntro) {
  mapIntroToggle.addEventListener("click", () => {
    const isHidden = mapIntro.classList.toggle("is-hidden");
    mapIntroToggle.textContent = isHidden
      ? "Show Guide"
      : "Back To Guide";
  });
}

window.addEventListener("load", positionHotspots);
window.addEventListener("resize", positionHotspots);

if (mapBase) {
  mapBase.addEventListener("load", positionHotspots);
}
