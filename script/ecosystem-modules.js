
const birds = [
  {
    number: '(01)',
    name: 'Yellow-legged Gull',
    summary: 'Larus michahellis is one of the most visible birds along the Basque coast. A versatile forager, it nests on sea-facing cliffs and feeds on fish, invertebrates, and scraps from nearby fishing boats.',
    body: [
      'The Yellow-legged Gull is one of the most characteristic birds of the Atlantic coast. With its bright yellow legs and powerful bill tipped with red, it is easy to identify year-round on the cliffs and rocky shores of Gaztelugatxe.',
      'These birds nest in large colonies between April and July, occupying exposed ledges on the sea-facing cliffs. Both parents share incubation duties and are highly territorial, often diving at intruders that venture too close to the nest site.',
      'As opportunistic omnivores, Yellow-legged Gulls adapt their diet to seasonal availability — feeding on marine invertebrates, small fish, and discards from fishing vessels. Their presence serves as a useful indicator of broader ecosystem health.',
      'Conservation efforts focus on monitoring colony sizes and reducing disturbance during the breeding season. Restricted access zones and visitor education programmes have helped stabilise population numbers in recent years.'
    ]
  },
  {
    number: '(02)',
    name: 'European Shag',
    summary: 'Gulosus aristotelis is a medium-sized cormorant of rocky Atlantic coastlines. It dives to considerable depths in pursuit of fish, nesting colonially on sheltered cliff ledges throughout the year.',
    body: [
      'The European Shag is a slender, dark-plumed diving bird closely associated with rocky, wave-exposed coastlines. Its iridescent green-black plumage and distinctive crest during breeding season make it one of the more striking seabirds in the region.',
      'Unlike its relative the Great Cormorant, the Shag feeds almost exclusively at sea, pursuing fish in deep, clear inshore waters. It typically dives to depths of 20–45 metres, using its powerful webbed feet to propel itself underwater.',
      'Nesting pairs form strong bonds and return to the same cliff ledge each year. The nest, built from seaweed and plant material, is often wedged into a narrow fissure or sheltered overhang just above the wave zone.',
      'European Shag populations are sensitive to changes in fish stock availability, particularly sand eels and sprats. Monitoring their breeding success provides scientists with a reliable proxy for the overall health of the near-shore marine ecosystem.'
    ]
  },
  {
    number: '(03)',
    name: 'Peregrine Falcon',
    summary: 'Falco peregrinus is the fastest animal on Earth. Nesting on the high cliffs of Gaztelugatxe, it hunts other birds in breathtaking stoops that can exceed 300 km/h above the Atlantic.',
    body: [
      'The Peregrine Falcon occupies the summit of the avian food chain along the Basque coastline. Its slate-grey upperparts, barred white underside, and distinctive moustache mark make it unmistakable when perched on an exposed cliff face.',
      'Gaztelugatxe\'s dramatic sea cliffs provide ideal nest sites — broad ledges with unobstructed sightlines over both open water and the mainland. A single breeding pair may use the same eyrie for decades, returning each spring to raise their young.',
      'Peregrines hunt almost exclusively in the air, targeting medium-sized birds such as pigeons, waders, and gulls. The iconic stoop — a near-vertical dive with wings half-folded — reaches extraordinary speeds and ends in a precise, lethal strike.',
      'After severe declines caused by organochlorine pesticides in the mid-20th century, Peregrine populations have recovered strongly across Europe. The Gaztelugatxe cliffs now host a small but stable resident population, monitored annually by ornithologists.'
    ]
  },
  {
    number: '(04)',
    name: 'Oystercatcher',
    summary: 'Haematopus ostralegus is a coastal shorebird of the Bay of Biscay, found around Gaztelugatxe foraging along exposed rocky shores shaped by Atlantic waves.',
    body: [
      'At San Juan de Gaztelugatxe, Oystercatchers are present in small numbers, forming a quieter part of the coastal bird community compared to the more visible cliff-nesting seabirds. They are most often seen along the intertidal rocks, especially at low tide.',
      'The rugged coastline of cliffs and boulder fields supports dense populations of mussels, barnacles, and limpets — key food sources for oystercatchers. Using their strong bills, they prise shellfish from the rock and adapt their diet to whatever prey is most abundant locally.',
      'Breeding is likely limited due to steep terrain and human activity on the main islet. Any nesting pairs are more likely to use less disturbed areas such as nearby rocks or the islet of Aketxe, where they nest on open ground above the high tide line.',
      'Although not a dominant species here, oystercatchers play an important ecological role, linking the rich intertidal life of Gaztelugatxe with its wider seabird community.'
    ]
  },
  {
    number: '(05)',
    name: 'Egyptian Vulture',
    summary: 'Neophron percnopterus is a rare and charismatic vulture that passes through the Basque Country during its annual migration between Africa and its Pyrenean breeding grounds each spring and autumn.',
    body: [
      'The Egyptian Vulture is the smallest Old World vulture and one of few birds known to use tools — it cracks eggs by dropping stones onto them with precision. Adults are striking in flight: white bodied with a bare yellow face and contrasting black wing tips.',
      'Gaztelugatxe sits along a key migration corridor connecting Pyrenean breeding populations with their West African wintering grounds. Birds pass through in April and September, riding thermal updrafts that build along the cliff-faces and coastal ridges.',
      'Unlike larger vultures, Egyptian Vultures are opportunistic and varied feeders, taking carrion, eggs, invertebrates, and scraps from fishing activity. Their adaptability makes them useful indicators of food availability in coastal ecosystems.',
      'The species is classified as Endangered globally, with European populations having declined sharply due to poisoning, electrocution on power lines, and wind turbine collisions. Cross-border conservation partnerships across Spain, France, and Morocco are working to reverse the trend.'
    ]
  }
];

