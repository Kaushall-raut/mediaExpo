# mediaExpo react project

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/react-project.git
```
2. Navigate to the project directory:
```
cd react-project
```
3. Install the dependencies:
```
npm install
```

## Usage

1. Start the development server:
```
npm run dev
```
2. Open your browser and navigate to `http://localhost:5173`.

## API

The project uses the following APIs:

- Unsplash API for fetching photos
- Pexels API for fetching videos
- Tenor API for fetching GIFs

You will need to provide your own API keys for these services. Create a `.env` file in the root directory and add the following environment variables:

```
VITE_UNSPLASH_API=your_unsplash_api_key
VITE_PIXELS_KEY=your_pexels_api_key
VITE_TENOR_KEY=your_tenor_api_key
```

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).