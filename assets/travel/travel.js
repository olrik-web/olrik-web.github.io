// Load travel images from JSON and render them into the grid
fetch('/assets/travel/images.json')
  .then(response => {
    if (!response.ok) throw new Error(`Failed to load images: ${response.status}`);
    return response.json();
  })
  .then(data => {
    const grid = document.getElementById('travelGrid');
    const emptyState = document.getElementById('emptyState');

    if (!data.images || data.images.length === 0) {
      emptyState.style.display = 'block';
      return;
    }

    data.images.forEach(img => {
      const article = document.createElement('article');
      article.className = 'travel-item';

      const image = document.createElement('img');
      image.src = `/assets/travel/${img.filename}`;
      image.alt = img.caption || '';
      image.loading = 'lazy';
      article.appendChild(image);

      if (img.location || img.date) {
        const overlay = document.createElement('div');
        overlay.className = 'travel-overlay';

        if (img.location) {
          const location = document.createElement('span');
          location.className = 'travel-location';
          location.textContent = img.location;
          overlay.appendChild(location);
        }

        if (img.date) {
          const date = document.createElement('span');
          date.className = 'travel-date';
          date.textContent = img.date;
          overlay.appendChild(date);
        }

        article.appendChild(overlay);
      }

      grid.appendChild(article);
    });
  })
  .catch(() => {
    document.getElementById('emptyState').style.display = 'block';
  });
