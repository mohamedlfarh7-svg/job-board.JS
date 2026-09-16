export async function fetchOffres() {
  try {
    const response = await fetch('./data/offres.json');
    
    if (!response.ok) {
      throw new Error(`HTTP Error status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des offres:", error);
    return [];
  }
}