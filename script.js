const destinations = [
  {
    name: "Mysore",
    climate: "cool",
    distance: "145 km",
    time: "3.5 hours",
    hotels: ["Radisson Blu", "Royal Orchid", "Sandesh The Prince"],
    map: "https://www.google.com/maps?q=Mysore",
    cost: { plane: "₹3000", bus: "₹500", car: "₹1500" }
  },
  {
    name: "Coorg",
    climate: "hill",
    distance: "265 km",
    time: "6 hours",
    hotels: ["Taj Madikeri", "The Tamara", "Heritage Resort"],
    map: "https://www.google.com/maps?q=Coorg",
    cost: { plane: "₹3500", bus: "₹600", car: "₹1800" }
  },
  {
    name: "Ooty",
    climate: "hill",
    distance: "270 km",
    time: "6.5 hours",
    hotels: ["Savoy IHCL", "Fortune Resort", "Gem Park"],
    map: "https://www.google.com/maps?q=Ooty",
    cost: { plane: "₹4000", bus: "₹650", car: "₹2000" }
  },
  {
    name: "Chikmagalur",
    climate: "hill",
    distance: "245 km",
    time: "5.5 hours",
    hotels: ["Gateway Hotel", "Trivik Hotels", "Coffee County"],
    map: "https://www.google.com/maps?q=Chikmagalur",
    cost: { plane: "₹3200", bus: "₹550", car: "₹1700" }
  },
  {
    name: "Hampi",
    climate: "sunny",
    distance: "340 km",
    time: "6 hours",
    hotels: ["Hyatt Place", "Clark's Inn", "Heritage Resort"],
    map: "https://www.google.com/maps?q=Hampi",
    cost: { plane: "₹4500", bus: "₹700", car: "₹2100" }
  },
  {
    name: "Pondicherry",
    climate: "sea",
    distance: "310 km",
    time: "6.5 hours",
    hotels: ["Le Dupleix", "Accord", "Promenade"],
    map: "https://www.google.com/maps?q=Pondicherry",
    cost: { plane: "₹4000", bus: "₹600", car: "₹2000" }
  },
  {
    name: "Kabini",
    climate: "cool",
    distance: "210 km",
    time: "4.5 hours",
    hotels: ["Evolve Back", "The Serai", "Red Earth"],
    map: "https://www.google.com/maps?q=Kabini",
    cost: { plane: "₹3000", bus: "₹500", car: "₹1600" }
  },
  {
    name: "Gokarna",
    climate: "sea",
    distance: "485 km",
    time: "8 hours",
    hotels: ["Kudle Resort", "Namaste Cafe", "Sanskruti Resort"],
    map: "https://www.google.com/maps?q=Gokarna",
    cost: { plane: "₹5000", bus: "₹750", car: "₹2500" }
  },
  {
    name: "Yelagiri",
    climate: "hill",
    distance: "160 km",
    time: "3 hours",
    hotels: ["Sterling Yelagiri", "Leisure Vacations", "Rhythms Resort"],
    map: "https://www.google.com/maps?q=Yelagiri",
    cost: { plane: "₹2800", bus: "₹450", car: "₹1400" }
  },
  {
    name: "Nandi Hills",
    climate: "breezy",
    distance: "60 km",
    time: "1.5 hours",
    hotels: ["Mount Palazzo", "Discovery Village", "Prestige Golfshire"],
    map: "https://www.google.com/maps?q=Nandi+Hills",
    cost: { plane: "N/A", bus: "₹150", car: "₹500" }
  }
];

function askDestination() {
  displayDestinations(destinations);
}

function suggestClimate() {
  document.getElementById("climate-options").style.display = "block";
}

function showSuggestions() {
  const selected = document.getElementById("climateSelect").value;
  const filtered = destinations.filter(dest => dest.climate === selected);
  displayDestinations(filtered);
}

function displayDestinations(list) {
  const container = document.getElementById("destination-list");
  container.innerHTML = "";
  list.forEach(dest => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${dest.name}</h3>
      <p><strong>Distance:</strong> ${dest.distance}</p>
      <p><strong>Time:</strong> ${dest.time}</p>
      <p><strong>Top Hotels:</strong><br>${dest.hotels.join("<br>")}</p>
      <p><strong>Cost:</strong><br>Plane: ${dest.cost.plane}<br>Bus: ${dest.cost.bus}<br>Car: ${dest.cost.car}</p>
      <a href="${dest.map}" target="_blank">📍 View on Map</a><br>
      <button onclick="addToWishlist('${dest.name}')">❤️ Add to Wishlist</button>
    `;
    container.appendChild(card);
  });
}

function addToWishlist(name) {
  alert(name + " has been added to your wishlist!");
}