const flora = [
  {
    number: '(01)',
    name: 'Rock Sea Lavender',
    summary: 'Limonium binervosum is a salt-tolerant cliff plant found on the exposed rock faces of Gaztelugatxe, adapted to survive wind, spray, and minimal soil.',
    body: [
      'Rock sea lavender grows in crevices and ledges along the steep cliffs, where few other plants can survive. Its low, tufted form helps it resist strong Atlantic winds and constant salt spray.',
      'This species is one of the most characteristic plants of the Gaztelugatxe coastline, forming small patches of colour against otherwise bare rock.',
      'It thrives in extremely thin soils, drawing nutrients from accumulated organic matter and moisture trapped in cracks in the limestone.',
      'Together with other halophytes, it forms the first layer of vegetation in the vertical ecosystem of the cliffs.'
    ]
  },
  {
    number: '(02)',
    name: 'Wild Olive',
    summary: 'Olea europaea (wild form) is an ancient coastal tree, scattered across sheltered slopes where it stabilises soil and forms part of the evergreen vegetation.',
    body: [
      'Wild olive trees grow on more stable slopes above the cliffs, where deeper soils allow larger plants to establish.',
      'These trees are considered the ancestral form of cultivated olives and have been recorded along this coast for centuries.',
      'Their tough, evergreen leaves help them withstand dry conditions and coastal winds while providing structure to the landscape.',
      'They often grow alongside holm oak, forming small patches of Mediterranean-type woodland within the Atlantic environment.'
    ]
  },
  {
    number: '(03)',
    name: 'Holm Oak',
    summary: 'Quercus ilex is a hardy evergreen oak that forms dense woodland on rocky soils, creating shaded habitats above the exposed coastal slopes.',
    body: [
      'Holm oak appears on upper slopes and inland areas where conditions are less exposed than the cliff edge.',
      'Its dense canopy creates a darker, more sheltered environment compared to the open coastal scrub below.',
      'This tree is well adapted to poor, rocky soils and plays an important role in stabilising the terrain.',
      'Around Gaztelugatxe, it forms part of a transition from low coastal vegetation to more complex woodland ecosystems.'
    ]
  },
  {
    number: '(04)',
    name: 'Heather',
    summary: 'Erica species form low, wind-shaped shrubs across exposed slopes, contributing to the coastal scrub that dominates higher ground.',
    body: [
      'Heather grows across the upper cliffs and exposed slopes, where it forms dense, low mats shaped by wind.',
      'It is well adapted to poor soils and harsh conditions, thriving where larger plants cannot.',
      'During flowering season, it adds colour to the landscape and provides nectar for insects.',
      'Heather is a key component of the scrub layer that connects cliff vegetation with woodland above.'
    ]
  },
  {
    number: '(05)',
    name: 'Gorse',
    summary: 'Ulex species are spiny shrubs that form dense thickets, protecting soil and providing shelter for wildlife across the Gaztelugatxe slopes.',
    body: [
      'Gorse grows alongside heather on exposed slopes, forming thick, spiny vegetation that is difficult to penetrate.',
      'Its structure helps protect fragile soils from erosion caused by wind and rain.',
      'These shrubs provide shelter for small animals and nesting birds, adding ecological value beyond their tough exterior.',
      'Gorse plays a key role in the transition between bare coastal rock and more developed plant communities inland.'
    ]
  }
];

