const form = document.getElementById("route-form");
const addressInput = document.getElementById("address");
const times = document.getElementById("times");

const apiKey = "PASTE_YOUR_KEY_HERE";

const schoolLat = 60.2231;
const schoolLon = 24.7586;

const map = L.map("map").setView([60.1719, 24.941], 11);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

let startMarker;
let schoolMarker = L.marker([schoolLat, schoolLon]).addTo(map);
let routeLine;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const address = addressInput.value;

  fetch("https://api.digitransit.fi/geocoding/v1/search?text=" + encodeURIComponent(address), {
    headers: {
      "digitransit-subscription-key": apiKey
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.features.length === 0) {
        alert("Address not found");
        return;
      }

      const coords = data.features[0].geometry.coordinates;
      const startLon = coords[0];
      const startLat = coords[1];

      if (startMarker) {
        map.removeLayer(startMarker);
      }

      startMarker = L.marker([startLat, startLon]).addTo(map);

      const query = `
        {
          plan(
            from: {lat: ${startLat}, lon: ${startLon}}
            to: {lat: ${schoolLat}, lon: ${schoolLon}}
            numItineraries: 1
          ) {
            itineraries {
              startTime
              endTime
              legs {
                mode
                legGeometry {
                  points
                }
              }
            }
          }
        }
      `;

      fetch("https://api.digitransit.fi/routing/v2/hsl/gtfs/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "digitransit-subscription-key": apiKey
        },
        body: JSON.stringify({ query: query })
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (routeData) {
          console.log(routeData);

          const itinerary = routeData.data.plan.itineraries[0];

          if (!itinerary) {
            alert("Route not found");
            return;
          }

          const startTime = new Date(itinerary.startTime);
          const endTime = new Date(itinerary.endTime);

          times.textContent =
            "Start time: " +
            startTime.toLocaleTimeString() +
            " | End time: " +
            endTime.toLocaleTimeString();

          let allPoints = [];

          for (let i = 0; i < itinerary.legs.length; i++) {
            const leg = itinerary.legs[i];
            const points = polyline.decode(leg.legGeometry.points);

            for (let j = 0; j < points.length; j++) {
              allPoints.push(points[j]);
            }
          }

          if (routeLine) {
            map.removeLayer(routeLine);
          }

          routeLine = L.polyline(allPoints, { color: "blue" }).addTo(map);
          map.fitBounds(routeLine.getBounds());
        });
    });
});

