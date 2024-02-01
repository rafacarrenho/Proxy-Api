// Function to generate random latitude and longitude within a range
const generateRandomLatLng = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Function to generate random markers
const generateRandomMarkers = (count) => {
  const markers = [];
  for (let i = 1; i <= count; i++) {
    markers.push({
      id_stt: i.toString(),
      lat_stt: generateRandomLatLng(-23.4, -23.7), // Latitude range for São Paulo
      lng_stt: generateRandomLatLng(-46.5, -46.9), // Longitude range for São Paulo
      codigo_stt: Math.floor(Math.random() * 1000).toString(), // Random code
      responsavel_stt: "Random Person", // Example placeholder
      nome_stt: `Marker ${i}`, // Marker name
      uf_stt: "SP", // São Paulo state abbreviation
    });
  }
  return markers;
};

const generateIrregularOctagonPoints = () => {
  const points = [];
  const centerLat = -23.5505; // Center latitude for São Paulo
  const centerLng = -46.6333; // Center longitude for São Paulo
  const radius = 0.2; // Radius of the octagon (adjust as needed)
  const angleIncrement = (2 * Math.PI) / 8; // Angle increment for each point (45 degrees)
  for (let i = 0; i < 7; i++) {
    const angle = i * angleIncrement;
    const lat = centerLat + radius * Math.cos(angle) * 1.6;
    const lng = centerLng + radius * Math.sin(angle) * 3;
    points.push({ lat, lng });
  }
  // Close the octagon by adding the first point again
  points.push(points[0]);
  return points;
};

const mapMock = {
  markers: generateRandomMarkers(3),
  polygon: generateIrregularOctagonPoints(),
  lines: generateIrregularOctagonPoints(),
};

export default async (_, res) => {
  res.status(200).json(mapMock);
};