const ocean = [
  {
    number: '(01)',
    name: 'Stalked Barnacle',
    summary: 'Pollicipes pollicipes, locally known as percebes, forms dense colonies on wave-battered rocks, supporting a rich intertidal community along the Basque coast.',
    body: [
      'Stalked barnacles attach firmly to exposed rocks in the intertidal zone, where crashing waves provide the constant water flow needed for filter-feeding on plankton.',
      'Dense clusters of percebes create microhabitats for small snails, juvenile crabs, and other invertebrates, forming a three-dimensional “reef” on the rock surface.',
      'Due to their high culinary and economic value, harvesting is strictly regulated and physically challenging, helping maintain healthy populations at Gaztelugatxe.',
      'These barnacles are considered keystone species in the local intertidal ecosystem, indicating both ecological health and the productivity of wave-exposed rocky shores.'
    ]
  },
  {
    number: '(02)',
    name: 'Wrasses',
    summary: 'Colorful wrasses such as Baillon’s and rainbow wrasse inhabit shallow rocky reefs, controlling invertebrate populations and using algae as nursery habitat.',
    body: [
      'Wrasses are among the most visible fish for divers and snorkelers, with bright markings in green, blue, and orange that stand out against the red calcareous algae.',
      'They forage during the day on small crustaceans, molluscs, and worms, helping regulate invertebrate populations and indirectly influencing algal growth.',
      'Juvenile wrasses rely on crevices and algal thickets for shelter, making the combination of rocky substrate and red algae critical for their life cycle.',
      'Their abundance and activity are indicators of healthy reef ecosystems, reflecting both biodiversity and water quality in the Gaztelugatxe area.'
    ]
  },
  {
    number: '(03)',
    name: 'Coastal Predatory Fish',
    summary: 'European sea bass, whiting pout, and horse mackerel occupy mid-level trophic roles, linking rocky reefs to offshore predator communities.',
    body: [
      'Sea bass are versatile predators hunting smaller fish, crustaceans, and cephalopods near the bottom, especially in turbulent nearshore waters.',
      'Whiting pout patrol rocky substrates and mixed algal areas, feeding on invertebrates and small fish, while horse mackerel form mid-water schools consuming plankton and juveniles.',
      'These species connect the productive reef communities to larger offshore food webs and serve as key targets for local recreational and small-scale fisheries.',
      'Monitoring their abundance provides insights into the overall productivity and ecological balance of the Gaztelugatxe coastal waters.'
    ]
  },
  {
    number: '(04)',
    name: 'Key Invertebrates',
    summary: 'A rich community of sea urchins, crabs, octopus, and anemones thrives on rocky reefs, shaping the structure and function of the intertidal ecosystem.',
    body: [
      'Purple sea urchins graze on algae, sometimes creating “barrens” if populations are high, while sea cucumbers recycle organic matter from the sediment.',
      'Sea anemones capture passing plankton with stinging tentacles, adding color and ecological complexity to rock crevices and overhangs.',
      'Octopuses and large crabs are top invertebrate predators, hunting smaller crustaceans, molluscs, and fish, and are also harvested by local fisheries.',
      'Together, these species maintain the balance of the rocky reef ecosystem, influencing both the abundance of algae and the survival of smaller fauna.'
    ]
  },
  {
    number: '(05)',
    name: 'Red Algae and Mixed Algal Cover',
    summary: 'Calcareous red algae and other marine algae form dense underwater “forests” that provide food and shelter for fish and invertebrates on rocky reefs.',
    body: [
      'Red algae photosynthesize, producing organic matter that feeds grazers such as urchins, snails, and juvenile fish.',
      'They also provide complex physical structure used by wrasses and other small species for shelter, hiding from predators and establishing nurseries.',
      'In deeper or more sheltered areas, mixed algal gardens of red, brown, and green species increase habitat complexity, biodiversity, and overall productivity.',
      'This submerged algal layer is a foundational element of the ecosystem, making the exposed rocky reefs of Gaztelugatxe surprisingly rich despite strong wave action.'
    ]
  }
];

