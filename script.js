window.onload = function () {
  document.getElementById("welcome-message").innerText =
    "Welcome to your next adventure near Bangalore!";
  loadDestinations();
  showTime();
};

const destinations = [
  { name: "Nandi Hills", climate: "hill", map: "Nandi+Hills" },
  { name: "Mysore", climate: "cool", map: "Mysore" },
  { name: "Coorg", climate: "hill", map: "Coorg" },
  { name: "Chikmagalur", climate: "cool", map: "Chikmagalur" },
  { name: "Hampi", climate: "sunny", map: "Hampi" },
  { name: "Kabini", climate: "breezy", map: "Kabini" },
  { name: "Shivanasamudra Falls", climate: "rainy", map: "Shivanasamudra+Falls" },
  { name: "Gokarna", climate: "sea", map: "Gokarna" },
  { name: "Ooty", climate: "hill", map: "Ooty" },
  { name: "Pondicherry", climate: "sea", map: "Pondicherry" },
];

function showTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("clock").innerText = "Current time: " + timeStr;
  setTimeout(showTime, 1000);
}

function loadDestinations() {
  const list = document.getElementById("destination-list");
  destinations.forEach((place) => {
    const li = document.createElement("li");
    li.textContent = place.name + " (" + place.climate + ")";
    list.appendChild(li);
  });
}

function askPreference(hasDestination) {
  if (hasDestination) {
    alert("Great! Check our top destinations below.");
  } else {
    document.getElementById("suggestion-area").style.display = "block";
  }
}

function suggestDestination() {
  const choice = document.getElementById("climate").value;
  const resultDiv = document.getElementById("result");
  const form = document.getElementById("booking-form");
  const mapDiv = document.getElementById("map-container");

  if (!choice) {
    resultDiv.textContent = "Please select a climate!";
    return;
  }

  const match = destinations.filter((d) => d.climate === choice);
  if (match.length > 0) {
    const random = match[Math.floor(Math.random() * match.length)];
    resultDiv.textContent = `We suggest: ${random.name}`;

    // Show booking form
    form.style.display = "block";

    // Show map
    mapDiv.innerHTML = `
      <iframe
        src="https://www.google.com/maps?q=${random.map}&output=embed"
        allowfullscreen
        loading="lazy"
      ></iframe>`;
  } else {
    resultDiv.textContent = "No destinations found for that climate.";
  }
}

function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your trip has been booked successfully.`);
}
