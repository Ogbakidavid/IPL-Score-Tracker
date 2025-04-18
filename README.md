# IPL Score Tracker 🎯

The **IPL Score Tracker** is a React-based web application that provides live IPL scores, player rankings, team stats, and schedules for the Indian Premier League 2025 season. It features a modern UI with responsive design and interactive components.

## Features 💡

- **Live Scores**: Track live IPL scores in real-time.
- **Player Rankings**: View player rankings with detailed stats.
- **Team Stats**: Explore team standings and performance metrics.
- **Schedules**: Check the IPL match schedule.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack 💻

- **React**: Frontend framework for building the UI.
- **React Router**: For navigation and routing.
- **Axios**: For API requests.
- **Framer Motion**: For animations.
- **Tailwind CSS**: For styling.
- **Lucide React**: For icons.

## Projecr Structure 📊
  
- src/
├── components/
│   ├── Header.jsx       # Navigation bar
│   ├── Home.jsx         # Home section
│   ├── PlayerRanking.jsx # Player rankings section
│   ├── Stat.jsx         # Stats and highlights section
│   └── Footer.jsx       # Footer section
├── page/
│   └── HomePage.jsx     # Main homepage layout
├── services/
│   └── api.jsx          # API service for fetching data
├── ui/
│   └── Button.jsx       # Reusable button component
├── App.jsx             # Main app component
├── main.jsx             # Entry point
└── assets/
    └── stadium.jpg      # Background image

## API Integration 🧩
  
- const HEADERS = {
  'x-rapidapi-key': 'YOUR_API_KEY',
  'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com',
};
