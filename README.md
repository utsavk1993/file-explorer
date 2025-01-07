# File Explorer

This project demonstrates the ability to build an intuitive and interactive file system explorer using **Vanilla JavaScript**, **HTML**, and **CSS**.

It provides a clean UI to navigate directories and view files without frameworks or libraries.

![Screenshot 2025-01-03 at 11 53 11 PM](https://github.com/user-attachments/assets/055c83fc-3476-44d0-ae5a-8c95e811b883)

[View the demo](https://file-explorer-gamma-rose.vercel.app/)

## Problem Statement

This project is inspired by a customer requirement to create a UI for exploring a file system, with the following key features:

- **Sidebar** for displaying the directory tree
- **Main pane** for listing the files and folders of the selected directory

## Acceptance criteria

- The component is divided into two panes:
    - **Left pane:** Folder tree (expandable and collapsible)
    - **Right pane:** File and folder list for the selected directory
- Users can select folders in either pane to update the contents displayed
- The application uses a predefined structure for folder and file data:
```
const fileSystem = [
  {
    type: 'folder',
    name: 'Documents',
    modified: new Date('2025-01-01'),
    size: 0,
    children: [
      {
        type: 'file',
        name: 'Resume.pdf',
        modified: new Date('2025-01-02'),
        size: 1048576,
      },
      {
        type: 'folder',
        name: 'Projects',
        modified: new Date('2024-12-25'),
        size: 0,
        children: [],
      },
    ],
  },
];
```

## Key Features

- 🗂️ Directory Tree View: Expand and collapse folders in a sidebar
- 📄 File List: Display details of files and folders such as name, size, and last modified date
- 🔄 Dynamic UI: Seamless updates when navigating between folders
- 🎯 Vanilla JavaScript: Lightweight, fast, and dependency-free implementation
- 📱 Responsive Design: Works beautifully on all screen sizes

## Tech Stack

- 🖥️ Vanilla JavaScript: Dynamic interactions without frameworks
- 📄 HTML5: Structuring the UI
- 🎨 CSS3: Styling for modern and responsive design
- 🌐 HTTP-Server: Serving the app for local development

## Running the Project

- Install Node.js: Follow the Node.js installation guide
- Install HTTP Server: Run `npm install -g http-server` in your terminal
- Start the Server: Navigate to the project directory and run `http-server`
- Access the App: Open the default URL, typically `http://localhost:8080`

### Running Tests

- Navigate to the project directory
- Install dependencies: `npm install`
- Run tests: `npm test`

