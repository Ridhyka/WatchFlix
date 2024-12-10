# WatchFlix

WatchFlix is a web application that provides movie recommendations. It fetches data from The Movie Database (TMDb) API and displays popular, trending, and top-rated movies. Users can search for movies, view details, and watch trailers.

## Features

- Display popular, trending, and top-rated movies
- Search for movies
- View movie details including title, overview, genres, ratings, and runtime
- Watch movie trailers
- Responsive design

## Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Install Dependencies

1. Clone the repository:

    ```bash
    git clone https://github.com/Ridhyka/WatchFlix.git
    ```

2. Navigate to the project directory:

    ```bash
    cd WatchFlix
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables:
   
    Create a `.env` file in the root directory and add your API key for TMDb:

    ```bash
    REACT_APP_TMDB_API_KEY=<your-api-key>
    ```

    You can get an API key by signing up at [TMDb](https://www.themoviedb.org/).

### Run the App

Start the development server:

```bash
npm run dev
```

