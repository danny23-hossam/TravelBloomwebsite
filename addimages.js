import fs from "fs";
import path from "path";
import fetch from "node-fetch";

// Input/output paths
const inputFilePath = path.join(process.cwd(), "file.json");
const outputFilePath = path.join(process.cwd(), "file_with_images.json");

// Special custom descriptions for famous cities
const specialDescriptions = {
  "Alexandria": "Alexandria is famous for its ancient library and Mediterranean charm.",
  "Cairo": "Cairo is the capital of Egypt and home to the iconic Pyramids of Giza.",
  "Paris": "Paris is known as the City of Lights and the Eiffel Tower.",
  "London": "London is the capital of the UK, rich in history and culture.",
  "New York": "New York City is the Big Apple, famous for Times Square and Statue of Liberty.",
  // Add more famous cities here if needed
};

// Function to fetch Wikipedia description
async function fetchWikiDescription(query) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return data.extract || null;
  } catch (err) {
    console.warn(`❌ Error fetching description for ${query}: ${err.message}`);
    return null;
  }
}

// Main processing function
async function processFile() {
  let data = JSON.parse(fs.readFileSync(inputFilePath, "utf8"));

  for (const country of data) {
    if (Array.isArray(country.states)) {
      const updatedStates = [];
      for (const state of country.states) {
        const stateName = typeof state === "string" ? state : state.name;

        // Use special description if exists
        let description = specialDescriptions[stateName];

        // If no special description, try Wikipedia
        if (!description) {
          description =
            (await fetchWikiDescription(`${stateName}, ${country.name}`)) ||
            `${stateName} is a notable city in ${country.name}, known for its landmarks, culture, and history.`;
        }

        // Set public image
        const image = `https://picsum.photos/seed/${encodeURIComponent(stateName)}/600/400`;

        updatedStates.push({ name: stateName, image, description });
        console.log(`✅ Updated: ${stateName}, ${country.name}`);
      }
      country.states = updatedStates;
    } else {
      console.warn(`⚠️ 'states' missing or not array for country: ${country.name}`);
    }
  }

  // Save updated JSON
  fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), "utf8");
  console.log("🎉 All countries updated with images and descriptions!");
}

// Run
processFile();
