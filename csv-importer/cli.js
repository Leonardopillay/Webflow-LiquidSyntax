#!/usr/bin/env node

import fs from "fs";
import path from "path";
import csv from "csv-parser";

const inputFile = process.argv[2];
const mapFile = process.argv[3] || "./map.json";

if (!inputFile) {
  console.error("❌ Usage: node cli.js <input.csv> [map.json]");
  process.exit(1);
}

if (!fs.existsSync(inputFile)) {
  console.error(`❌ File not found: ${inputFile}`);
  process.exit(1);
}

if (!fs.existsSync(mapFile)) {
  console.error(`❌ Mapping file not found: ${mapFile}`);
  process.exit(1);
}

const fieldMap = JSON.parse(fs.readFileSync(mapFile));
const results = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    const transformed = {};
    for (const [csvField, webflowField] of Object.entries(fieldMap)) {
      transformed[webflowField] = row[csvField] ?? null;
    }
    results.push(transformed);
  })
  .on("end", () => {
    const outputPath = path.resolve(process.cwd(), "webflow-import.json");
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`✅ Done! Output written to: ${outputPath}`);
  });
