# Webflow Liquid Syntax 🚀

![Webflow Liquid Syntax](https://img.shields.io/badge/Webflow%20Liquid%20Syntax-v1.0-blue)

Welcome to the **Webflow Liquid Syntax** repository! This project addresses two major pain points in Webflow: broken dropdown behavior and the absence of bulk CMS import tools. Our solution includes a fully accessible custom dropdown component and a Node.js CLI for converting CSV files into Webflow CMS JSON format. This repository is designed for real-world deployment, ensuring that your workflow remains smooth and efficient.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Custom Dropdown Component](#custom-dropdown-component)
- [CSV to Webflow CMS JSON Converter](#csv-to-webflow-cms-json-converter)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Features

- **Custom Dropdown Component**: A fully accessible dropdown that enhances user experience and ensures compliance with accessibility standards.
- **CSV to JSON Conversion**: A Node.js CLI tool that converts CSV files into the JSON format required by Webflow CMS, streamlining your content import process.
- **Real-World Application**: Built with practical deployment in mind, ensuring that you can use these tools in your projects without hassle.

## Installation

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/Leonardopillay/Webflow-LiquidSyntax.git
cd Webflow-LiquidSyntax
```

Next, install the required dependencies:

```bash
npm install
```

## Usage

### Custom Dropdown Component

To use the custom dropdown component, simply include it in your project. You can customize its appearance and behavior to fit your needs. The component is built to be responsive and accessible, ensuring that all users can interact with it seamlessly.

### CSV to Webflow CMS JSON Converter

To convert your CSV files into the Webflow CMS JSON format, use the following command:

```bash
node cli/convert.js path/to/your/file.csv
```

This command will generate a JSON file that you can directly import into your Webflow CMS. 

For more detailed usage instructions, check the `docs` folder in the repository.

## Custom Dropdown Component

The custom dropdown component is designed to improve user interaction on your Webflow site. It adheres to accessibility standards, making it usable for everyone. 

### Key Features of the Dropdown

- **Keyboard Navigation**: Users can navigate through options using keyboard arrows.
- **Screen Reader Compatibility**: The component is designed to work well with screen readers, providing a better experience for visually impaired users.
- **Customizable Styles**: Easily change the appearance to match your site's theme.

### Example Implementation

Here’s a simple example of how to implement the dropdown:

```html
<div class="dropdown">
  <button class="dropbtn">Select an Option</button>
  <div class="dropdown-content">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
  </div>
</div>
```

You can find more examples and detailed documentation in the `docs` folder.

## CSV to Webflow CMS JSON Converter

The CSV to JSON converter is a powerful tool that saves you time and effort when importing content into Webflow. This tool allows you to take bulk data in CSV format and convert it to the JSON structure that Webflow requires.

### Features of the Converter

- **Batch Processing**: Convert multiple CSV files at once.
- **Error Handling**: The tool provides clear error messages if the CSV format is incorrect.
- **Custom Mapping**: Map your CSV columns to Webflow fields easily.

### Example Usage

To convert a CSV file, run the following command:

```bash
node cli/convert.js path/to/your/file.csv
```

The output will be a JSON file ready for import into Webflow.

## Accessibility

Accessibility is a core principle of this project. We aim to create tools that are usable by everyone, regardless of their abilities. The custom dropdown component is built with accessibility in mind, ensuring that it meets the necessary standards.

### Why Accessibility Matters

- **Inclusivity**: Ensures that all users can access your content.
- **Legal Compliance**: Many regions have laws requiring digital accessibility.
- **Improved User Experience**: Accessible sites often perform better in terms of user engagement.

## Contributing

We welcome contributions from the community! If you want to improve the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Open a pull request.

Please ensure your code follows our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Links

For the latest releases and updates, please visit our [Releases page](https://github.com/Leonardopillay/Webflow-LiquidSyntax/releases). Here, you can download the latest version and check for any updates or fixes.

If you encounter any issues or have questions, feel free to check the "Releases" section for guidance.

Thank you for your interest in **Webflow Liquid Syntax**! We hope these tools enhance your Webflow experience.