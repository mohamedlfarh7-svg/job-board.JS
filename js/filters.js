
export function filterAndSortOffres(offres, criteria) {
  return offres.filter(offre => {
    const matchTech = !criteria.tech || offre.technologies.includes(criteria.tech);

    const matchVille = !criteria.ville || offre.ville === criteria.ville;

    const matchType = !criteria.typeContrat || offre.typeContrat === criteria.typeContrat;

    const search = criteria.search.toLowerCase();
    const matchSearch = !criteria.search || 
      offre.titre.toLowerCase().includes(search) || 
      offre.entreprise.toLowerCase().includes(search);

    return matchTech && matchVille && matchType && matchSearch;
  }).sort((a, b) => {
    
    return new Date(b.datePublication) - new Date(a.datePublication);
  });
}