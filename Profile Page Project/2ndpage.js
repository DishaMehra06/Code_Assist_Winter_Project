document.addEventListener('DOMContentLoaded', () => {
    // Example: Fetch user data from an API and update the profile
    fetch('https://api.example.com/user')
      .then(response => response.json())
      .then(data => {
        document.querySelector('.user-details h2').textContent = data.username;
        document.querySelector('.user-details p').textContent = Rank: #${data.rank};
        // Update other sections similarly
      })
      .catch(error => console.error('Error fetching user data:', error));
  });
