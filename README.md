# Movie App

A simple React application that allows users to browse and search for movies using The Movie Database (TMDB) API. Users can also add movies to their favorites list.

## Getting Started

### Prerequisites
- Node.js installed (recommended version: 16 or higher)
- A TMDB API Key (Get one from [TMDB Developer Portal](https://developer.themoviedb.org/reference/intro/getting-started))

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```sh
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

### Usage
- Navigate to `http://localhost:5173/` to browse movies.
- Use the search bar to find specific movies.
- Click the heart icon to add movies to your favorites list.

### License
This project is open source and available under the MIT License.