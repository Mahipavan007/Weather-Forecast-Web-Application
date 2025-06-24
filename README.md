Weather Forecast Web Application

Objectives / Aim

•	To provide real-time weather information for any searched city.
•	To display a 24-hour scrollable hourly forecast in a user-friendly way.
•	To include voice input and interactive map for enhanced usability.
•	To ensure the app is responsive and visually engaging.
•	To help users easily plan their day based on accurate forecasts.
Short Introduction
Weather is an important part of daily decision-making. Many applications present this data in a cluttered or unclear manner. This project focuses on creating a simple, interactive web application that provides real-time weather data along with hourly updates, voice search, and map visualization. 
Diagrams

Include the following diagrams:

•	DFD (Data Flow Diagram) –Depicts the flow between the API and the User Interface.

![image](https://github.com/user-attachments/assets/ff2f830f-90b6-496b-9dea-12d133503bdd)


 

•	Use Case Diagram – Depicts the main user interactions with the system.

![image](https://github.com/user-attachments/assets/41919487-0f9c-4de3-8f86-5388ed5e29ec)

 
•	UML Component Diagram – Shows the logical components of the app (API handler, UI, voice input, etc.)

![image](https://github.com/user-attachments/assets/889d75e9-d632-43d8-823e-18694dcaa878)

 
Technical Steps – Support with Short Explanation and Screenshots

1.	Requirement Analysis: Identified features like city search, voice input, forecast, map.
   
User-Centric Overview

This weather forecast web application is designed with a focus on ease of use, real-time data, and multi-feature interaction. The primary user is any individual seeking weather information for a specific city or location. The system should provide fast, accurate, and visually engaging forecasts, with voice input and map features for enhanced accessibility.

 Functional Requirements :
 
Each function addresses a specific user need, enhancing the overall experience:

Search City

Description:

Allows user to give inputs of city names in any place worldwide.

Functionality:

•	Input field for typing the city name.
•	Button to trigger the search.

Purpose:

Acts as the entry point for all weather-related queries.
Get Current Weather

Description:

Displays real-time weather data for the selected city.

Data Includes:
•	Temperature (°C)
•	Weather condition (e.g., clear, rainy, cloudy)
•	Date and time

Purpose:
Helps users instantly view current weather conditions.
View 24-Hour Forecast

Description:
Shows hourly weather prediction for the next 24 hours.

Features:
•	Horizontally scrollable interface
•	Time-based hourly weather (e.g., 1 PM: 🌦️, 2 PM: ☀️)

Purpose:
Gives users an idea of how the weather will change throughout the day.
 🎤 Use Voice Input
 
Description:
Enables hands-free search using speech recognition.

Implementation:
•	Uses the Web Speech API
•	Converts spoken city names into text

Purpose:
Provides easy accessibility to the user to get familiarise with the application.
 View City on Map
 
Description:
Displays the location of the searched city on an interactive map.

Integration:
•	Google Maps API or OpenStreetMap
•	Option to zoom/pan the map

Purpose:
Provides geographic context and improves user interaction with the city data.
View Wind and Humidity

Description:
Displays environmental details such as:
•	Wind speed and direction
•	Humidity percentage

Purpose:
Helps users plan activities (e.g., outdoor events, exercise) based on comfort factors.
See Weather Icons/Emojis

Description:
Graphical or emoji-based icons that represent current weather.

Examples:
•	☀️ Sunny
•	🌧️ Rainy
•	⛅ Partly Cloudy
•	🌩️ Thunderstorm
Purpose:
Makes the UI more intuitive and visually engaging.

Interact with Responsive UI

Description:
User interface adapts across devices and screen sizes.

Design Features:
•	Mobile-first design
•	Touch-friendly elements
•	Scalable components (cards, containers, scroll areas)

Purpose:
	Enables the end users to use this application in any kind of devices(tablet, mobiles, laptop..).

![image](https://github.com/user-attachments/assets/10304fa3-27c5-4a42-b785-f9d069083b35)

 

2.	API Integration:
Used the Open WeatherMap API to get real time weather and hourly information regarding weather.

3.	Weather Display: 
Displayed temperature in °C, conditions(cloudy/rainy/storm), wind speed(in m/s), and humidity levels in atmosphere at a particular searched place. 

 ![image](https://github.com/user-attachments/assets/76914931-536e-4eaf-8547-a9091b181dd3)


Wind speed and Humidity

![image](https://github.com/user-attachments/assets/e17feb19-7ed3-40ff-8613-56c513622752)

 

4.	Forecast Renderer: Scrollable section shows weather for next 24 hours with emojis.

 ![image](https://github.com/user-attachments/assets/420310d5-1816-4af5-8449-b6b14a20ecd0)


The Forecast Renderer is responsible for displaying the weather forecast for the next 24 hours in a visually engaging format. Each card represents a 1-hour interval and includes:
•	🌡️ The temperature (in °C)

•	🌦️ A weather condition emoji (e.g., ☀️ for sunny, 🌧️ for rain, ☁️ for cloudy)

5.	Map Integration:
   Used Leaflet.js and OpenStreetMap to pin city location.

 ![image](https://github.com/user-attachments/assets/9499030f-dc6a-419c-8cd0-a3c8f451c949)


6.	Voice Input: Integrated Web Speech API to allow voice search of city names.

![image](https://github.com/user-attachments/assets/866b4cfc-806e-4409-9165-286fa18650d5)

 
Challenges / Limitations
•	Accuracy depends on external weather API data.
•	Voice input may not work in all browsers.
•	Some weather icons/emojis are symbolic, not scientific.
•	Performance may vary slightly with slow networks.

Conclusion / Summary
This project successfully implements a modern, responsive web application for weather forecasting. It allows users to get real-time weather conditions, hourly updates, and a 24-hour forecast in a visually appealing and interactive layout. The project combines practical usefulness with academic value and offers a solid foundation for further enhancement.

References
•	https://openweathermap.org/api

•	https://leafletjs.com

•	https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

•	https://fonts.google.com

•	https://flaticon.com
