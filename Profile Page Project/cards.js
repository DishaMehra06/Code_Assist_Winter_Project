const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const profileId = card.getAttribute('data-id');
        // Redirect to the full profile page (URL can be customized as needed)
        window.location.href = '2ndpage.html'; // Redirect to 2ndpage.html
      });
    });
    const githubIcons = document.querySelectorAll('.github-icon');

githubIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const githubLink = icon.getAttribute('data-github');
    if (githubLink) {
      window.open(githubLink, '_blank'); // Open GitHub profile in a new tab
    }
  });
});
