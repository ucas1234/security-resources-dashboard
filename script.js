// Fetch the resources from the JSON file
fetch('resources.json')
  .then(response => response.json())
  .then(data => {
    const navbarLinks = document.querySelectorAll('#navbar a');
    const cardsContainer = document.getElementById('cards-container');

    // Function to generate a card for a resource
    function generateCard(resource) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="images/${resource.image}" alt="${resource.name}">
        <h3>${resource.name}</h3>
        <p>${resource.description}</p>
        <a href="${resource.link}" target="_blank">Visit Resource</a>
        <div class="card-footer">
          <strong>Wavestone Use Cases:</strong> ${resource.wavestoneUseCases}
        </div>
        <div class="card-footer">
          <small>${resource.primaryTopic} | ${resource.secondaryTopic} | ${resource.tertiaryTopic} | ${resource.quaternaryTopic}</small>
        </div>
      `;
      return card;
    }

    // Function to filter and display the cards based on the selected topic
    function displayCards(topic) {
      cardsContainer.innerHTML = '';
      const filteredResources = data.filter(resource => resource.primaryTopic.toLowerCase() === topic.toLowerCase());

      filteredResources.forEach(resource => {
        const card = generateCard(resource);
        cardsContainer.appendChild(card);
      });
    }

    // Event listener for navbar clicks
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const topic = e.target.dataset.topic;
        displayCards(topic);
      });
    });

    // Initially display cards for the first topic
    displayCards('general-community-tools');
  })
  .catch(error => console.error('Error loading resources:', error));
