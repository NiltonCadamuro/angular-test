# Angular Dashboard - NX Monorepo
This project is an Angular Dashboard built using NX to manage the repository structure. It features real-time data updates via WebSockets, refreshing every 10 seconds, and uses a fake GraphQL API as its backend.

## Installation
### Prerequisites
Before running the project, ensure you have the following installed:

- Node.js version 18.19.1 or higher
- npm (Node Package Manager)
- NX CLI (automatically installed via npx)
If you do not have Node.js installed or are using a different version, consider using nvm to manage versions.

### Installation Steps
Clone the repository:
```
git clone <repository-url>
cd <project-folder>
```
Install dependencies:
```
npm install
```
## Running the Project
This project requires two terminals to run simultaneously: one for the backend (fake GraphQL API) and one for the frontend (Angular dashboard).

### 1. Start the Fake GraphQL API
In the first terminal, run:
```
npx nx serve apps/fake-graphql-server
```
This will start the fake GraphQL server.

### 2. Start the Dashboard App
In the second terminal, run:
```
npx nx serve apps/dashboard-app
```
This will start the Angular Dashboard application. By default, it should be available at:
```
http://localhost:4200/
```
Real-Time Updates via WebSocket
This dashboard is designed to update data automatically every 10 seconds using WebSockets. It listens for changes and refreshes the UI in real-time.

## Project Structure
````
/project-folder
│── apps/
│ ├── dashboard-app/ (Angular Dashboard Application)
│ ├── fake-graphql-server/ (Fake GraphQL Backend)
│── libs/ (Shared libraries and utilities)
│ ├── core/ (Conections with backend)
│ ├── shared/ (Shared Visual components)
│── nx.json (NX configuration)
│── package.json (Project dependencies & scripts)
│── README.md (Project documentation)
````
## Technologies Used
- Angular (Frontend framework)
- NX (Monorepo management)
- WebSockets (Real-time data updates)
- GraphQL (Fake API)
- Node.js v18.19.1 & npm (Package management)
## Need Help?
If you encounter any issues, ensure you are using Node.js v18.19.1 by running:
```
node -v
```
If you still experience problems, feel free to ask for help.
