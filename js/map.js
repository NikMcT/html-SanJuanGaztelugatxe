// /*Map JS*/

// const mapWrap = document.getElementById("mapWrap");
// const mapBase = document.querySelector(".map-base");
// const mapStage = document.querySelector(".map-stage");

// const hoverLens = document.getElementById("hoverLens");
// const hoverLabel = document.getElementById("hoverLabel");
// const hoverLabelText = document.getElementById("hoverLabelText");
// const points = document.querySelectorAll(".map-hotspot");

// const panel = document.getElementById("mapPanel");
// const panelTitle = document.getElementById("panelTitle");
// const panelSubtitle = document.getElementById("panelSubtitle");
// const panelBody = document.getElementById("panelBody");
// const closePanel = document.getElementById("closePanel");

// function positionHotspots() {
//   if (!mapBase || !mapStage) return;

//   const imgRect = mapBase.getBoundingClientRect();
//   const stageRect = mapStage.getBoundingClientRect();

//   const offsetX = imgRect.left - stageRect.left;
//   const offsetY = imgRect.top - stageRect.top;

//   points.forEach((point) => {
//     const x = parseFloat(point.dataset.x);
//     const y = parseFloat(point.dataset.y);

//     if (Number.isNaN(x) || Number.isNaN(y)) return;

//     point.style.left = `${offsetX + imgRect.width * x}px`;
//     point.style.top = `${offsetY + imgRect.height * y}px`;
//   });
// }

// function positionLens(point) {
//   const pointRect = point.getBoundingClientRect();
//   const wrapRect = mapWrap.getBoundingClientRect();

//   const left = pointRect.left - wrapRect.left + pointRect.width / 2;
//   const top = pointRect.top - wrapRect.top + pointRect.height / 2;

//   hoverLens.style.left = `${left}px`;
//   hoverLens.style.top = `${top}px`;
// }

// function showLens(point) {
//   positionLens(point);
//   hoverLens.hidden = false;
//   requestAnimationFrame(() => {
//     hoverLens.classList.add("is-visible");
//   });
// }

// function hideLens() {
//   hoverLens.classList.remove("is-visible");
//   setTimeout(() => {
//     hoverLens.hidden = true;
//   }, 180);
// }

// function positionHoverLabel(point) {
//   const pointRect = point.getBoundingClientRect();
//   const wrapRect = mapWrap.getBoundingClientRect();

//   const left = pointRect.left - wrapRect.left + pointRect.width / 2;
//   const top = pointRect.top - wrapRect.top - 2;

//   hoverLabel.style.left = `${left}px`;
//   hoverLabel.style.top = `${top}px`;
// }

// function showHoverLabel(point) {
//   hoverLabelText.textContent = point.dataset.title || "";
//   positionHoverLabel(point);
//   hoverLabel.hidden = false;
//   requestAnimationFrame(() => {
//     hoverLabel.classList.add("is-visible");
//   });
// }

// function hideHoverLabel() {
//   hoverLabel.classList.remove("is-visible");
//   setTimeout(() => {
//     hoverLabel.hidden = true;
//   }, 180);
// }

// function openPanel(point) {
//   panelTitle.textContent = point.dataset.title || "";
//   panelSubtitle.textContent = point.dataset.subtitle || "";
//   panelBody.textContent = point.dataset.body || "";
//   panel.hidden = false;
// }

// points.forEach((point) => {
//   point.addEventListener("mouseenter", () => {
//     showLens(point);
//     showHoverLabel(point);
//   });

//   point.addEventListener("mouseleave", () => {
//     hideLens();
//     hideHoverLabel();
//   });

//   point.addEventListener("focus", () => {
//     showLens(point);
//     showHoverLabel(point);
//   });

//   point.addEventListener("blur", () => {
//     hideLens();
//     hideHoverLabel();
//   });

//   point.addEventListener("click", (event) => {
//     event.stopPropagation();
//     openPanel(point);
//   });
// });

// if (closePanel) {
//   closePanel.addEventListener("click", () => {
//     panel.hidden = true;
//   });
// }

// document.addEventListener("click", (event) => {
//   if (!event.target.closest(".map-hotspot") && !event.target.closest(".map-panel")) {
//     hideLens();
//     hideHoverLabel();
//     panel.hidden = true;
//   }
// });

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


