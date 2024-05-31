"use strict";
const stations = [
    { id: 1, name: "Station 1", location: "Location 1" },
    { id: 2, name: "Station 2", location: "Location 2" },
];
const stationList = document.getElementById("station-list");
const addStationButton = document.getElementById("add-station");
const renderStations = () => {
    stationList.innerHTML = "";
    stations.forEach((station) => {
        const stationCard = document.createElement("div");
        stationCard.className = "station-card";
        stationCard.innerHTML = `
        <h3>${station.name}</h3>
        <p>${station.location}</p>
        <button onclick="removeStation(${station.id})">Remove</button>
      `;
        stationList.appendChild(stationCard);
    });
};
const removeStation = (id) => {
    const stationIndex = stations.findIndex((station) => station.id === id);
    if (stationIndex > -1) {
        stations.splice(stationIndex, 1);
        renderStations();
    }
};
addStationButton.addEventListener("click", () => {
    const newStation = {
        id: stations.length + 1,
        name: `Station ${stations.length + 1}`,
        location: `Location ${stations.length + 1}`,
    };
    stations.push(newStation);
    renderStations();
});
renderStations();