const climate = [
  {
    number: '(01)',
    name: 'The Biotope',
    summary: 'San Juan de Gaztelugatxe is a protected biotope in the Basque Country, recognised for its exceptional natural and geological heritage along the Atlantic coast.',
    body: [
      'The biotope designation protects the entire coastal strip, including the islet, its cliffs, and the surrounding marine environment from development and intensive human use.',
      'The site is managed by the Basque Government and sits within the broader Urdaibai Biosphere Reserve network, connecting it to a wider framework of Atlantic coastal conservation.',
      'Protection covers not only the visible landscape but also the submerged rocky reefs, intertidal zones, and the cliff-nesting bird colonies that depend on undisturbed conditions.',
      'Visitor access is carefully managed through the single stone causeway, naturally limiting the number of people who can reach the islet at any one time.'
    ]
  },
  {
    number: '(02)',
    name: 'Aketxe Island',
    summary: 'The smaller uninhabited islet of Aketxe lies just offshore, serving as an undisturbed sanctuary for nesting seabirds and marine wildlife away from visitor access.',
    body: [
      'Aketxe is entirely inaccessible to the public, making it one of the most undisturbed coastal habitats in the Basque Country.',
      'Its cliff ledges and rocky shores provide safe nesting sites for Yellow-legged Gulls, Shags, and Oystercatchers that would otherwise be disturbed on the main islet.',
      'The waters surrounding Aketxe are among the most productive in the area, with dense invertebrate communities and clear visibility that support diving seabirds.',
      'The island functions as a natural control site for ecological monitoring, allowing scientists to compare wildlife behaviour and population health with areas exposed to human activity.'
    ]
  },
  {
    number: '(03)',
    name: 'Vegetation',
    summary: 'The plant communities of Gaztelugatxe form a layered transition from bare salt-sprayed rock at the cliff edge to sheltered evergreen woodland on inland slopes.',
    body: [
      'Vegetation zones are sharply defined by exposure, with halophytes like rock sea lavender occupying the most hostile cliff faces and heather and gorse dominating open slopes above.',
      'Wild olive and holm oak appear on more sheltered terrain, forming small but structurally complex woodland patches that support a different suite of insects and birds.',
      'The vegetation also plays a critical role in soil stabilisation, binding the thin soils on upper slopes against erosion caused by Atlantic storms and heavy seasonal rainfall.',
      'Because the biotope is protected, the plant communities have been able to recover from earlier grazing and cutting pressure, with scrub and woodland gradually expanding in less visited areas.'
    ]
  },
  {
    number: '(04)',
    name: 'Geography',
    summary: 'Gaztelugatxe is shaped by Cretaceous limestone folded into dramatic ridges and eroded by Atlantic wave action into a landscape of sea stacks, arches, and deep fissures.',
    body: [
      'The islet itself is a remnant of a limestone ridge that once extended further into the sea, gradually isolated by wave erosion cutting through weaker rock along joint lines and fault zones.',
      'The 241-step causeway follows the natural crest of this ridge, connecting the islet to the mainland across a narrow neck of rock shaped by centuries of sea cutting.',
      'Geological features include sea caves, wave-cut platforms, and vertical cliff faces that expose the tilted limestone strata laid down approximately 100 million years ago.',
      'The combination of hard limestone and intense Atlantic wave energy creates a landscape that is still actively changing, with rockfalls and cliff recession continuing to reshape the coastline.'
    ]
  },
  {
    number: '(05)',
    name: 'Coastal Weather System',
    summary: 'The Bay of Biscay drives a powerful and unpredictable coastal climate at Gaztelugatxe, with frequent Atlantic storms, strong westerly winds, and high annual rainfall shaping the entire ecosystem.',
    body: [
      'The site sits on the southern edge of the Bay of Biscay, fully exposed to Atlantic weather systems that arrive without obstruction across hundreds of kilometres of open ocean.',
      'Winter storms regularly generate waves exceeding 6–8 metres at the cliff base, driving salt spray far inland and limiting which plants and animals can survive on exposed surfaces.',
      'Despite the harsh conditions, the maritime climate keeps temperatures mild year-round, rarely falling below 5°C in winter or exceeding 25°C in summer, creating stable conditions for resident species.',
      'Fog and low cloud are common in spring and autumn as warm air meets cold upwelling water offshore, reducing visibility but contributing to the high humidity that supports the dense coastal vegetation.'
    ]
  }
];


