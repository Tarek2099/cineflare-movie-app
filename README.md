# CineFlare Movie App 🎬

A modern web application for discovering and exploring movies, built with React and powered by TMDB API. Features a beautiful UI with real-time search, trending movies section, and detailed movie information.

## ✨ Features

- **Real-time Movie Search**: Instantly search through thousands of movies
- **Trending Movies**: Stay updated with currently trending movies
- **Responsive Design**: Seamless experience across all devices
- **Modern UI**: Beautiful interface with backdrop blur effects and smooth animations
- **Error Handling**: Graceful error handling with error boundaries
- **Performance Optimized**: Debounced search for optimal performance

## 🚀 Tech Stack

- React
- Vite
- Tailwind CSS
- TMDB API
- Appwrite (for backend services)
- React Icons

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cineflare-movie-app.git
cd cineflare-movie-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

4. Start the development server:

```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables

- `VITE_TMDB_API_KEY`: Your TMDB API key
- `VITE_API_BASE_URL`: TMDB API base URL

### Appwrite Setup

The app uses Appwrite for backend services. Make sure to:

1. Set up an Appwrite project
2. Configure your Appwrite endpoint and project ID in `src/appwrite/config.js`

## 📱 Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── appwrite/           # Appwrite configuration and services
├── assets/            # Static assets
└── App.jsx            # Main application component
```

## 🎯 Key Features Explained

### Movie Search

- Real-time search with debouncing
- Instant results as you type
- Error handling for failed searches

### Trending Movies

- Display current trending movies
- Updated regularly through TMDB API
- Horizontal scrollable list

### Movie Cards

- Display movie posters
- Show ratings and release dates
- Original language information

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- [Appwrite](https://appwrite.io/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