const locations = [
  {
    id: 'gaztelugatxe',
    label: 'Gaztelugatxe',
    px: 28, py: 37,
    title: 'San Juan de Gaztelugatxe',
    subtitle: 'Clifftop chapel on a sea island',
    body: 'A dramatic islet crowned by the hermitage of San Juan, reached by a winding stone staircase and rewarded with sweeping views of the Bay of Biscay.',
    tags: ['Protected biotope', 'Hermitage', '241 steps', 'Bay of Biscay'],
    stats: [{ val: '241', lbl: 'stone steps' }, { val: '~1hr', lbl: 'ascent time' }]
  },
  {
    id: 'matxitxako',
    label: 'Matxitxako',
    px: 65, py: 23,
    title: 'Cape Matxitxako',
    subtitle: 'Northernmost point of the Basque coast',
    body: 'Wild headland on the northern coast, with a historic lighthouse, rugged cliffs, and panoramic viewpoints over the open Atlantic.',
    tags: ['Lighthouse', 'Cliff walks', 'Atlantic views', 'Birdwatching'],
    stats: [{ val: '52m', lbl: 'cliff height' }, { val: '1850s', lbl: 'lighthouse era' }]
  },
  {
    id: 'bakio',
    label: 'Bakio',
    px: 6, py: 80,
    title: 'Bakio',
    subtitle: 'Surf beach and departure point',
    body: 'Colorful coastal town with a long maritime tradition, lively harbor bars, and narrow old streets that capture everyday Basque life.',
    tags: ['Surf beach', 'Walking start', 'Pintxos', 'Parking available'],
    stats: [{ val: '2km', lbl: 'walk to site' }, { val: '~45min', lbl: 'coastal path' }]
  },
  {
    id: 'bermeo',
    label: 'Bermeo',
    px: 86, py: 92,
    title: 'Bermeo',
    subtitle: 'Historic coastal town with maritime heritage.',
    body: 'One of the oldest and most important fishing towns on the Basque coast, Bermeo has a deeply rooted maritime heritage. The old port is lined with colourful boats and traditional txokos. It serves as the departure point for boat excursions to Gaztelugatxe, offering a sea-level perspective of the cliffs and islet.',
    tags: ['Fishing heritage', 'Boat trips', 'Maritime museum', 'Historic quarter'],
    stats: [{ val: '15min', lbl: 'by boat to site' }, { val: '13thC', lbl: 'town charter' }]
  }
];

let active = 0;

function renderPins() {
  const wrap = document.getElementById('mapLeft');
  locations.forEach((loc, i) => {
    const pin = document.createElement('button');
    pin.className = 'map-pin' + (i === active ? ' active' : '');
    pin.style.left = loc.px + '%';
    pin.style.top = loc.py + '%';
pin.innerHTML = `<span class="pin-dot"></span>`;
    pin.addEventListener('click', () => select(i));
    pin.id = 'pin-' + i;
    wrap.appendChild(pin);
  });
}

function renderNav() {
  const nav = document.getElementById('locNav');
  locations.forEach((loc, i) => {
    const btn = document.createElement('button');
    btn.className = 'loc-btn' + (i === active ? ' active' : '');
    btn.textContent = loc.label;
    btn.addEventListener('click', () => select(i));
    btn.id = 'navbtn-' + i;
    nav.appendChild(btn);
  });
}

function renderContent(i) {
  const loc = locations[i];
  const el = document.getElementById('locContent');
  el.innerHTML = `
    <div class="fade-in">
      <div class="loc-title">${loc.title}</div>
      <div class="loc-subtitle">${loc.subtitle}</div>
      <div class="loc-divider"></div>
      <div class="loc-body">${loc.body}</div>
      <div class="loc-stat-row">
        ${loc.stats.map(s => `<div class="loc-stat"><div class="loc-stat-val">${s.val}</div><div class="loc-stat-lbl">${s.lbl}</div></div>`).join('')}
      </div>
      <div class="loc-tags">${loc.tags.map(t => `<span class="loc-tag">${t}</span>`).join('')}</div>
    </div>`;
}

function select(i) {
  document.querySelectorAll('.map-pin').forEach((p, j) => p.classList.toggle('active', j === i));
  document.querySelectorAll('.loc-btn').forEach((b, j) => b.classList.toggle('active', j === i));
  active = i;
  renderContent(i);
}

renderPins();
renderNav();
renderContent(0);

      const revealElements = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      });

      revealElements.forEach(el => observer.observe(el));