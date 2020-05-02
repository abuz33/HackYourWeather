import React, { useState } from 'react'
import Weather from './components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import DetailWeatherCard from './components/DetailWeatherCard'

function App({ props }) {
  const API_KEY = '2925c77ba08a4049d157ee2cf0d90282'

  const [cityName, setCityName] = useState('')
  const callBack = (city) => {
    setCityName(city)
  }
  return (
    <Router>
      <div className="text-center mt-4">
        <h1>Weather App</h1>
        <Switch>
          <Route path="/" exact>
            <Weather parentCallback={callBack} API_KEY={API_KEY} />
          </Route>
          <Route path="/:id">
            <DetailWeatherCard city={cityName} API_KEY={API_KEY} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
