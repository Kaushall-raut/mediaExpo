# MediaExpo



MediaExpo is a dynamic web application built with React that allows you to search for a vast array of media content, including photos, videos, and GIFs. It aggregates results from popular platforms like Unsplash, Pexels, and Tenor, providing a centralized hub for your media exploration. Users can browse results and save their favorite items into a personal collection that persists across sessions.

## Features

*   **Multi-Source Search**: Fetch photos from Unsplash, videos from Pexels, and GIFs from Tenor.
*   **Tabbed Interface**: Easily switch between searching for photos, videos, and GIFs.
*   **Dynamic Results Grid**: View search results in a clean, responsive grid layout.
*   **Personal Collections**: Save media items to a personal collection for easy access later.
*   **Local Storage Persistence**: Your collection is saved in the browser's local storage, so it's there when you return.
*   **Collection Management**: View your saved items and remove them individually or all at once.
*   **Notifications**: Receive feedback toasts when adding or removing items from your collection.

## Tech Stack

*   **Frontend**: React, React Router
*   **State Management**: Redux Toolkit
*   **Styling**: Tailwind CSS
*   **Build Tool**: Vite
*   **HTTP Client**: Axios

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

*   Node.js and npm (or yarn) installed on your system.
*   API keys from Unsplash, Pexels, and Tenor.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Kaushall-raut/mediaExpo.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd mediaExpo
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

### Configuration

The application requires API keys to fetch media. You'll need to create a `.env` file in the root of the project directory.

1.  Create a file named `.env` in the project root.
2.  Add the following environment variables to the file, replacing the placeholders with your actual API keys:
    ```
    VITE_UNSPLASH_API=your_unsplash_api_key
    VITE_PIXELS_KEY=your_pexels_api_key
    VITE_TENOR_KEY=your_tenor_api_key
    ```

## Available Scripts

In the project directory, you can run the following commands:

*   **`npm run dev`**
    Starts the development server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload when you make changes.

*   **`npm run build`**
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

*   **`npm run preview`**
    Serves the production build from the `dist` folder locally to preview it before deployment.

*   **`npm run lint`**
    Lints the project files for code quality and style issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.