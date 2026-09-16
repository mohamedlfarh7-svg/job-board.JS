import { fetchOffres } from './data.js';
import { renderOffres } from './render.js';
import { filterAndSortOffres } from './filters.js';

let allOffres = [];

const searchInput = document.getElementById('search-input');
const typeSelect = document.getElementById('type-select');
const villeSelect = document.getElementById('ville-select');
const techSelect = document.getElementById('tech-select');
const countBadge = document.getElementById('count-badge');
const container = document.getElementById('listings');

function updateUI() {
  const criteria = {
    search: searchInput.value,
    typeContrat: typeSelect.value,
    ville: villeSelect.value,
    tech: techSelect.value
  };

  const filtered = filterAndSortOffres(allOffres, criteria);

  countBadge.textContent = `${filtered.length} offres`;

  renderOffres(filtered, container);
}

async function initApp() {
  allOffres = await fetchOffres();
  updateUI();

  searchInput.addEventListener('input', updateUI);
  typeSelect.addEventListener('change', updateUI);
  villeSelect.addEventListener('change', updateUI);
  techSelect.addEventListener('change', updateUI);
}

initApp();

