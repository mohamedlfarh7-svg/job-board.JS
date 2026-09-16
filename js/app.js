import { fetchOffres } from './data.js';
import { renderOffers } from './render.js';
import { filterAndSortOffres } from './filters.js';

let allOffres = [];

const searchInput = document.getElementById('search-input');
const typeSelect = document.getElementById('type-select');
const villeSelect = document.getElementById('ville-select');
const techSelect = document.getElementById('tech-select');
const countBadge = document.getElementById('count-badge');
const totalCountText = document.getElementById('total-count-text');
const container = document.getElementById('listings');

function updateUI() {
  const criteria = {
    search: searchInput ? searchInput.value : '',
    typeContrat: typeSelect ? typeSelect.value : '',
    ville: villeSelect ? villeSelect.value : '',
    tech: techSelect ? techSelect.value : ''
  };

  const filtered = filterAndSortOffres(allOffres, criteria);

  // تحديث الأعداد
  if (countBadge) {
    countBadge.textContent = `${filtered.length} offres`;
  }
  if (totalCountText) {
    totalCountText.textContent = `${filtered.length} offre(s) disponible(s)`;
  }

  renderOffers(filtered); 
}

async function initApp() {
  if (container) {
    container.innerHTML = '<p>Chargement des offres...</p>';
  }

  allOffres = await fetchOffres();
  
  console.log("Données chargées:", allOffres);

  updateUI();

  if (searchInput) searchInput.addEventListener('input', updateUI);
  if (typeSelect) typeSelect.addEventListener('change', updateUI);
  if (villeSelect) villeSelect.addEventListener('change', updateUI);
  if (techSelect) techSelect.addEventListener('change', updateUI);
}

initApp();