/* ══════════════════════════════════════════
   GENERIC MODULE FACTORY
   Creates an independent, self-contained tab
   switcher for any dataset.
══════════════════════════════════════════ */
function initModule({ thumbSelector, heroEl, numberEl, nameEl, summaryEl, bodyEl, dataset }) {
  const thumbs = document.querySelectorAll(thumbSelector);

  function fadeEls(els) {
    els.forEach(el => {
      el.classList.remove('species-fade');
      void el.offsetWidth; // force reflow
      el.classList.add('species-fade');
    });
  }

  function updateDetail(index) {
    const d = dataset[index];
    numberEl.textContent  = d.number;
    nameEl.textContent    = d.name;
    summaryEl.textContent = d.summary;
    bodyEl.innerHTML      = d.body.map(p => `<p>${p}</p>`).join('');
    fadeEls([numberEl, nameEl, summaryEl, bodyEl]);
  }

  // Set initial hero background
  if (thumbs[0] && thumbs[0].dataset.img) {
    heroEl.style.backgroundImage = `url(${thumbs[0].dataset.img})`;
  }

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function () {
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      updateDetail(parseInt(this.dataset.index));
      if (this.dataset.img) {
        heroEl.style.backgroundImage = `url(${this.dataset.img})`;
      }
    });
  });
}

/* ── Birds ── */
initModule({
  thumbSelector: '.bird-thumb',
  heroEl:     document.getElementById('birdHero'),
  numberEl:   document.getElementById('birdNumber'),
  nameEl:     document.getElementById('birdName'),
  summaryEl:  document.getElementById('birdSummary'),
  bodyEl:     document.getElementById('birdBody'),
  dataset:    birds
});

/* ── Flora ── */
initModule({
  thumbSelector: '.flora-thumb',
  heroEl:     document.getElementById('floraHero'),
  numberEl:   document.getElementById('floraNumber'),
  nameEl:     document.getElementById('floraName'),
  summaryEl:  document.getElementById('floraSummary'),
  bodyEl:     document.getElementById('floraBody'),
  dataset:    flora
});

/* ── Ocean ── */
initModule({
  thumbSelector: '.ocean-thumb',
  heroEl:     document.getElementById('oceanHero'),
  numberEl:   document.getElementById('oceanNumber'),
  nameEl:     document.getElementById('oceanName'),
  summaryEl:  document.getElementById('oceanSummary'),
  bodyEl:     document.getElementById('oceanBody'),
  dataset:    ocean
});

/* ── Climate ── */
initModule({
  thumbSelector: '.climate-thumb',
  heroEl:     document.getElementById('climateHero'),
  numberEl:   document.getElementById('climateNumber'),
  nameEl:     document.getElementById('climateName'),
  summaryEl:  document.getElementById('climateSummary'),
  bodyEl:     document.getElementById('climateBody'),
  dataset:    climate
});

/* ── Filter tabs ── */
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});