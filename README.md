# Weather App

A responsive weather application built with VITE, React, JavaScript, CSS, and the OpenWeatherMap API. This project provides current weather data for any city, including temperature, humidity, and wind speed, with a user-friendly interface.

## Description

This Weather App allows users to search for current weather conditions in any city. It displays temperature, humidity, wind speed, and an appropriate weather icon. The application is built using modern web technologies, ensuring a smooth and responsive user experience.

## Features

- Real-time weather data for any city.
- Displays temperature, humidity, and wind speed.
- Dynamic weather icons based on current conditions.
- Responsive design for optimal viewing on various devices.
- Initial weather data fetch for San Diego on load.

## Technologies Used

- **VITE**: Frontend tooling.
- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language for the web.
- **CSS**: Styling for the application.
- **OpenWeatherMap API**: Source of weather data. https://openweathermap.org/api/

## Clone Repository

To clone this repository, use the following command:

```bash
git clone https://github.com/momarshirley/Weather-App.git
```

## Usage

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using npm install.
4. Create a .env file in the root directory and add your OpenWeatherMap API key:

   VITE_APP_ID=your_openweathermap_api_key

5. Start the development server using npm run dev.
6. Open your browser and navigate to http://localhost:3000.

## Accessibility

The Weather App is designed with accessibility in mind, ensuring that it can be used by as many people as possible, including those with disabilities. The app features keyboard navigation and screen reader support.

## Responsiveness

The Weather App is fully responsive, ensuring a seamless experience across various devices, from mobile phones to desktop computers.

## File Structure

Weather-App/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ ├── clear.png
│ │ ├── cloud.png
│ │ ├── drizzle.png
│ │ ├── rain.png
│ │ ├── snow.png
│ │ ├── humidity.png
│ │ ├── wind.png
│ │ └── search.png
│ ├── components/
│ │ ├── SearchBar/
│ │ │ ├── SearchBar.jsx
│ │ │ └── searchBar.css
│ │ ├── Weather/
│ │ │ ├── Weather.jsx
│ │ │ └── weather.css
│ ├── services/
│ │ └── weatherService.js
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

## Credits

- Weather data provided by OpenWeatherMap.
- Icons from OpenWeatherMap Icons.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or enhancements.

## Contact

For any inquiries or feedback, feel free to contact me at momarshirley@gmail.com.
