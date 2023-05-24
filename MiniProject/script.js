// script.js

/**
 * Performs search and filter based on the input values from the search input field, species filter, status filter, and extra filter.
 */
const performSearch = () => {

  // Retrieve input values
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const speciesFilter = document.getElementById("species-filter").value.toLowerCase();
  const statusFilter = document.getElementById("status-filter").value.toLowerCase();
  const extraFilter = document.getElementById("extra-filter").value.toLowerCase();

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardTitle = card.querySelector(".card-title").innerText.toLowerCase();
    const cardSpecies = card.querySelector(".card-species").innerText.toLowerCase();
    const cardStatus = card.querySelector(".status-badge").innerText.toLowerCase();

    const speciesMatch = speciesFilter === "" || cardSpecies.includes(speciesFilter);
    const statusMatch = statusFilter === "" || cardStatus.includes(statusFilter);
    const extraMatch = extraFilter === "";

    // If else condition to seperate cards based on filter search

    if (cardTitle.includes(searchInput) && speciesMatch && statusMatch && extraMatch) {
      card.style.display = "block"; // Show the card
    } else {
      card.style.display = "none"; // Hide the card
    }
  });
};

/**
 * Adds a character card to the website based on the provided character's information.
 @param character - The character object containing name, species, image, and status.*/



const addCharacterCard = (character) => {
  const template = document.getElementById("card-template").content.cloneNode(true);

  const card = template.querySelector(".card");
  const imageElement = template.querySelector(".card-img-top");
  const cardTitle = template.querySelector(".card-title");
  const cardSpecies = template.querySelector(".card-species");
  const statusBadge = template.querySelector(".status-badge");
  const episodeButton = template.querySelector(".episode-button");

  cardTitle.innerText = character.name;
  cardSpecies.innerText = `Species: ${character.species}`;
  imageElement.src = character.image;
  statusBadge.innerText = character.status;

  if (character.status === "Alive") {
    statusBadge.classList.add("alive");
  } else if (character.status === "Dead") {
    statusBadge.classList.add("dead");
  } else {
    statusBadge.classList.add("unknown");
  }

  /**
   * Using Event listener for the episode button to display the list of episodes in an alert box when clicked.
   */
  episodeButton.addEventListener("click", () => {
    const episodeList = character.episode.map((episode) => `Episode - ${episode.split("/").pop()}`);
    const formattedList = episodeList.join("\n");
    alert(`Appearances:\n\n${formattedList}`);
  });

  document.getElementById("card-list").appendChild(template);
};

/**
 * Fetches characters' data from the Rick and Morty API and adds their cards to the website.
 */
const fetchCharacters = async () => {
  try {
    let nextPage = "https://rickandmortyapi.com/api/character";
    let characters = [];

    while (nextPage) {
      const response = await fetch(nextPage);
      const data = await response.json();
      characters = characters.concat(data.results);
      nextPage = data.info.next;
    }

    characters.forEach((character) => {
      addCharacterCard(character);
      populateDropdownOptions(character.species, "species-filter");
      populateDropdownOptions(character.status, "status-filter");
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};

// Helper function to populate dropdown options
const populateDropdownOptions = (value, dropdownId) => {
  const dropdown = document.getElementById(dropdownId);
  
  // Check if the option already exists in the dropdown
  const optionExists = Array.from(dropdown.options).some((option) => option.value.toLowerCase() === value.toLowerCase());
  
  if (!optionExists) {
    const option = document.createElement("option");
    option.value = value.toLowerCase();
    option.text = value;
    dropdown.appendChild(option);
  }
};

// Event listener for the "Clear Filters" button
document.getElementById("clear-button").addEventListener("click", () => {
  // Clear all filter input fields
  document.getElementById("search-input").value = "";
  document.getElementById("species-filter").value = "";
  document.getElementById("status-filter").value = "";
  document.getElementById("extra-filter").value = "";

  performSearch(); // Perform search to reset the card display
});

// Event listener for the "Apply Filters" button
document.getElementById("filter-button").addEventListener("click", () => {
  performSearch(); // Perform search and filter based on selected filters
});

// Event listener for the "Search" button
document.getElementById("search-button").addEventListener("click", (event) => {
  event.preventDefault();
  performSearch(); // Perform search based on the search input field value
});

fetchCharacters(); // Fetch characters' data and add their cards to the website
