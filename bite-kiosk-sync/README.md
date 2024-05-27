# Bite Kiosk Menu Sync

This project is a simple server that syncs menu data from a third-party POS API into Bite's database when the `/trigger-sync` endpoint is called.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Files and Directories](#files-and-directories)
- [Endpoints](#endpoints)
- [Logging](#logging)
- [Technologies Used](#technologies-used)
- [Author](#author)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/VarunSunderRajan/bite-kiosk-sync.git
    cd bite-kiosk-sync
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. Trigger the menu sync by making a GET request to the `/trigger-sync` endpoint:
    ```bash
    curl http://localhost:3000/trigger-sync
    ```

## Files and Directories

- `db.js`: Contains the database configuration and models.
- `index.js`: The entry point of the server, sets up the Express app and defines the `/trigger-sync` endpoint.
- `logger.js`: Configures the Winston logger for logging messages.
- `sync.js`: Contains the logic for syncing the menu data from the third-party POS API.
- `package.json`: Lists the project dependencies and scripts.
- `README.md`: Provides an overview of the project, installation steps, usage, and other relevant information.
- `database.sqlite`: The SQLite database file.
- `server.log`: The log file where server logs are stored.

## Endpoints

- **GET** `/trigger-sync`: Triggers the sync process to fetch menu data from the third-party POS API and store it in the database.

## Logging

The server uses Winston for logging. Logs are output to both the console and a file named `server.log`. The logging configuration can be found in `logger.js`.

## Technologies Used

- Node.js
- Express
- Sequelize
- SQLite
- Axios
- Winston

## Author

Varun Sunder Rajan

Feel free to reach out if you have any questions or need further assistance!
