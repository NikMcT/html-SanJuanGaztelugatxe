const mapWrap = document.getElementById("mapWrap");
const hoverLens = document.getElementById("hoverLens");
const hoverLabel = document.getElementById("hoverLabel");
const hoverLabelText = document.getElementById("hoverLabelText");
const points = document.querySelectorAll(".map-hotspot");

const panel = document.getElementById("mapPanel");
const panelTitle = document.getElementById("panelTitle");
const panelSubtitle = document.getElementById("panelSubtitle");
const panelBody = document.getElementById("panelBody");
const closePanel = document.getElementById("closePanel");

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

closePanel.addEventListener("click", () => {
  panel.hidden = true;
});

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

legendToggle.addEventListener("click", () => {
  legendPanel.hidden = false;
  legendToggle.style.display = "none";
});

legendClose.addEventListener("click", () => {
  legendPanel.hidden = true;
  legendToggle.style.display = "inline-flex";
});