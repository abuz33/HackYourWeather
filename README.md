> Make sure you're building on last week's codebase.

Let's continue building on our application! This week you'll replace the application's data source: instead of using a JSON file you'll be using an external API, called [OpenWeatherMap](https://openweathermap.org/). In addition to that, you'll add a `search functionality` that allows a user to type in a city name and retrieve weather data on it!

### 1. Setup

1. Sign up for an API key at [OpenWeatherMap App ID](https://openweathermap.org/appid)
2. Create a `.env` file in the root of your project folder
3. Paste the API key inside the `.env` file with the name `REACT_APP_OPENWEATHERMAP_API_KEY`

### 2. Requirements

By the end of this week's assignment your application should look similar to this:

![Week 2 Wireframe](../assets/project/week2.png)

Here are the requirements your project needs to fulfill:

- Your form should have `controlled inputs`
- Make an API call when the button is clicked
- Display the city + weather information similar to week 1
- Make a component for the search
- Incorporate error handling for the API call
- Show user feedback when there are no cities searched for yet
- Redeploy your static site

Hints:

- For the form, use the `onChange` and `value` attributes
- Take the name of the city to use in the API call