# React Image Gallery

![Gallery Screenshot]![image](https://github.com/user-attachments/assets/c33a1e5c-e15c-4e58-b87f-4f8566dfc121)
![image](https://github.com/user-attachments/assets/861b7473-2785-4b5c-8d2f-d316668dd2c9)



## Overview

This project is a simple yet professional-looking image gallery built with React. It fetches images from an API and displays them in a grid layout. Users can click on any image to view it in a larger size along with its title and description.

## Features

- Fetches and displays images from an API.
- Displays images in a grid layout with 5 images per row and 4 rows.
- Clicking on an image opens a detailed view with a larger image, title, and description.
- Includes a navbar with links to different sections of the website.
- Error handling for failed API requests.
- Fully responsive design.


## Technologies Used

- React
- Axios
- React Router DOM
- CSS Grid

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/uttam/react-image-gallery.git
    ```

2. Navigate to the project directory:

    ```sh
    cd react-image-gallery
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    npm start
    ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Components

- **Navbar:** The navigation bar at the top of the page.
- **Gallery:** The main component that fetches and displays the images.
- **ImageView:** The component that displays the detailed view of a selected image.

## CSS

All styling is contained within `App.css` for simplicity. The grid layout ensures that 20 images are displayed in a 5x4 grid, filling the entire page.

## API

This project uses the following API endpoints:

- Fetch 20 images: `https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20`
- Fetch a single image by ID: `https://api.slingacademy.com/v1/sample-data/photos/[photo id]`

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Sling Academy API](https://www.slingacademy.com/article/sample-photos-free-fake-rest-api-for-practice/)

