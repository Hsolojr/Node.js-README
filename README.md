# Readme Generator using Node.js

This Node.js-based Readme Generator is a command-line tool that helps you quickly and easily generate a README.md file for your projects. It uses the Inquirer.js library to prompt you for information about your project and then generates a README.md file with the provided details.

## Table of Contents

1. [Installation](#installation)
   - [Using package-lock.json](#using-package-lockjson)
   - [Using package.json](#using-packagejson)
   - [Using index.js](#using-indexjs)
2. [Usage](#usage)
   - [Navigating to the Proper Folder](#navigating-to-the-proper-folder)
   - [Running the Command](#running-the-command)
   - [Answering Prompts](#answering-prompts)
3. [Generated README.md](#generated-readmemd)

---

## Installation

### Using package-lock.json

If you want to install the Readme Generator as a dependency for your project, you can add it to your `package.json` by running:

```bash
npm install Inquirer@...
```

### Using index.js

You can also clone the repository or download the source code and use it directly from your local machine. Here's how:

1. Clone the repository:

   ```bash
   git clone https://github.com/hsolojr/Node.js-README.git
   ```

2. Change into the project directory:

   ```bash
   cd readme-generator
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

---

## Usage

### Navigating to the Proper Folder

Before generating the README.md file, navigate to the folder where you want to create the README.md file. Use the `cd` command to change directories if needed.

```bash
cd path/to/your/project/folder
```

### Running the Command

To run the Readme Generator, use the following command in your terminal:

```bash
node index.js
```

### Answering Prompts

After running the command, the terminal will prompt you with a series of questions about your project. Answer each question as accurately as possible. The questions will typically include details like:

- Project title
- Project description
- Installation instructions
- Usage instructions
- License information
- Contributing guidelines
- Testing instructions
- Contact information

Once you have answered all the prompts, the Readme Generator will generate a `README.md` file in your project folder with all the contents you provided. You can then review and edit the generated README.md file as needed.

---

## Generated README.md

The generated `README.md` file will contain all the information you provided in the prompts. It will have sections such as:

- Project title
- Description
- Table of Contents
- Installation instructions
- Usage instructions
- License information
- Contributing guidelines
- Testing instructions
- Contact information

You can further customize and enhance the generated README.md file to suit your project's needs.

Happy documenting! 📝