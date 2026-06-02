function showSection(sectionId) {
    const sections = ["popularno", "filmovi", "serije"];

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (id === sectionId) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
}

function calculateStats() {
  const ratings = document.querySelectorAll('.rating-text');
  let total = 0;
  let max = 0;
  let count = 0;
  
  ratings.forEach(el => {
    const rating = parseFloat(el.textContent.replace('- ', ''));
    total += rating;
    if (rating > max) max = rating;
    count++;
  });
  
  document.getElementById('total-movies').textContent = count;
  document.getElementById('avg-rating').textContent = (total / count).toFixed(1);
  document.getElementById('top-movie').textContent = max;
}

// Pozovi nakon učitavanja
calculateStats();
