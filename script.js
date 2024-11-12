const resources = [/* ... data from resources.json */];
const cardContainer = document.getElementById('card-container');
const navLinks = document.querySelectorAll('nav ul li a');

function createCard(resource) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h2>${resource.resourceName}</h2>
    <p>${resource.description}</p>
    <p><strong>Provider:</strong> ${resource.resourceProviderName}</p>
    <a href="${resource.link}" target="_blank">Learn More</a>
    <p><strong>Wavestone Use Cases:</strong> ${resource.wavestoneUseCases.join(', ')}</p>
    <p><strong>Secondary Topic:</strong> ${resource.secondaryTopic}</p>
    <p><strong>Tertiary Topic:</strong> ${resource.tertiaryTopic}</p>
  `;
  cardContainer.appendChild(card);
}

function filterCards(topic) {
  cardContainer.innerHTML = '';
  resources.forEach(resource => {
    if (resource.primaryTopic === topic) {
      createCard(resource);
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const topic = link.dataset.topic;
    filterCards(topic);
  });
});

// Initial load, show all cards
filterCards('All'); // Or a default topic