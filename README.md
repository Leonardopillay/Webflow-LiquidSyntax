# Webflow-LiquidSyntax

Solve Webflow’s two most persistent UX pain points — for real.

Built by [Bryce Wooster](https://www.linkedin.com/in/brycewdesign/), this repo demonstrates god-level precision in problem-solving UX/UI challenges Webflow designers, developers, and content editors silently endure every day.

## 🔧 Solutions Included

### 1. Accessible Custom Dropdown (no jank)

📂 `/custom-dropdown/`  
Solves Webflow’s native dropdown issues:

- Keyboard accessible (ARIA-compliant)
- Fully styleable (via CSS, no Webflow overrides)
- Vanilla JS (no jQuery)
- Clean output for Webflow Embed component

💻 Usage:
```bash
# Clone or copy into Webflow Embed
<link rel="stylesheet" href="dropdown.css">
<script src="dropdown.js"></script>

Place HTML markup inside an Embed Block or export your Webflow site.

🧪 Try in CodePen: Accessible Dropdown Demo

2. CSV to Webflow CMS JSON CLI
📂 /csv-importer/

A zero-dependency Node.js tool to convert a structured CSV into Webflow CMS–compatible JSON for import or Make/Integromat API workflows.

📁 Example structure:

sample.csv — your raw data

map.json — how to rename CSV headers to Webflow field names

webflow-import.json — auto-generated JSON payload

🛠 Install & Run

cd csv-importer
npm install
node cli.js sample.csv map.json

🔁 Output is written to: webflow-import.json

This can then be used in:

Zapier / Make / Integromat integrations

Webflow CMS Importers

Manual workflows when bulk content upload is needed

🧠 Why This Repo?
These fixes demonstrate how user-centric, developer-grade design can completely eliminate the recurring frustration felt by thousands of Webflow professionals.

Want more elegant solutions like this?

📬 Hire the creator: Bryce Wooster
🔨 UX Systems Thinker · Code Enthusiast · Problem Eradicator
🎯 Portfolio: [Link coming soon]

🪪 License
MIT License — see LICENSE

📣 Legal / Attribution
This project is not affiliated with or endorsed by Webflow Inc. "Webflow" is a registered trademark of Webflow, Inc. Use of the name is for informational and interoperability purposes only.
All code herein is original work by Bryce Wooster unless otherwise noted.
